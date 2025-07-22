import { useForm } from "react-hook-form";
import { useState } from "react";
import ShowAlluser from "./ShowAlluser";

function SignUpForm() {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState([]);

  const onSubmit = (data) => {
    setUserData((prev) => [...prev, data]);
    reset();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login Form (React Hook Form)</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Username (namehtor):</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Password (another):</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full border px-3 py-2 rounded"
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
}

export default SignUpForm;
