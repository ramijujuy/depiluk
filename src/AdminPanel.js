import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import PriceEditor from "./PriceEditor";

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="bg-rose-50 min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {isLoggedIn ? (
          <div className="animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <div>
                <h1 className="text-4xl font-bold text-slate-800 font-serif">Panel de Gestión</h1>
                <p className="text-slate-500 mt-1">Control de tarifas y servicios de Depiluq</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-slate-400 hover:text-rose-500 font-medium transition"
              >
                Cerrar Sesión
              </button>
            </div>
            <PriceEditor />
          </div>
        ) : (
          <AdminLogin onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
