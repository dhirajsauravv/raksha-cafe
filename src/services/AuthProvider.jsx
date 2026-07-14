import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { postSignInData, postSignUpData } from "./authentication";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(email, password) {
    try {
      const response = await postSignInData(email, password);

      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function register(name, email, password) {
    try {
      const response = await postSignUpData(name, email, password);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
