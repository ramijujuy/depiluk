import React, { useState } from "react";

const PriceEditor = () => {
  const initialPrices = {
    "Axilas": "$6.000",
    "Rostro completo": "$8.500",
    "Medias piernas": "$10.000",
    "Cavado completo": "$8.000",
    "Dermaplaning": "$12.000",
    "Lifting de Pestañas": "$9.000",
    "Laminado de Cejas": "$8.500"
  };

  const [prices, setPrices] = useState(() => {
    const saved = localStorage.getItem("depiluq_prices");
    return saved ? JSON.parse(saved) : initialPrices;
  });

  const handlePriceChange = (service, newPrice) => {
    setPrices({ ...prices, [service]: newPrice });
  };

  const handleSubmit = () => {
    localStorage.setItem("depiluq_prices", JSON.stringify(prices));
    alert("Precios actualizados con éxito ✅");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-slate-800">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b pb-4">
        <span className="text-rose-500">✍️</span> Editor de Precios
      </h2>
      <div className="grid gap-6">
        {Object.keys(prices).map((service) => (
          <div key={service} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 hover:bg-rose-50 rounded-xl transition-colors">
            <span className="font-semibold text-slate-700 min-w-[150px]">{service}</span>
            <div className="relative">
              <input
                type="text"
                value={prices[service]}
                onChange={(e) => handlePriceChange(service, e.target.value)}
                className="w-full md:w-48 pl-4 pr-10 py-2 bg-white border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none font-mono"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-10 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default PriceEditor;
