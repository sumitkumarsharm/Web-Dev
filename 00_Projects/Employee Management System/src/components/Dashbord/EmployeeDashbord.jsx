import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = () => {
  return (
    <div className="p-10 bg-gray-800 h-screen w-screen text-white">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashbord;
