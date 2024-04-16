import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(user, password) {
    let respose = false;

    const { data } = await axios({
      method: "post",
      url: "http://localhost:3306/api/colaborador-auth/",
      data: {
        user,
        password,
      },
    });

    if (data.estatus === 200) {
      localStorage.setItem("UserData", JSON.stringify(data));
      respose = true;
    }
    return respose;
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
