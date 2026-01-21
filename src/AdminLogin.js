import React, { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "mayraluque") {
      onLogin();
    } else {
      alert("Clave incorrecta");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 border border-rose-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 font-serif">Admin Access</h2>
          <p className="text-slate-500 mt-2">Ingresa tu clave de gestión</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Clave de Administrador</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-rose-50 border border-rose-100 rounded-xl focus:ring-2 focus:ring-rose-500 focus:outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            Ingresar al Panel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
