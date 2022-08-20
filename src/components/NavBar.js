import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" bg="primary" fixed="top">
        <Navbar.Brand as={NavLink} to="/" className="m-2">
          Home
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/api/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/api/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
