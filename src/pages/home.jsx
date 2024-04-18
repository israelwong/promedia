import React, { useEffect, useRef } from "react";
import Hero from "../components/home/Hero.jsx";
import ClientesLogos from "../components/home/ClientesLogos.jsx";

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
      <div>
        <Hero />
      </div>
      <div>
        <video
          className="w-full py-8 md:p-0 md:w-[70%] md:m-auto"
          playsInline
          loop
          controls
          alt="All the devices"
          src="./bites/reel_2024_720_CBR3.mp4"
          ref={videoEl}
        />
      </div>
      <div>
        <ClientesLogos />
      </div>
    </div>
  );
}

export default home;
