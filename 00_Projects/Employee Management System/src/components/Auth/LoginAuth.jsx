import React, { useState } from "react";

const LoginAuth = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-800">
      <div className="border-2 border-emerald-600 rounded-xl px-14 py-10">
        <h2 className="text-center mb-10 text-3xl text-white font-bold">
          Login
        </h2>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center gap-5"
          action=""
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-300"
            type="email"
            placeholder="Enter your email.."
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-300"
            type="password"
            placeholder="Enter your password.."
          />
          <button className="border-none bg-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAuth;
