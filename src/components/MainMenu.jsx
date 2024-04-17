import { Link } from "react-router-dom";

function MainMenu() {
  const menu = [
    { title: "Bienvenido", url: "/" },
    { title: "Nosotros", url: "/nosotros" },
    { title: "Servicios", url: "/servicios" },
    { title: "Portafolio", url: "/portafolio" },
    // { title: "Contacto", url: "/contacto" },
  ];

  function handleClick() {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  }

  const link_wa = "https://wa.link/hcfarx";

  function openLink() {
    window.open(link_wa, "_blank");
  }

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="
              menu 
              menu-lg
              dropdown-content
              shadow
              bg-base-300
              mt-3 z-[1] p-2
              rounded-box
              w-fit"
            >
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link onClick={() => handleClick()} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              width={120}
              src="./images/logos/promedia/promedia_full_color.svg"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <button className="btn" onClick={() => openLink()}>
            Contactar <i className="fab fa-whatsapp"></i>
          </button> */}
          <a className="btn" href="/admin">
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
