import React, { useState } from "react";

const ControlledComponents = () => {
  // A controlled component is a form whose input field value is controlled by a React state.
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <div>
      <label htmlFor="name" className="text-3xl font-bold mr-2">
        Name :
      </label>
      <input
        className="border-2 text-2xl mt-5 px-2 py-3"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name..."
        name="name"
      />
      <br />
      <label htmlFor="name" className="text-3xl font-bold mr-2">
        Password :
      </label>
      <input
        className="border-2 text-2xl mt-5 px-2 py-3"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password..."
      />
      <br />
      <label htmlFor="name" className="text-3xl font-bold mr-2">
        Email :
      </label>
      <input
        className="border-2 text-2xl mt-5 px-2 py-3"
        type="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter emial..."
      />
      <br />
      <button className="border-2 text-2xl font-semibold p-3 m-2 rounded-xl">
        submit
      </button>
      <button
        className="border-2 text-2xl font-semibold p-3 m-2 rounded-xl"
        onClick={() => (setEmail(""), setName(""), setPassword(""))}
      >
        clear
      </button>
      <h3
        className="text-xl font-bold
        "
      >
        Name: {name}
      </h3>
      <h3
        className="text-xl font-bold
        "
      >
        Email: {Email}
      </h3>
      <h3
        className="text-xl font-bold
        "
      >
        Password: {password}
      </h3>
    </div>
  );
};

export default ControlledComponents;
