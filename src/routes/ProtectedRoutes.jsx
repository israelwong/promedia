import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function ProtectedRoutes() {
  // const sesion = localStorage.getItem("auth");
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
