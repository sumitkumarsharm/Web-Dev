import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../freatures/counterSlice";

const Counter = () => {
  const Dispatch = useDispatch();
  const counts = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter App</h1>
      <p>
        Count:{" "}
        <span className="text-xl text-green-500 font-bold">{counts}</span>
      </p>
      <button
        onClick={() => {
          Dispatch(increment());
        }}
        className="text-xl border  border-spacing-2 px-5 py-2 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => {
          Dispatch(decrement());
        }}
        className="text-xl border  border-spacing-2 px-5 py-2 rounded ml-1"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
