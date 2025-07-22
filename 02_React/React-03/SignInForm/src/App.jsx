import React from "react";
import SignInForm from "./components/HandleAlltypeForm/SignInForm";
import SignInForm2 from "./components/HandleAlltypeForm/SignInForm2";
import SignUpForm from "./components/HandleAlltypeForm/SignUpForm";
import ReactHookForm from "./components/HandleAlltypeForm/ReactHookForm";
import SingleStateForm from "./components/HandleAlltypeForm/singleStateForm";

const App = () => {
  return (
    <div className="p-6 w-full h-screen mx-auto bg-neutral-800 rounded shadow">
      {/* multipal useState */}
      {/* <SignInForm /> */}
      {/* Single useState */}
      {/* <SignInForm2 /> */}

      {/* using react-form-hook */}
      {/* <SignUpForm/> */}
      {/* <ReactHookForm /> */}
      <SingleStateForm />
    </div>
  );
};

export default App;
