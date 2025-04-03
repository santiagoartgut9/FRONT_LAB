import React, { useState, useEffect } from "react";
import { cargarLaboratorios, reservarLaboratorio } from "../services/api"; // Ajusta la ruta si es necesario
import Swal from "sweetalert2";

function ReservarLaboratorio() {
  const [laboratorios, setLaboratorios] = useState([]);
  const [reserva, setReserva] = useState({
    idLaboratorio: "",
    fecha: "",
    horaInicio: "",
    horaFin: "",
    proposito: "",
    usuario: "",
    estado: "Confirmada",
  });

  useEffect(() => {
    async function obtenerLaboratorios() {
      const labs = await cargarLaboratorios();
      setLaboratorios(labs);
    }
    obtenerLaboratorios();
  }, []);

  function handleChange(e) {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  }

  async function handleReservar() {
    if (!reserva.idLaboratorio || !reserva.fecha || !reserva.horaInicio || !reserva.horaFin || !reserva.proposito || !reserva.usuario) {
      Swal.fire("Por favor, complete todos los campos.", "", "warning");
      return;
    }

    const resultado = await reservarLaboratorio(reserva);
    if (resultado) {
      Swal.fire("Reserva creada con éxito!", "", "success");
      setReserva({
        idLaboratorio: "",
        fecha: "",
        horaInicio: "",
        horaFin: "",
        proposito: "",
        usuario: "",
        estado: "Confirmada",
      });
    } else {
      Swal.fire("No se pudo crear la reserva.", "", "error");
    }
  }

  return (
    <div className="card fade-in">
      <div className="card-header bg-success text-white">Reservar Laboratorio</div>
      <div className="card-body">
        <form>
          <label className="form-label">Laboratorio:</label>
          <select className="form-select mb-3" name="idLaboratorio" value={reserva.idLaboratorio} onChange={handleChange}>
            <option value="">Seleccione un laboratorio</option>
            {laboratorios.map((lab) => (
              <option key={lab.id} value={lab.id}>{lab.nombre}</option>
            ))}
          </select>

          <label className="form-label">Fecha:</label>
          <input type="date" className="form-control mb-3" name="fecha" value={reserva.fecha} onChange={handleChange} />

          <label className="form-label">Hora Inicio:</label>
          <input type="time" className="form-control mb-3" name="horaInicio" value={reserva.horaInicio} onChange={handleChange} />

          <label className="form-label">Hora Fin:</label>
          <input type="time" className="form-control mb-3" name="horaFin" value={reserva.horaFin} onChange={handleChange} />

          <input type="text" className="form-control mb-3" name="proposito" placeholder="Propósito" value={reserva.proposito} onChange={handleChange} />

          <input type="text" className="form-control mb-3" name="usuario" placeholder="Nombre" value={reserva.usuario} onChange={handleChange} />

          <button type="button" className="btn btn-success w-100" onClick={handleReservar}>
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservarLaboratorio;
