import React from "react";
import { Link } from "react-router-dom";
import { Lumiflex } from "uvcanvas";

function index() {
  return (
    <div
      className="
    w-full
    h-fit
    text-center
    "
    >
      <div className="h-2">
        <Lumiflex />
      </div>
      <section>
        <figure className="w-64 m-auto py-20">
          <img
            src="./images/logos/promedia/promedia_full_color_vertical.svg"
            alt="ProMedia México"
            className=""
          />
        </figure>

        <h1 className="text-4xl">Bienvenido</h1>

        <p
          className="
          text-gray-400
          text-2xl
          p-8
          mb-5
          text-center
          m-auto
          md:w-[60%]
          md:pb-20
        "
        >
          Somos una agencia de creación de contenido para branding, marketing y
          social content.
        </p>

        <Link
          className="
        m-auto
        btn
        bg-cyan-900
        "
          to={"/home"}
        >
          Ingresar
        </Link>
      </section>

      <section>
        <p className="p-20 text-sm text-gray-500 ">
          Todos los derechos reservador a ProMedia México 2024
        </p>
      </section>
    </div>
  );
}

export default index;
