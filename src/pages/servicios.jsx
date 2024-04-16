import { Accordion, AccordionItem } from "@nextui-org/react";
import Hero from "../components/servicios/Hero";

function servicios() {
  const servicios = [
    {
      servicio: "Fotografía",
      servicios: ["Corporativo", "Retrato", "Producto", "Social"],
      banner: "",
    },
    {
      servicio: "Video",
      servicios: ["Corporativo", "Promocional", "Social", "Musical"],
      banner: "",
    },
    {
      servicio: "Diseño gráfico",
      servicios: ["Identidad", "Editorial", "Digital", "Empaque"],
      banner: "",
    },
    {
      servicio: "Diseño web",
      servicios: ["Portal", "Pagina web", "Landing page", "Pasarea de pagos"],
      banner: "",
    },
  ];

  const faq = [
    {
      pregunta: "¿Cuál es el precio de un video?",
      respuesta:
        "Los precios varian según el tiempo, número de locaciones, equipo de producción, días de grabación, talentos, musicalización y un sin fon de cosas, para tener un precio exacto es necesario nos platiques tu proeycto",
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
        {/* //!LISTA SERVICIOS */}
        <div
          className="
      md:max-w-lg
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4 place-content-center
      align-middle
      content-center
      m-auto
      "
        >
          {servicios.map((servicio, index) => (
            <section
              key={index}
              className="
          p-5
          ring-1 ring-gray-500
          "
            >
              {/* <div className="order-2 md:order-1"> */}
              <h1
                className="
                font-Bebas-Neue text-4xl
                text-cyan-800
              "
              >
                {servicio.servicio}
              </h1>
              <ul className="list-disc pl-5">
                {servicio.servicios.map((servicio, index) => (
                  <li key={index}>{servicio}</li>
                ))}
              </ul>
              {/* </div> */}
              {/* <div className="order-1 md:order-2">Banner</div> */}
            </section>
          ))}
        </div>

        {/* //!FAQ */}

        <h1 className="pt-10 pb-5 font-Bebas-Neue text-4xl text-gray-700">
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
        </section>
      </div>
    </div>
  );
}

export default servicios;
