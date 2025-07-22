import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [userData, setUserData] = useState([]);
  const onsubmit = (data) => {
    setUserData((prev) => [...prev, data]);
    reset();
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="mt-3">
            username:
          <input
            className="border"
            type="text"
            {...register("username", { required: true })}
          />
        </div>
        <div className="mt-3">
            Password:
          <input
            className="border"
            type="password"
            {...register("Password", { required: true })}
          />
        </div>
        <div className="mt-3">
            Age:
          <input className="border" type="number" {...register("Age", { required: true })} />
        </div>
        <button type="submit" className="border">submit  </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
