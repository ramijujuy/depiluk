// Agregar nuevas secciones para los servicios
import React from "react";
import { FaSpa, FaEye, FaFeather } from "react-icons/fa";
import "./App.css";
import dermaplaningImage from "./assets/dermaplaning.jpg";
import liftingPestanasImage from "./assets/lifting-pestanas.jpg";
import laminadoCejasImage from "./assets/laminado-cejas.jpg";

function Services() {
  return (
    <div>
      <header>
        <h1>Servicios de Belleza</h1>
      </header>
      <section>
        <h2>Explora Nuestros Servicios</h2>
        <div className="service-buttons">
          <button onClick={() => (window.location.href = "#dermaplaning")}>
            <FaFeather /> Dermaplaning
          </button>
          <button onClick={() => (window.location.href = "#lifting-pestanas")}>
            <FaEye /> Lifting de Pestañas
          </button>
          <button onClick={() => (window.location.href = "#laminado-cejas")}>
            <FaSpa /> Laminado de Cejas
          </button>
        </div>
      </section>
      <section id="dermaplaning">
        <h2>Dermaplaning</h2>
        <img src={dermaplaningImage} alt="Dermaplaning" />
        <p>
          El dermaplaning es un tratamiento que elimina células muertas y vello
          facial, dejando la piel suave y luminosa.
        </p>
      </section>
      <section id="lifting-pestanas">
        <h2>Lifting de Pestañas</h2>
        <img src={liftingPestanasImage} alt="Lifting de Pestañas" />
        <p>
          El lifting de pestañas realza tus pestañas naturales, dándoles un
          efecto curvado y voluminoso.
        </p>
      </section>
      <section id="laminado-cejas">
        <h2>Laminado de Cejas</h2>
        <img src={laminadoCejasImage} alt="Laminado de Cejas" />
        <p>
          El laminado de cejas define y estiliza tus cejas, logrando un look
          perfecto y duradero.
        </p>
      </section>
    </div>
  );
}

export default Services;
