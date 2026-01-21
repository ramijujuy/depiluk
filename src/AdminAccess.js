import React, { useState } from "react";
import AdminLogin from "./AdminLogin";

function AdminAccess() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={() => setShowLogin(!showLogin)}
        style={{
          fontSize: "0.8rem",
          color: "#666",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showLogin
          ? "Ocultar acceso de administrador"
          : "Acceso de administrador"}
      </button>
      {showLogin && <AdminLogin onLogin={() => alert("Acceso concedido")} />}
    </div>
  );
}

export default AdminAccess;
