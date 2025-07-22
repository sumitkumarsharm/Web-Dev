import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex justify-between gap-2 mt-10">
      <div className="px-9 w-[25%] py-6 bg-red-400 rounded-xl">
        <h2 className="text-5xl font-extrabold">0</h2>
        <p className="text-3xl font-bold">New Task</p>
      </div>
      <div className="px-9 w-[25%] py-6 bg-blue-400 rounded-xl">
        <h2 className="text-5xl font-extrabold">0</h2>
        <p className="text-3xl font-bold">New Task</p>
      </div>
      <div className="px-9 w-[25%] py-6 bg-green-400 rounded-xl">
        <h2 className="text-5xl font-extrabold">0</h2>
        <p className="text-3xl font-bold">New Task</p>
      </div>
      <div className="px-9 w-[25%] py-6 bg-yellow-400 rounded-xl">
        <h2 className="text-5xl font-extrabold">0</h2>
        <p className="text-3xl font-bold">New Task</p>
      </div>
    </div>
  );
};

export default TaskListNumber;
