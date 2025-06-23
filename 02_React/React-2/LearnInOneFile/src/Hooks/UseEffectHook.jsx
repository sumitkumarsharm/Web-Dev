import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(7676);
  const CountNumber = () => {
    let sum = 0;
    for (let index = 0; index < 100000000; index++) {
      sum = Math.random() * 10000 * index;
    }
    return sum;
  };
  useEffect(() => {
    console.log(CountNumber());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-extrabold ">Count : {count}</h1>
      <button
        className="border px-5 py-1 text-2xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add by 1
      </button>
      <h1 className="text-3xl font-extrabold ">Count : {number}</h1>
      <button
        className="border px-5 py-1 text-2xl"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Add by 1
      </button>
    </div>
  );
};

export default UseEffectHook;
