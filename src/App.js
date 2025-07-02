import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const App = () => {
  const [section, setSection] = useState("home");

  const renderSection = () => {
    switch (section) {
      case "precios":
        return (
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-200">Precios</h2>
            <div className="space-y-3">
              {[
                { servicio: "Axilas", precio: "$6.000" },
                { servicio: "Rostro completo", precio: "$8.500" },
                { servicio: "Medias piernas", precio: "$10.000" },
                { servicio: "Cavado completo", precio: "$8.000" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b pb-1 border-purple-700"
                >
                  <span>{item.servicio}</span>
                  <span className="text-purple-300">{item.precio}</span>
                </div>
              ))}
              <p className="text-sm text-purple-300 italic">
                * Precios orientativos. Consultar por combos.
              </p>
            </div>
          </section>
        );
      case "mitos":
        return (
          <section className="space-y-5">
            <h2 className="text-3xl font-bold text-purple-200">
              Mitos y Verdades
            </h2>
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">
                  {
                    [
                      "Es dolorosa 😱",
                      "Solo en piel clara 🌟",
                      "Es peligrosa ⚕️",
                      "Se necesitan muchas sesiones ⏳",
                      "Es definitiva desde la primera 🌈",
                    ][i]
                  }
                </h3>
                <p className="text-purple-300 text-sm">
                  {
                    [
                      "El dolor es mínimo gracias al enfriamiento.",
                      "La tecnología actual sirve para varios tonos de piel.",
                      "Es segura con profesionales y equipos adecuados.",
                      "Los resultados aparecen luego de 2 o 3 sesiones.",
                      "Hay que completar el tratamiento. A veces retoques.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </section>
        );
      default:
        return (
          <section className="text-center space-y-8 mt-8">
            {/* LOGO */}
            <div className="relative w-56 h-56 mx-auto">
              <img
                src="/logo-depiluq.jpg"
                alt="Logo"
                className="w-full h-full rounded-full border-4 border-white shadow-2xl animate-pulse"
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-spin-slow opacity-30"></div>
            </div>

            {/* TÍTULO */}
            <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
              DepiLuq
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-2xl font-medium text-purple-200">
              Depilación Definitiva con tecnología láser
            </p>

            {/* DESCRIPCIÓN */}
            <p className="text-base text-purple-300 max-w-lg mx-auto leading-relaxed">
              Resultados seguros, rápidos y duraderos.
            </p>
            <p className="text-base text-purple-300 max-w-lg mx-auto leading-relaxed">
              Atención profesional en un ambiente cómodo y reservado.
            </p>
            <p className="text-base text-purple-300 max-w-lg mx-auto leading-relaxed">
              Amplia Franja de horarios a tu dispocicion!!
            </p>

            {/* CONTACTO */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <a
                href="https://wa.me/543885108327"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full text-lg font-medium shadow transition"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <a
                href="mailto:mayrajuy@gmail.com"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-5 py-3 rounded-full text-lg font-medium shadow transition"
              >
                <FaEnvelope size={20} /> Email
              </a>
              <div className="flex items-center gap-2 text-white text-lg">
                <FaPhone /> 3885 108 327
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="bg-purple-950 min-h-screen p-6 text-white font-sans">
      <div className="max-w-screen-md mx-auto">
        <nav className="flex justify-center gap-4 mb-10">
          {[
            { label: "Inicio", value: "home" },
            { label: "Precios", value: "precios" },
            { label: "Mitos y Verdades", value: "mitos" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setSection(item.value)}
              className={`px-6 py-3 rounded-full border-2 transition text-lg ${
                section === item.value
                  ? "bg-purple-500 border-purple-400 text-white"
                  : "bg-purple-800 border-purple-700 text-purple-200 hover:bg-purple-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {renderSection()}
      </div>
    </main>
  );
};

export default App;
