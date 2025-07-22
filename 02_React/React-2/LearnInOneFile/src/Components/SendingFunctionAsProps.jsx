import React from "react";
import SendingFunctionAsProp from "./SendingFunctionAsProp";

const SendingFunctionAsProps = () => {
  const alertMe = () => alert("This is an Alert for sending props as function");
  return (
    <div>
      <h1 className="border-3 px-7 py-6">Send Function As Props</h1>
      <SendingFunctionAsProp alertMe={alertMe} />
    </div>
  );
};

export default SendingFunctionAsProps;
