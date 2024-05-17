import { Accordion, AccordionItem } from "@nextui-org/react";
import Hero from "../components/servicios/Hero";
import Servicios from "../components/servicios/Servicios";

function servicios() {
  const faq = [
    {
      pregunta: "¿Cuál es el precio de un video?",
      respuesta:
        "Los precios varian según el tiempo, número de locaciones, equipo de producción, días de grabación, talentos, musicalización y un sin fin de cosas, para tener un precio exacto es necesario nos platiques tu proyecto",
    },
    {
      pregunta: "Ya tengo mi video, ¿Me lo peden editar?",
      respuesta:
        "Si claro, podemos editarte desde uno solo hasta armar un servicio de edición por proyecto o temporada ",
    },
    {
      pregunta: "¿Cual es el precio de una sesión de fotos?",
      respuesta:
        "Los precios varian según el tiempo, complejidad de postproducción entre otras cosas. Para poder obtener un precio exacto podrías contactarnos y platicarnos tu idea y sobre eso te facilitamos un presupuesto  ",
    },
    {
      pregunta: "¿Tienen paquetes?",
      respuesta: (
        <>
          <p>
            Si, contacta a nuestra área de información, estamos seguros que te
            brindarán la atención que mereces.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* //!HERO */}
      <Hero />

      <div
        className="
        m-auto
      p-5
      mb-20
      max-w-lg
      "
      >
        <Servicios />
        {/* //!FAQ */}

        {/* <h1 className="pt-10 pb-5 font-Bebas-Neue text-4xl text-gray-700">
          Preguntas frecuentes
        </h1>
        <section>
          <Accordion>
            {faq.map((faq, index) => (
              <AccordionItem key={index} title={faq.pregunta}>
                {faq.respuesta}
              </AccordionItem>
            ))}
          </Accordion>
        </section> */}
      </div>
    </div>
  );
}

export default servicios;
