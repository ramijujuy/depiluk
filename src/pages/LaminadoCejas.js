import React from "react";
import img from "../assets/brow-lamination.png";

const LaminadoCejas = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="relative h-[400px]">
        <img src={img} alt="Laminado de Cejas" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-md font-serif text-center">Laminado de Cejas</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 -mt-20 relative z-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Cejas Perfectas</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            El laminado de cejas es un tratamiento semipermanente que se aplica sobre el vello de la ceja y consigue un efecto de ceja "peinada" hacia arriba, alisando el pelo más rebelde y fijando la forma deseada.
          </p>
          <ul className="space-y-4 mb-8 text-slate-600">
            <li className="flex items-center gap-3"><span className="text-rose-500 text-xl">✨</span> Cejas más pobladas y definidas.</li>
            <li className="flex items-center gap-3"><span className="text-rose-500 text-xl">✨</span> Corrige zonas calvas o remolinos.</li>
            <li className="flex items-center gap-3"><span className="text-rose-500 text-xl">✨</span> Ideal para cejas rebeldes.</li>
            <li className="flex items-center gap-3"><span className="text-rose-500 text-xl">✨</span> Duración de hasta 2 meses.</li>
          </ul>
          <div className="text-center mt-10">
            <a href="https://wa.me/543885108327" className="bg-rose-500 hover:bg-rose-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
              Agendar Turno
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaminadoCejas;
