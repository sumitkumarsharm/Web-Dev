import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageUtils";

// making context
export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  setLocalStorage();
  useEffect(() => {
    const { Employee, Admin } = getLocalStorage();
    setUserData({ Employee, Admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
