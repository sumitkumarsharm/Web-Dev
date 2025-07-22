import React from "react";
import Counter from "./components/counter";
import CounterApp from "./components/counterApp";
import { useSelector } from "react-redux";
import Form from "./components/Form";
import ShowFormData from "./components/ShowFormData";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl">Redux TooolKit</h1>
      {/* <Counter />
      <CounterApp /> */}
      <Form />
      <ShowFormData />
    </div>
  );
};

export default App;
