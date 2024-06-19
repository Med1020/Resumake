import React, { useState } from "react";
import { loginAPI } from "../Requests/apiServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { setLoginLogout } from "../Redux/Slice/auth";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    errors[name] && clearErrors(name);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await loginAPI({
        email: credentials.email,
        password: credentials.password,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        dispatch(setLoginLogout(true));
        navigate(-1);
      } else {
        if (response === "Incorrect email") {
          toast.error("Account does not exist with this email");
        } else if (response === "Incorrect password") {
          toast.error(response);
        } else {
          console.error("Login failed:", response);
          toast.error("An error occurred during login");
        }
      }
    } catch (error) {
      toast.error("Server error: Try again later");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/4 bg-white p-4 rounded-lg">
          <header className="text-xl font-bold pb-5">Login</header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label>Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Enter your email"
                id="email"
                className="block p-2 rounded-md mt-2  w-full bg-slate-100"
                onInput={handleChange}
              />
              {errors.email && (
                <p className="font-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="pb-2">Password</label>
              <input
                {...register("password", {
                  required: true,
                  maxLength: 20,
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="block p-2 rounded-md mt-2 w-full bg-slate-100"
                onInput={handleChange}
              />
              {errors.password?.type === "required" && (
                <p className="font-xs text-red-500">Password is required</p>
              )}
            </div>
            <div className="cursor-pointer text-sm font-bold mt-5 text-blue-900">
              <p>Forgot password?</p>
            </div>
            <button
              type="submit"
              id="submit"
              disabled={isLoading ? true : false}
              className="bg-sky-500 px-3 py-2 rounded-md my-8 text-white w-full"
            >
              {isLoading ? "Loading" : "Login"}
            </button>
            <div
              className="text-center mb-4 font-bold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <p>Create Account</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
