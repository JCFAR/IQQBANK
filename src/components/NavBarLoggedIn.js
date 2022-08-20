import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const NavBarLoggedIn = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [balance, setBalance] = useState();

  const navigate = useNavigate();

  async function populateInfo() {
    const req = await fetch("https://mit-jcfar.herokuapp.com/api/user", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setFirstName(data.fname);
      setLastName(data.lname);
      setEmail(data.email);
      setAddress(data.address);
      setContact(data.contact);
      setBalance(data.balance);
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
        navigate("/login", { replace: true });
      } else {
        // populateBalance()
        populateInfo();
        // getUpdatedFd()
      }
    }
  }, []);
  return (
    <Navbar expand="lg" bg="primary" fixed="top">
      <Navbar.Brand as={NavLink} to="/api/profile" className="m-2">
        Perfil
      </Navbar.Brand>
      <Navbar.Brand>
        de {firstName} {lastName}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/api/deposit">
            Depositar
          </Nav.Link>
          <Nav.Link as={NavLink} to="/api/transfer">
            Transferir
          </Nav.Link>
          <Nav.Link as={NavLink} to="/api/transactions">
            Historial de Trans
          </Nav.Link>
          <Nav.Link as={NavLink} to="/api/login">
            Login/out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarLoggedIn;
