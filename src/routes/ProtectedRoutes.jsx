import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "../auth/AuthContext";

function ProtectedRoutes() {
  // const { isAuthenticated } = React.useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("UserData"));
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
