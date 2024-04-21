import React, { useState } from "react";
import { loginAPI } from "../Services/apiServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../State/Slice/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

      if (response?.token) {
        navigate(-1);
        dispatch(setIsLoggedIn(true));
        toast.success("Logged in successfully");
      } else if (response.message === "Invalid email") {
        toast.error("Email does not exist");
      } else if (response.message === "Invalid password") {
        toast.error("Incorrect Password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
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
                className="block p-2 rounded-md mt-2  w-full bg-slate-100"
                onChange={handleChange}
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
                placeholder="Enter your password"
                className="block p-2 rounded-md mt-2 w-full bg-slate-100"
                onChange={handleChange}
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
