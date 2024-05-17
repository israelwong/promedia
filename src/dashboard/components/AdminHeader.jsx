import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navitage = useNavigate();
  // const menu = [
  //   { title: "Dashboard", url: "/dashboard/principal" },
  //   { title: "Proyectos", url: "/dashboard/proyectos" },
  //   { title: "Prospectos", url: "/dashboard/prospectos" },
  //   { title: "Contabilidad", url: "/dashboard/contabilidad" },
  //   { title: "Configuración", url: "/dashboard/configuracion" },
  // ];

  function handleLogout() {
    sessionStorage.removeItem("UserData");
    navitage("/admin");
  }

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              width={120}
              src="../images/logos/promedia/promedia_full_white.svg"
            />
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="btn" onClick={() => handleLogout()}>
            Cerrar sesión
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
