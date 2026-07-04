import { useContext } from "react";
import LoginContext from "./AuthContext.js";

function useAuth() {
  const ctx = useContext(LoginContext);
  return ctx;
}

export default useAuth;
