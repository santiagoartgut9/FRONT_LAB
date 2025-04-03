import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="logo.jpg" alt="Logo" className="logo me-2" />
          &nbsp;&nbsp;&nbsp;Reserva de Laboratorios
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
