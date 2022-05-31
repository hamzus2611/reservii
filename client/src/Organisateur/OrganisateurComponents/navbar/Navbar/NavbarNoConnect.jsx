import React from "react";
import {
  Container,
  Form,
  Button,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from ".//Logo.png"

function NavbarConnect() {
  
  return (
    <Navbar
      bg="light"
      expand="lg"
      width="100%"
      className="d-flex justify-content-around"
    >
      {/* <Link to={"/"}>
        <Navbar.Brand>   
        <img
            src={Logo}
          alt=""
            width="50"
            height="50"
        /></Navbar.Brand>
      </Link> */}

      {/* <Form className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}

      <div className="dropdown" text-align="center">
        <Link to={`/login`}>
          <Button variant="outline-success">Connexion</Button>
        </Link>
      </div>
    </Navbar>
  );
}

export default NavbarConnect;
