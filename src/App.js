import React from 'react';
import Navbar from "./components/NavBar";
import ConsultaDisponibilidad from './components/ConsultaDisponibilidad';
import ReservarLaboratorio from './components/ReservarLaboratorio';
import CancelarReserva from './components/CancelarReserva';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"><ConsultaDisponibilidad /></div>
          <div className="col-md-4"><ReservarLaboratorio /></div>
          <div className="col-md-4"><CancelarReserva /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
