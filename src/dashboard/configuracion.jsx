import React from "react";
import { Link } from "react-router-dom";

function configuracion() {
  const menu = [
    {
      title: "colaboradores",
      url: "/dashboard/configuracion/colaboradores",
    },
    {
      title: "servicios",
      url: "/dashboard/configuracion/servicios",
    },
  ];

  return (
    <div>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default configuracion;
