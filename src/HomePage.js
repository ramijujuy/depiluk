import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import heroBanner from "./assets/hero-banner.png";
import dermaplaningImg from "./assets/dermaplaning.png";
import lashImg from "./assets/lash-lifting.png";
import browImg from "./assets/brow-lamination.png";

const HomePage = () => {
  const services = [
    {
      title: "Dermaplaning",
      img: dermaplaningImg,
      desc: "Exfoliación profunda que elimina células muertas y vello facial para una piel radiante.",
      link: "/dermaplaning",
    },
    {
      title: "Lifting de Pestañas",
      img: lashImg,
      desc: "Realza tu mirada con pestañas naturalmente curvadas y voluminosas.",
      link: "/lifting-pestanas",
    },
    {
      title: "Laminado de Cejas",
      img: browImg,
      desc: "Define y estiliza tus cejas para un look perfecto y duradero.",
      link: "/laminado-cejas",
    },
  ];

  const mitos = [
    { mito: "Es dolorosa 😱", verdad: "El dolor es mínimo gracias al enfriamiento." },
    { mito: "Solo en piel clara 🌟", verdad: "La tecnología actual sirve para varios tonos de piel." },
    { mito: "Es peligrosa ⚕️", verdad: "Es segura con profesionales y equipos adecuados." },
    { mito: "Se necesitan muchas sesiones ⏳", verdad: "Los resultados aparecen luego de 2 o 3 sesiones." },
    { mito: "Es definitiva desde la primera 🌈", verdad: "Hay que completar el tratamiento. A veces retoques." },
  ];

  return (
    <div className="home-container animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Depilación Láser Definitiva"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-6">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-widest uppercase bg-rose-500 rounded-full animate-bounce">
            Servicio Estrella
          </span>
          <h1 className="text-5xl md:text-[80px] font-bold font-serif mb-6 drop-shadow-2xl leading-tight">
            Depilación Láser <br />
            <span className="text-rose-300">Definitiva</span>
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light text-rose-50 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            La tecnología más avanzada para una piel suave por siempre.
            Seguro, rápido y sin dolor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/543885108327"
              className="bg-rose-500 hover:bg-rose-600 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Consultar Promo <FaArrowRight />
            </a>
            <a
              href="#mitos"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg font-semibold px-10 py-4 rounded-full transition-all border border-white/30"
            >
              Ver Mitos
            </a>
          </div>
        </div>
      </section>

      {/* Featured Service (Laser) Highlight */}
      <section className="py-24 bg-gradient-to-b from-rose-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src={heroBanner}
                alt="Láser"
                className="rounded-[40px] shadow-2xl relative z-10"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif mb-8">
                ¿Por qué elegir nuestra Tecnología Láser?
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Utilizamos cabezales de última generación que garantizan resultados visibles desde la primera sesión, cuidando tu piel con un sistema de enfriamiento integrado que elimina cualquier molestia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { t: "Rápido", d: "Sesiones de 15 a 45 min" },
                  { t: "Eficaz", d: "Para todo tipo de pelo" },
                  { t: "Indoloro", d: "Sistema de frío Cryo" },
                  { t: "Duradero", d: "Resultados permanentes" }
                ].map((item, id) => (
                  <div key={id} className="flex items-start gap-4">
                    <div className="bg-rose-100 p-2 rounded-lg">
                      <FaCheckCircle className="text-rose-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.t}</h4>
                      <p className="text-slate-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 font-serif mb-4">Otros Tratamientos</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Complementa tu cuidado con nuestros servicios especializados en rostro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 border border-slate-100">
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition"
                  >
                    Ver Detalles <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitos Section */}
      <section id="mitos" className="py-20 bg-rose-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 font-serif mb-12">
              Mitos y Verdades sobre la Depilación Definitiva
            </h2>
            <div className="grid gap-6">
              {mitos.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 rounded-xl hover:bg-rose-50 transition border border-transparent hover:border-rose-100">
                  <div className="min-w-[40%] font-semibold text-lg text-rose-700">
                    {item.mito}
                  </div>
                  <div className="hidden md:block text-slate-300 mx-2">→</div>
                  <div className="flex items-start gap-2 text-slate-600">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    {item.verdad}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
