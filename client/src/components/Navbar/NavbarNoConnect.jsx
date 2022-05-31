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
import Logo from "../../Logo.png"

function NavbarConnect() {
  
  return (
    <div className="navD"> 
    <Navbar
      bg="transparent"
      expand="lg"
      width="100%"
      className="d-flex justify-content-around"
    >
      <Link to={"/"}>
        <img
            src={Logo}
          alt=""
          width="70"
            height="70"
            />
      </Link>

      <Form className="d-flex ">
        <FormControl
          type="search"

          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Recherche</Button>
      </Form>

      <div className="dropdownD" text-align="center">
        <Link to={`/login`}>
          <Button variant="outline-success">Connexion</Button>
        </Link>
      </div>
    </Navbar>
            </div>
  );
}

export default NavbarConnect;
