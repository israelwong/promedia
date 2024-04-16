import React from "react";
import { Chip } from "@nextui-org/react";

function Hero() {
  return (
    <div>
      <section className="text-center items-center py-10 md:py-24 md:px-20">
        <p
          className="
            text-4xl py-12 px-5
            md:text-6xl
          "
        >
          Somos una agencia de{" "}
          <span className="animate-pulse">creación de contenidos</span>{" "}
          multimedia con experiencia en{" "}
          <span className="text-yellow-200 underline decoration-dotted font-Bebas-Neue">
            branding
          </span>
          ,{" "}
          <span className="text-yellow-600 underline decoration-solid font-Bebas-Neue">
            marketing
          </span>{" "}
          y{" "}
          <span className="text-cyan-600 underline decoration-wavy font-Bebas-Neue">
            social content
          </span>
        </p>
        {/* //!SLOGAN */}
        <Chip
          variant="shadow"
          size="lg"
          classNames={{
            base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
            content: "drop-shadow shadow-black text-white",
          }}
        >
          Nos apasionan los retos
        </Chip>
      </section>
    </div>
  );
}

export default Hero;
