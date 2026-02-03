import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import { useAuthData } from "./context/AuthProvider";

const App = () => {
  const { admin, employees } = useAuthData();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  // LOADING
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser.role);
      setUserData(loggedInUser.data);
    }

    setAuthLoading(false); 
  }, []);

  if (authLoading) {
    return (
      <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
       <h2 className="text-2xl md:text-4xl text-pink-600 font-semibold"> LOADING...</h2>
      </div>
    );
  }

  const handleLogin = (email, password) => {
    if (email === "codebyansh@gmail.com" && password === "123") {
      setUser("admin");
      setUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    }
    else {
      const employee = employees?.find(
        emp => emp.email === email && emp.password === password
      );

      if (employee) {
        setUser("employee");
        setUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard userData={userData} setUser={setUser} />}
      {user === "employee" && <EmployeeDashboard userData={userData} setUser={setUser} />}
    </>
  );
};

export default App;
