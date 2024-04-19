import React from "react";

function Servicios() {
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
      servicios: ["Portal", "Pagina web", "Landing page", "Pasarela de pagos"],
      banner: "",
    },
  ];

  return (
    <div>
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
    </div>
  );
}

export default Servicios;
