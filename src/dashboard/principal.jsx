import React from "react";
import AdminHeader from "./components/AdminHeader";
import AdminFooter from "./components/AdminFooter";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function dashboard() {
  const user = JSON.parse(localStorage.getItem("UserData"));

  const menu = [
    { title: "Dashboard", url: "/dashboard/principal" },
    { title: "Proyectos", url: "/dashboard/proyectos" },
    { title: "Prospectos", url: "/dashboard/prospectos" },
    { title: "Contabilidad", url: "/dashboard/contabilidad" },
    { title: "Configuración", url: "/dashboard/configuracion" },
  ];

  return (
    <div>
      <AdminHeader />
      {/* CONTENIDO */}
      <div>
        <ul className="grid grid-cols-1 mx-auto items-center">
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <AdminFooter /> */}
    </div>
  );
}

export default dashboard;
