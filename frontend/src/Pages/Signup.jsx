import React, { useState } from "react";
import { signupAPI } from "../Requests/apiServices";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    errors[name] && clearErrors(name);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const { response } = await signupAPI({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        password: credentials.password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/login");
        toast.success("User created successfully");
      } else if (response.status === 409) {
        toast.error("User already exists!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="w-1/3 bg-white p-4 rounded-lg">
          <header className="text-xl font-bold pb-5">Sign Up</header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full flex mb-2">
              <div className="mb-2 flex-1 mr-4 inline-block">
                <label>First Name</label>
                <span className="inline-block text-xs ml-2">
                  {errors.firstName && (
                    <p className="font-xs text-red-500">
                      *{errors.firstName.message}
                    </p>
                  )}
                </span>

                <input
                  name="firstName"
                  {...register("firstName", {
                    required: "required",
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  placeholder="First Name"
                  className="block p-2 rounded-md mt-2 w-full bg-slate-100"
                  onInput={handleChange}
                />
              </div>
              <div className="mb-2 flex-1 inline-block">
                <label>Last Name</label>
                <span className="inline-block text-xs ml-2">
                  {errors.lastName && (
                    <p className="font-xs text-red-500">
                      *{errors.lastName.message}
                    </p>
                  )}
                </span>
                <input
                  {...register("lastName", {
                    required: "required",
                  })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  name="lastName"
                  placeholder="Last Name"
                  className="block p-2 rounded-md mt-2  w-full bg-slate-100"
                  onInput={handleChange}
                />
              </div>
            </div>
            <div className="mb-2 ">
              <label>Email</label>
              <span className="inline-block text-xs ml-2">
                {errors.email && (
                  <p className="font-xs text-red-500">
                    *{errors.email.message}
                  </p>
                )}
              </span>
              <input
                {...register("email", {
                  required: "required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                name="email"
                placeholder="Enter your email"
                className="block p-2 rounded-md mt-2 mb-5 w-full bg-slate-100"
                onInput={handleChange}
              />
            </div>
            <div>
              <label className="pb-2">Password</label>
              <span className="inline-block text-xs ml-2">
                {errors.password && (
                  <p className="font-xs text-red-500">
                    *{errors.password.message}
                  </p>
                )}
              </span>
              <input
                {...register("password", {
                  required: "required",
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="block p-2 rounded-md mt-2 mb-5 w-full bg-slate-100"
                onInput={handleChange}
              />
            </div>
            <div>
              <label className="pb-2">Confirm Password</label>
              <span className="inline-block text-xs ml-2">
                {errors.confirmPassword && (
                  <p className="font-xs text-red-500">
                    *{errors.confirmPassword.message}
                  </p>
                )}
              </span>
              <input
                {...register("confirmPassword", {
                  required: "required",
                })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="block p-2 rounded-md mt-2  w-full bg-slate-100"
                onInput={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-sky-500 px-3 py-2 rounded-md my-8 text-white w-full"
              disabled={isLoading ? true : false}
            >
              Sign up
            </button>
            <div className="text-center mb-4 font-bold">
              <p>
                Already have an account?{" "}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
