import { useState } from "react";
import AuthContext from "./AuthContext";
import { postSignInData, postSignUpData } from "./authentication";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function login(email, password) {
    try {
      const response = await postSignInData(email, password);
      console.log("Login Success");
      const token = response.data.token;
      setIsLoggedIn(true);
      console.log("isLoggedIn set to true");
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }

  async function register(name, email, password) {
    try {
      const response = await postSignUpData(name, email, password);
      const token = response.data.token;
      setIsLoggedIn(true);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
