import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null)
  const [employees, setEmployees] = useState(null)
  useEffect(() => {
    setLocalStorage();
    // localStorage.clear()
    
    const { employees, admin } = getLocalStorage();
    setAdmin(admin);
    setEmployees(employees);
  }, []);


  return (
    <AuthContext.Provider value={{ admin, employees, setEmployees }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthData = () => useContext(AuthContext);

export default AuthProvider