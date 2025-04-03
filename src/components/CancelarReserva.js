import React, { useState } from "react";
import { cancelarReserva } from "../services/api"; // Asegúrate de importar correctamente tu API
import Swal from "sweetalert2";

function CancelarReserva() {
  const [idReserva, setIdReserva] = useState("");

  async function handleCancelar() {
    if (!idReserva) {
      Swal.fire("Por favor, ingrese el ID de la reserva.", "", "warning");
      return;
    }

    const confirmacion = await Swal.fire({
      title: "¿Está seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "No, mantener",
    });

    if (confirmacion.isConfirmed) {
      await cancelarReserva(idReserva);
      Swal.fire("Reserva cancelada con éxito!", "", "success");
      setIdReserva(""); // Limpiar el campo después de cancelar
    }
  }

  return (
    <div className="card fade-in">
      <div className="card-header bg-danger text-white">Cancelar Reserva</div>
      <div className="card-body">
        <form>
          <label className="form-label">ID de la Reserva:</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Ingrese el ID"
            value={idReserva}
            onChange={(e) => setIdReserva(e.target.value)}
          />
          <button type="button" className="btn btn-danger w-100" onClick={handleCancelar}>
            Cancelar Reserva
          </button>
        </form>
      </div>
    </div>
  );
}

export default CancelarReserva;
