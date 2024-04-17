import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

import Hero from "../components/nosotros/Hero.jsx";
import Team from "../components/nosotros/Team.jsx";

function nosotros() {
  return (
    <div className=" md:max-w-[1010px] md:mx-auto mb-12">
      {/* //!NOSOTROS */}
      <Hero />
      <div className="">
        {/* //!TEAM */}
        <Team />

        {/* //!MISIÓN VISIÓN VALORRES */}

        <section
          className="
          grid p-5 space-y-8 justify-items-center items-center
          md:grid-cols-2 md:space-x-10
        "
        >
          {/* //!EXPERIENCIA */}
          <Card className="">
            <CardHeader className="flex gap-3">
              <Image
                alt="ProMedia Logo"
                height={22}
                width={22}
                radius="sm"
                src="./images/logos/promedia/favicon_color.svg"
              />
              <div className="flex flex-col">
                <p className="text-3xl font-Bebas-Neue py-2 text-gray-300">
                  10 años de experiencia
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-3xl py-3 text-gray-400 leading-9">
                Todos nuestros clientes son importantes y merecen un servicio
                excepcional respaldado por compromiso y resultados.
              </p>
            </CardBody>
          </Card>

          {/* //!MISIÓN / VISIÓN */}
          <div>
            <div className="pb-3">
              <h1 className="text-4xl text-cyan-600 font-Bebas-Neue tracking-wid">
                Visión
              </h1>
              <p>
                Ser en 2030 una de las agencias de creación de contenido
                multimedia más reconocidas en el mercado mexicano gracias a sus
                casos de éxito y satisfacción del cliente.
              </p>
            </div>
            <div>
              <h1 className="text-4xl text-cyan-600 font-Bebas-Neue tracking-wid">
                Misión
              </h1>
              <p>
                Producir contenido multimedia profesional que ayuden a nuestros
                clientes a comunicar su oferta de valor a su mercado meta a
                través de los canales de más adecuados.
              </p>
            </div>
          </div>
        </section>

        <section
          className="
        grid p-5
        space-y-5
        md:grid-cols-2
        md: space-x-10
        "
        >
          {/* //! FOLOSOFÍA */}
          <div
            className="
          border border-stone-800
          p-5
          rounded-md
          text-center
          "
          >
            <h1 className="text-2xl text-gray-700 font-Bebas-Neue tracking-wid">
              Nuestra filosofía
            </h1>
            <p
              className="
            text-4xl
            md:text-6xl md:pt-8
            align-middle
            animate-pulse
            "
            >
              "Compromiso de principio a fin"
            </p>
          </div>
          {/* //!VALORES */}
          <div className="order-1">
            <h1 className="text-4xl text-yellow-700 font-Bebas-Neue tracking-wid">
              Valores
            </h1>
            <ul className="list-disc pl-5">
              <li>Calidad</li>
              <li>Eficiencia</li>
              <li>Optimización de recursos</li>
              <li>Garantía</li>
              <li>Compromiso</li>
              <li>Empatia</li>
              <li>Adaptación al cambio</li>
              <li>Integridad</li>
              <li>Solidaridad</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default nosotros;
