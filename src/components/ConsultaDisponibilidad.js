import React, { useEffect, useState } from "react";
import { cargarLaboratorios, consultarDisponibilidad } from "../services/api"; // Asegúrate de importar bien tu archivo API
import Swal from "sweetalert2";

function ConsultaDisponibilidad() {
  const [laboratorios, setLaboratorios] = useState([]);
  const [idLab, setIdLab] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  useEffect(() => {
    async function fetchLaboratorios() {
      const labs = await cargarLaboratorios();
      setLaboratorios(labs);
    }
    fetchLaboratorios();
  }, []);

  async function handleConsultar() {
    if (!idLab || !fecha || !hora) {
      Swal.fire("Por favor, complete todos los campos.", "", "warning");
      return;
    }

    const disponible = await consultarDisponibilidad(idLab, fecha, hora);
    if (disponible) {
      Swal.fire("El laboratorio está reservado.", "", "info");
    } else {
      Swal.fire("El laboratorio está disponible.", "", "success");
    }
  }

  return (
    <div className="card fade-in">
      <div className="card-header bg-info text-white">Consultar Disponibilidad</div>
      <div className="card-body">
        <form>
          <label className="form-label">Laboratorio:</label>
          <select className="form-select mb-3" onChange={(e) => setIdLab(e.target.value)}>
            <option value="">Seleccione un laboratorio</option>
            {laboratorios.map((lab) => (
              <option key={lab.id} value={lab.id}>{lab.nombre}</option>
            ))}
          </select>
          <label className="form-label">Fecha:</label>
          <input type="date" className="form-control mb-3" onChange={(e) => setFecha(e.target.value)} />
          <label className="form-label">Hora:</label>
          <input type="time" className="form-control mb-3" onChange={(e) => setHora(e.target.value)} />
          <button type="button" className="btn btn-info w-100" onClick={handleConsultar}>Consultar</button>
        </form>
      </div>
    </div>
  );
}

export default ConsultaDisponibilidad;
