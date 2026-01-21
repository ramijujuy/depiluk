import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Servicios</h2>
      <ul>
        <li>
          <Link to="/dermaplaning">Dermaplaning</Link>
        </li>
        <li>
          <Link to="/lifting-pestanas">Lifting de Pestañas</Link>
        </li>
        <li>
          <Link to="/laminado-cejas">Laminado de Cejas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
