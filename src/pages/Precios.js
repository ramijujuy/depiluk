import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaSpa, FaStar } from "react-icons/fa";

const Precios = () => {
    const [prices, setPrices] = useState({
        "Axilas": "$6.000",
        "Rostro completo": "$8.500",
        "Medias piernas": "$10.000",
        "Cavado completo": "$8.000",
        "Dermaplaning": "$12.000",
        "Lifting de Pestañas": "$9.000",
        "Laminado de Cejas": "$8.500"
    });

    useEffect(() => {
        const savedPrices = localStorage.getItem("depiluq_prices");
        if (savedPrices) {
            setPrices(JSON.parse(savedPrices));
        }
    }, []);

    return (
        <div className="animate-fade-in-up bg-rose-50 min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-800 font-serif mb-4 italic">Nuestros Precios</h1>
                    <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
                        Transparencia y calidad en cada tratamiento. Consulta por nuestros combos y promociones mensuales.
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                    <div className="bg-rose-500 p-8 text-white flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <FaStar className="text-yellow-300" /> Tarifas Vigentes
                            </h2>
                            <p className="text-rose-100 text-sm mt-1">Enero 2026</p>
                        </div>
                        <FaSpa size={40} className="opacity-30" />
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid gap-6">
                            {Object.entries(prices).map(([service, price], index) => (
                                <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-4 group hover:bg-rose-50/50 p-3 rounded-xl transition-all">
                                    <span className="text-lg text-slate-700 font-medium group-hover:text-rose-600">
                                        {service}
                                    </span>
                                    <span className="text-2xl font-bold text-rose-500 font-mono">
                                        {price}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-rose-50 border border-rose-100 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="font-bold text-slate-800">¿Buscas una promo?</h4>
                                <p className="text-slate-500 text-sm">Contamos con combos de depilación que se ajustan a vos.</p>
                            </div>
                            <a
                                href="https://wa.me/543885108327"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105 flex items-center gap-3"
                            >
                                <FaWhatsapp size={20} /> Consultar Combos
                            </a>
                        </div>

                        <p className="text-center text-slate-400 text-xs italic mt-8">
                            * Los precios están sujetos a cambios sin previo aviso. Precios finales en ARS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Precios;
