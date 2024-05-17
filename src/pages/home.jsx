import Hero from "../components/home/Hero.jsx";
import HeroNosotros from "../components/nosotros/Hero.jsx";
import ClientesLogos from "../components/home/ClientesLogos.jsx";
import Servicios from "../components/servicios/Servicios.jsx";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

function home() {
  return (
    <div className="">
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 4,
          }}
        >
          <Hero />
        </motion.div>
      </section>

      <section>
        <video
          poster="./images/portada-video-web.jpg"
          className="w-full py-8 md:p-0 md:w-[70%] md:m-auto"
          playsInline
          controls
          alt="Demo reel"
          src="./video/reel2024_1min_SD.mp4"
        />
      </section>

      <section className="md:w-[75%] m-auto">
        <HeroNosotros />
      </section>

      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>

      {/* <section className="p-10">
        <motion.div
          initial={{ opacity: 0 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1 }}
        >
          <h3
            className="
        m-auto
        text-center
        pb-5
        text-4xl font-Bebas-Neue py-2 text-gray-500
        tracking-wide
        "
          >
            Servicios
          </h3>
        </motion.div>
        <Servicios />
      </section> */}

      {/* <div className="py-10">
        <Divider orientation="horizontal" />
      </div> */}

      {/* <section className="m-auto text-center py-10">
        <p className="text-8xl font-Bebas-Neue py-2 text-gray-300">
          <span className="text-yellow-200">10 años</span> de experiencia
        </p>
        <p className="text-4xl font-bold text-purple-500">
          Nos respaldan <span className="animate-bounce">😎</span>
        </p>
      </section> */}

      {/* <div className="py-10">
        <Divider orientation="horizontal" />
      </div> */}

      <section>
        <ClientesLogos />
      </section>
    </div>
  );
}

export default home;
