import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormData } from "../freatures/counterSlice";

const Form = () => {
  const [user, setUser] = useState("");
  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(FormData({ id: Date.now(), user: user }));
    setUser("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border rounded-md mr-2"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button
        className={`border rounded-md px-5 py-1 ${
          user.trim() === ""
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-500 text-white"
        }`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
