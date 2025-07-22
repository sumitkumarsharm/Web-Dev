import React, { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";

const UserForm = () => {
  const { addUser } = useContext(DataContext);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", age: "", gender: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded w-80 shadow"
    >
      <h2 className="text-lg font-semibold mb-2">Add User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="block w-full mb-2 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
