import React, { useState } from "react";
import ShowAlluser from "./ShowAlluser";

const SignInForm = () => {
  const [username, setUsername] = useState(""); // username
  const [password, setPassword] = useState(""); // password
  const [userData, setUserData] = useState([]); // all users

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") return;

    const newUser = {
      username: username,
      password: password,
    };

    setUserData((prev) => [...prev, newUser]);

    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-neutral-700 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login Form</h2>

      <form
        onSubmit={handleSubmit}
        className=" text-white flex flex-col gap-2 rounded-sm"
      >
        <div>
          <label className="block font-medium">Username:</label>
          <input
            type="text"
            value={username}
            placeholder="Enter you username...."
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-0 text-white border-black"
          />
        </div>
        <div>
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter you password...."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded outline-0 text-white border-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">All Users</h3>
        <ShowAlluser users={userData} />
      </div>
    </div>
  );
};

export default SignInForm;
