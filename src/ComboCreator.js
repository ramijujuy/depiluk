import React, { useState } from "react";

function ComboCreator() {
  const [services, setServices] = useState([
    { name: "Dermaplaning", selected: false },
    { name: "Lifting de Pestañas", selected: false },
    { name: "Laminado de Cejas", selected: false },
  ]);

  const toggleService = (index) => {
    const updatedServices = [...services];
    updatedServices[index].selected = !updatedServices[index].selected;
    setServices(updatedServices);
  };

  const handleCreateCombo = () => {
    const selectedServices = services.filter((service) => service.selected);
    if (selectedServices.length > 0) {
      alert(
        `Combo creado con: ${selectedServices.map((s) => s.name).join(", ")}`,
      );
    } else {
      alert("Selecciona al menos un servicio para crear un combo.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Crea tu Combo</h2>
      <div>
        {services.map((service, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={service.selected}
                onChange={() => toggleService(index)}
              />
              {service.name}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleCreateCombo} style={{ marginTop: "20px" }}>
        Crear Combo
      </button>
    </div>
  );
}

export default ComboCreator;
