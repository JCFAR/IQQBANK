import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";

import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [balance, setBalance] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://mit-jcfar.herokuapp.com/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          balance: balance,
          address: address,
          contact: contact,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.status === "ok") {
      navigate("/api/login");
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ color: "black" }}>
        <div className="form-body container mt-5 mb-5">
          <h4 className="mb-5">
            Unete a nosotros completando el siguiente formulario
          </h4>
          <div className="form" style={{ width: "50%", margin: "auto" }}>
            <Form>
              <Row className="mb-4">
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="john@mit.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-4" controlId="formGridAddress1">
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formGridAddress2">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  placeholder="Número de celular"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formDep">
                <Form.Label>Monto Inicial</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="$1000"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                />
              </Form.Group>

              {/* <Form.Group controlId="formAadharCard" className="mb-3">
								<Form.Label>Aadhar copy</Form.Label>
								<Form.Control type="file" />
							</Form.Group> */}

              <Button variant="primary" type="submit" onClick={registerUser}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
