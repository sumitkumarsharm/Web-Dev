import React, { useState } from "react";

const GetInputValue = () => {
  const [name, setName] = useState("Sumit sharma");
  return (
    <div>
      <h1 className="text-3xl">Get Input value form Input tag</h1>

      <input
        className="border-2 text-2xl px-2 py-3 mt-2 ml-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name..."
      />
      <button
        className="text-2xl font-semibold border-2 mx-2 py-3 px-5 rounded-xl active:scale-[1.1] transition-all"
        onClick={() => setName("")}
      >
        Clear text
      </button>
      <h1 className="text-4xl font-bold capitalize">{name}</h1>
    </div>
  );
};

export default GetInputValue;
