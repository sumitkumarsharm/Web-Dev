import { useContext, useEffect, useState } from "react";
import LoginAuth from "./components/Auth/LoginAuth";
import EmployeeDashbord from "./components/Dashbord/EmployeeDashbord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { getLocalStorage, setLocalStorage } from "./utils/localStorageUtils";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
    setLocalStorage();
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.Admin.find((a) => a.email === email && a.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.Employee.find(
        (e) => e.email === email && e.password === password
      )
    ) {
      setUser("Employee");
      localStorage.setItem("loggedInUser", "Employee");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <LoginAuth handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashbord /> : <EmployeeDashbord />}
    </>
  );
}

export default App;
