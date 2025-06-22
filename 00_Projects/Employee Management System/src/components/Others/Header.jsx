import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-semibold">
          Hello!, <br />
          <span className="text-3xl font-bold"> Sumit👋</span>
        </h1>
        <button className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium"> LogOut</button>
      </div>
    </div>
  );
};

export default Header;
