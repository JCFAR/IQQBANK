import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/alerts.css";
import { Alert } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

const Success = () => {
  return (
    <div>
      <NavBarLoggedIn />
      <div className="bgsucc">
        <div className="container">
          <Alert variant="success">
            <Alert.Heading>Inicio de sesión exitoso</Alert.Heading>
            <p>
              Bienvenido a IQQ Bank, en tu cuenta podras :Hacer Depositos, Hacer
              Transacciones a otras cuentas, Ver el Historial de Transacciones.
            </p>
            <hr />
            <p className="mb-0">Creado por Juan Carlos Araya.</p>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Success;
