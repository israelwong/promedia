import React from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function dashboard() {
  const { setIsAuthenticated } = React.useContext(AuthContext);

  async function handleLogout(e) {
    e.preventDefault();
    console.log("Cerrar sesión");
    setIsAuthenticated(false);
  }

  return (
    <div>
      Dashboard
      <button onClick={(e) => handleLogout(e)}>Cerrar sesión</button>
    </div>
  );
}

export default dashboard;
