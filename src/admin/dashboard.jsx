import React from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";

function dashboard() {
  const user = JSON.parse(localStorage.getItem("UserData"));
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("UserData");
    navigate("/admin");
  }

  return (
    <div>
      <AdminHeader />
      <div className="grid grid-cols-2">
        <div>Sidebar</div>
        <div>Dashboard</div>
      </div>
      <button onClick={(e) => handleLogout(e)}>Cerrar sesión</button>
      <AdminFooter />
    </div>
  );
}

export default dashboard;
