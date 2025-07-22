import React from "react";
import { useSelector } from "react-redux";
const CounterApp = () => {
  const counts = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1 className="text-3xl">
        Count :{" "}
        <span className="text-2xl font-bold text-green-700">{counts}</span>
      </h1>
    </div>
  );
};

export default CounterApp;
