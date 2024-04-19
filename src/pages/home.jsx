import React, { useEffect, useRef } from "react";
import Hero from "../components/home/Hero.jsx";
import HeroNosotros from "../components/nosotros/Hero.jsx";
import ClientesLogos from "../components/home/ClientesLogos.jsx";
import Servicios from "../components/servicios/Servicios.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

function home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section>
        <video
          className="w-full py-8 md:p-0 md:w-[70%] md:m-auto"
          autoPlay
          playsInline
          loop
          controls
          alt="All the devices"
          src="./bites/reel_2024_720_CBR3.mp4"
          ref={videoEl}
        />
      </section>
      <section className="md:w-[75%] m-auto">
        <HeroNosotros />
      </section>

      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>

      <section className="p-10">
        <Servicios />
      </section>

      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>

      <section className="m-auto text-center py-10">
        <p className="text-8xl font-Bebas-Neue py-2 text-gray-300">
          10 años de experiencia
        </p>
        <p className="text-4xl font-bold text-purple-500">
          Nos respaldan <span className="animate-bounce">😎</span>
        </p>
      </section>

      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>

      <section>
        <ClientesLogos />
      </section>
    </div>
  );
}

export default home;
