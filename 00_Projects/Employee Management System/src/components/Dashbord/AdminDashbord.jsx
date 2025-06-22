import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashbord = () => {
  return (
    <div className="w-screen h-screen p-10 bg-neutral-900 text-white ">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashbord;
