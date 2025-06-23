import React, { useEffect } from "react";

const UseEffectChildProps = ({ student, count }) => {
  const callOnce = () => {
    console.log("Learning useEffect with Props ");
  };
  useEffect(() => {
    callOnce();
  }, [student]);
  return (
    <div>
      <h1>count : {count}</h1>
      <h1>Student : {student}</h1>
    </div>
  );
};

export default UseEffectChildProps;
