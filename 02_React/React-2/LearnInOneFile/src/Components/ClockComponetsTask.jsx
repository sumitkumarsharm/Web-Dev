import React, { useState } from "react";
import Clock from "./Clock";

const ClockComponetsTask = () => {
  const [color, setColor] = useState("white");
  //   let date = new Date();
  //   let times = date.toLocaleTimeString();
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold italic text-center mt-2 ">
        Defult Props in React
      </h1>
      <div className="w-full flex justify-center items-center gap-3 ">
        <Clock color={color} />
        <select
          className="py-5 italic rounded-xl px-8 text-4xl border bg-black"
          style={{ color: color }}
          onChange={(e) => setColor(e.target.value)}
        >
          <option style={{ color: color }} value="">
            Select Color
          </option>
          <option style={{ color: color }} value="red">
            Red
          </option>
          <option style={{ color: color }} value="green">
            Green
          </option>
          <option style={{ color: color }} value="blue">
            Blue
          </option>
          <option style={{ color: color }} value="cyan">
            cyan
          </option>
          <option style={{ color: color }} value="Pink">
            Pink
          </option>
          <option style={{ color: color }} value="gray">
            Gray
          </option>
          <option style={{ color: color }} value="yellow">
            yellow
          </option>
        </select>
      </div>
     
    </div>
  );
};

export default ClockComponetsTask;
