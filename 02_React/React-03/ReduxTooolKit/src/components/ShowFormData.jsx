import React from "react";
import { useSelector } from "react-redux";

const ShowFormData = () => {
  const UserData = useSelector((state) => state.counter.name);
  return (
    <div>
      <h1 className="text-3xl">ShowFormData</h1>

      {UserData.map((item) => (
        <div key={item.id}>
          <p>{item.user}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowFormData;
