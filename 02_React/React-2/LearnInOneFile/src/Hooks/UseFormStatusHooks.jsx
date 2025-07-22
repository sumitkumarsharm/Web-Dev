import React from "react";
import { useFormStatus } from "react-dom";

const UseFormStatusHooks = () => {
  const HandleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log("Submit");
  };

  const CoustomForm = () => {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
      <div>
        <input
          className="border-2 px-3 py-1 text-xl"
          type="text"
          placeholder="Enter Name...."
        />
        <br />
        <br />
        <input
          className="border-2 px-3 py-1 text-xl"
          type="password"
          placeholder="Enter Password...."
        />
        <br />
        <br />
        <button
          disabled={pending}
          className="border-2 px-3 py-1 rounded-sm text-xl font-bold"
        >
          Submit
        </button>
      </div>
    );
  };
  return (
    <div>
      <h1 className="text-3xl mb-2">Use Form Status Hooks</h1>
      <form action={HandleSubmit}>
        <CoustomForm />
      </form>
    </div>
  );
};

export default UseFormStatusHooks;
