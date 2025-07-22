import React, { useState } from "react";
import UseEffectChildProps from "./UseEffectChildProps";

const UseEffectWithProps = () => {
  const [student, setStudent] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <UseEffectChildProps student={student} count={count} />
      <button
        className="border px-4 ml-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        count
      </button>
      <button
        className="border px-4 ml-1"
        onClick={() => setStudent((prev) => prev + 1)}
      >
        Student
      </button>
    </div>
  );
};

export default UseEffectWithProps;
