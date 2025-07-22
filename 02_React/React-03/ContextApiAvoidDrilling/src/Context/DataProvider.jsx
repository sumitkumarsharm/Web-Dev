import React, { useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...newUser }]);
  };

  return (
    <DataContext.Provider value={{ users, addUser }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
