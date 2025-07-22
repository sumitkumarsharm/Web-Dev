import React, { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className={`bg-black  text-4xl italic py-6 px-8 rounded-xl `}>
      <h1 style={{ color: color }}>{time}</h1>
    </div>
  );
};

export default Clock;
