import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(user, password) {
    console.log(user, password);
    let resonse = user == "israelwong" && password == "123456" ? true : false;
    return resonse;
    //!axios
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
