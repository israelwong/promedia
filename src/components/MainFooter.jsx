import React from "react";

function MainFooter() {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <nav>
          <h6 className="footer-title">Creamos:</h6>
          <ul>
            <li>Branding</li>
            <li>Marketing</li>
            <li>Social content</li>
          </ul>
        </nav>
        <ul>
          <h6 className="footer-title">Ayudamos a:</h6>
          <li>Empresas</li>
          <li>Negocios</li>
          <li>Emprendedores</li>
          <li>Artistas</li>
          <li>Influencers</li>
        </ul>
        <nav>
          <h6 className="footer-title">Servicios</h6>
          <ul>
            <li>Diseño gráfico</li>
            <li>Diseño web</li>
            <li>Fotografía corporativa</li>
            <li>Retrato corporativo</li>
            <li>Video corporativo</li>
            <li>Video promocional</li>
            <li>Renta de espectaculares</li>
            <li>Sistemas de información</li>
          </ul>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </footer>
    </div>
  );
}

export default MainFooter;
