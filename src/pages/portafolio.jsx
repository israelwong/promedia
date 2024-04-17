import React from "react";

function portafolio() {
  return (
    <div>
      <div>
        <section className="p-40 text-center text-3xl space-y-5">
          <div className="card w-96 bg-neutral text-neutral-content m-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Muy pronto!</h2>
              <p>
                Publicaremos todos los proyectos en los que hemos trabajado.
              </p>
              <div className="card-actions justify-end">
                <div className="grid grid-flow-col gap-1 p-2">
                  <a
                    className="p-3"
                    href="https://www.instagram.com/promediamx"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="p-3"
                    href="https://www.facebook.com/ProMediaMexico"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="p-3">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a className="p-3">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a className="p-3">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default portafolio;
