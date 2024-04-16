import React from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../auth/AuthContext";

function dashboard() {
  const user = JSON.parse(localStorage.getItem("UserData"));
  const navigate = useNavigate();
  // const { setIsAuthenticated } = React.useContext(AuthContext);

  async function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("UserData");
    navigate("/admin");
    // console.log("Cerrar sesión");
    // setIsAuthenticated(false);
  }

  return (
    <div>
      Dashboard
      <button onClick={(e) => handleLogout(e)}>Cerrar sesión</button>
    </div>
  );
}

export default dashboard;
