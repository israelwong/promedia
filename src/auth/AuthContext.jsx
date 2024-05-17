import React from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const url = "https://promedia-production.up.railway.app/api";
  const url = "http://localhost:3306/api/";

  async function login(user, password) {
    let respose = false;

    const { data } = await axios({
      method: "post",
      url: `${url}/colaborador-auth/`,
      data: {
        user,
        password,
      },
    });

    // console.log(data);

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
