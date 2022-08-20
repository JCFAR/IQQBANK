import React from "react";
import "../styles/TransactionHistory.css";
// import "../styles/Transfer.css";
import { useState, useEffect } from "react";

import jwt_decode from "jwt-decode";
import { Card } from "react-bootstrap";
import NavBarLoggedIn from "./NavBarLoggedIn";

const TransactionHistory = () => {
  const [Array_recieved, setArrayRecieved] = useState([]);
  const [Array_sent, setArraySent] = useState([]);

  const convertDate = (iso) => {
    return iso.substr(0, 10);
  };

  async function getTransactions() {
    const req = await fetch("https://mit-jcfar.herokuapp.com/api/transaction", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      setArrayRecieved(data.objReceived);
      setArraySent(data.objSent);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem(token);
      } else {
        getTransactions();
      }
    }
  }, []);

  return (
    <div>
      <NavBarLoggedIn />
      <div className="transactionbody mt-4">
        <h2>Historial de Transacciones</h2>
        <br />
        <div className="box">
          {Array_recieved.map((Robj) => {
            const { amount, desc, receiverId, senderId, createdAt } = Robj;
            return (
              <Card
                style={{ width: "80vw", marginLeft: "2vw" }}
                className="mb-2 leftcard"
                border="success"
              >
                <Card.Body>
                  <Card.Subtitle className="mb-1 text-muted ">
                    <b>Cantidad: </b>Monto Recivido: {amount}
                  </Card.Subtitle>
                  <Card.Text>
                    Descripción: {desc} <br />
                    Identificador Enviante: {senderId}
                    <br />
                    Identificador Receptor: {receiverId}
                    <br />
                    Hora: {convertDate(createdAt)}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}

          {Array_sent.map((Sobj) => {
            const { amount, desc, receiverId, createdAt } = Sobj;
            return (
              <Card
                style={{ width: "80vw", marginLeft: "16.5vw" }}
                className="mb-2 rightcard"
                border="danger"
              >
                <Card.Body>
                  <Card.Subtitle className="mb-1 text-muted">
                    <b>Cantidad: </b>Monto Pagado: {amount}
                  </Card.Subtitle>
                  <Card.Text>
                    Descripción: {desc} <br />
                    ID de la Trasacción: {receiverId}
                    <br />
                    Hora: {convertDate(createdAt)}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
