import { TypeAnimation } from "react-type-animation";
import ParallaxHero from "./ParallaxHero";

function Hero() {
  const link_wa = "https://wa.link/hcfarx";

  function openLink() {
    window.open(link_wa, "_blank");
  }

  return (
    <div
      className="w-full 
    pt-24  pb-8
    lg:py-36
    text-center bg-gradient-to-b from-gray-900 to-black
    "
    >
      <h1
        className="
        text-4xl font-bold text-center mb-0 pb-0 leading-none
        bg-clip-text
      text-cyan-500
      "
      >
        Creamos
      </h1>

      <p className="text-7xl font-extrabold text-center">contenido</p>

      {/* Animación para */}
      <p
        className="
      text-4xl 
      
      mb-3
      "
      >
        para{" "}
        <span
          className="
				bg-clip-text 
        text-transparent
        bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700
        font-bold
				"
        >
          <TypeAnimation
            sequence={[
              "empresas",
              1000,
              "negocios",
              1000,
              "emprendedores",
              1000,
              "artistas",
              1000,
              "influencers",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>
      </p>

      <div className="py-16 px-0 m-0 text-gray-600 text-6xl">
        <ParallaxHero />
      </div>

      <button
        className="
        py-3 
        px-4 
        inline-flex 
        items-center 
        gap-x-2 
        text-sm 
        font-semibold 
        rounded-full
        border 
        dark:border-gray-500 dark:text-gray-500
        dark:hover:text-cyan-100 dark:hover:border-cyan-300
        shadow-lg
        shadow-gray-800
        hover:shadow-cyan-800
        "
        onClick={() => openLink()}
      >
        Más información <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  );
}

export default Hero;
