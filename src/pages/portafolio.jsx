import React from "react";

function portafolio() {
  return (
    <div>
      <div>
        <section className="p-40 text-center text-3xl space-y-5">
          <p>
            <i className="far fa-clock text-md"></i> Esta sección publicaremos
            todos los proyectos en los que hemos trabajado. prometenemos tenerla
            lo antes posible.
          </p>
          <p>Mientras tanto te copartimos nuestras redes sociales</p>
          <div className="grid grid-flow-col gap-1">
            <a href="https://www.instagram.com/promediamx" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/ProMediaMexico" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a>
              <i className="fab fa-tiktok"></i>
            </a>
            <a>
              <i className="fab fa-whatsapp"></i>
            </a>
            <a>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default portafolio;
