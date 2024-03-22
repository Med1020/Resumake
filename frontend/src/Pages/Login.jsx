import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventdefault();
    try {
      const response = fetch();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="w-1/4 m-auto">
      <div className="w-full">
        <header className="text-xl font-bold pb-5">Login</header>
        <form>
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
          <button className="bg-sky-500 px-3 py-2 rounded-md my-2 text-white w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
