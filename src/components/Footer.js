import React from 'react'
import "../styles/styles.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>;


function Footer() {
    return (
      <>
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>E-Commerce</h3>

            <p class="footer-links">
              <a href="/">Inicio</a>·
              <a href="/Products">Productos</a>
            </p>

            <p class="footer-company-name">Rodrigo Plutino - 2021</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p>
                <span>Rodrigo Plutino</span> Lanus, Buenos Aires - Argentina
              </p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>11 7367 5464</p>
            </div>

            <div>
              <i class="fa fa-envelope"></i>
              <p>
                <a href="mailto:rodrigoplutino@gmail.com">
                  rodrigoplutino@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>Sobre la página</span>
              Proyecto realizado de forma individual, en el trayecto de un mes,
              para ser entregado a modo de trabajo final en CODERHAUSE.
            </p>
          </div>
        </footer>
      </>
    );
}

export default Footer
