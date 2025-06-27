import React from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";

const App = () => {
  return (
    <div>
      <h1 className="text-6xl text-center font-bold mb-18">
        Props Drilling & Context-Api
      </h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
