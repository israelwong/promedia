import { Image } from "@nextui-org/react";

function ClientesLogos() {
  const press = [
    "EdoMex",
    "DIF-EdoMex",
    "TecMilenio",
    "UIN",
    "IPN",
    "Grupo-Concentra",
    "Movistar",
    "Vinte",
    "DaVivir",
    "MKT-Solutions",
    "Jemiza",
    "el-universal",
    "Elopse-Hospotal",

    "BTL",
    "Odapas",
    "Angkor",
    "AquaMarvic",
    "LaAntigua",
    "Cesars-Gym-Strength",
    "Dar-Comunicaciones",
    "Dancerias",
    "Invierte-Bien",
    "Pago-German",
    "ProSocial",
    "Trevor",
    "Verticca",
    "CAVM",
    "Qantum",
    "Ferretip",
    "Finca-Dona-Eulalia",
    "Goberno-de-mexico",
    "Grupo-Aselac",
    "Orpoprint",
    "Ostore",
    "Polenta",
    "Tecamac",
    "Marsala",
    "Andalucia",
  ];

  return (
    <section id="press" className="dark">
      <div className="py-14 px-10">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center font-semibold text-cyan-950 font-Bebas-Neue text-4xl pb-5">
            NUESTROS CLIENTES
          </h3>
          <div className="relative mt-6">
            <div className="grid grid-cols-4 place-items-center gap-8 md:gap-10 lg:grid-cols-4 xl:gap-x-6 2xl:grid-cols-12">
              {press.map((logo, idx) => (
                <Image
                  key={idx}
                  width={350}
                  height={400}
                  src={`./images/logos/clientes/${logo}.svg`}
                  alt={`logo-${logo}`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientesLogos;
