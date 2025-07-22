import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ShowAlluser from "./ShowAlluser";

const SingleStateForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState([]);

  const onsubmit = (data) => {
    setUserData((prev) => [...prev, data]);
    reset();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-neutral-700 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login Form</h2>

      <form
        onSubmit={handleSubmit(onsubmit)}
        className=" text-white flex flex-col gap-2 rounded-sm"
      >
        <div>
          <label className="block font-medium">Name :</label>
          <input
            type="text"
            {...register("Name", { required: true })}
            placeholder="Enter you username...."
            className="w-full border px-3 py-2 rounded outline-0 text-white border-black"
          />
        </div>
        <div>
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter you password...."
            className="w-full border px-3 py-2 rounded outline-0 text-white border-black"
          />
        </div>
        <div>
          <label className="block font-medium">Age:</label>
          <input
            type="password"
            {...register("Age", { required: true })}
            placeholder="Enter you password...."
            className="w-full border px-3 py-2 rounded outline-0 text-white border-black"
          />
        </div>
        <div>
          <label className="block font-medium">Gender:</label>
          <input
            type="text"
            placeholder="Enter you password...."
            {...register("gender", { required: true })}
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

export default SingleStateForm;
