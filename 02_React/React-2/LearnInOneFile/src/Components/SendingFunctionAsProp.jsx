import React from "react";

const SendingFunctionAsProp = ({ alertMe }) => {
  return (
    <div>
      <button className=" border-2 px-6 rounded py-4 m-5" onClick={() => alertMe()}>
        Click for Alerts
      </button>
    </div>
  );
};

export default SendingFunctionAsProp;
