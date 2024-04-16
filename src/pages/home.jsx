import React from "react";
import Hero from "../components/home/Hero.jsx";
import ClientesLogos from "../components/home/ClientesLogos.jsx";
import Carrusel from "../components/home/Carrusel.jsx";

function home() {
  function handleClick() {
    console.log("Home");
  }

  return (
    <div className="">
      <div>
        <Hero />
      </div>
      {/* <div>
        <Carrusel />
      </div> */}
      <div>
        <ClientesLogos />
      </div>
    </div>
  );
}

export default home;
