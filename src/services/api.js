const apiBase = "https://laboratorio01-h9h6fhggbkdngnfw.canadacentral-01.azurewebsites.net";

export async function cargarLaboratorios() {
    try {
        const response = await fetch(`${apiBase}/laboratorios`);
        if (!response.ok) throw new Error("Error al obtener los laboratorios");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function consultarDisponibilidad(idLab, fecha, hora) {
    try {
        const response = await fetch(`${apiBase}/reservas`);
        if (!response.ok) throw new Error("Error al obtener reservas");

        const reservas = await response.json();
        const fechaIngresada = new Date(fecha).toISOString().split("T")[0];
        return reservas.some(r =>
            r.idLaboratorio === idLab &&
            r.fecha.split("T")[0] === fechaIngresada &&
            r.horaInicio <= hora &&
            r.horaFin > hora
        );
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function reservarLaboratorio(reserva) {
    try {
        const response = await fetch(`${apiBase}/reservas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reserva)
        });

        if (!response.ok) throw new Error("Error al crear la reserva");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function cancelarReserva(id) {
    try {
        const response = await fetch(`${apiBase}/reservas/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Error al cancelar la reserva");
    } catch (error) {
        console.error(error);
    }
}
