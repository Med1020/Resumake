import React, { useState } from "react";
import { loginAPI } from "../Services/apiServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPI({
        email: credentials.email,
        password: credentials.password,
      });
      if (response.token) {
        navigate("/");
      } else {
        console.log("Server error");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="w-1/4 m-auto">
      <div className="w-full">
        <header className="text-xl font-bold pb-5">Login</header>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 ">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="block p-2 rounded-md mt-2 mb-5 w-full"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="pb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="block p-2 rounded-md mt-2 mb-5 w-full"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 px-3 py-2 rounded-md my-2 text-white w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
