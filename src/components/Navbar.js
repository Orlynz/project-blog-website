import React from "react";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <a href="/">
          <Image
            src="https://insights.g2academy.co/wp-content/uploads/2021/09/Logotype.png"
            alt=""
          />
        </a>
        {/* <Navbar.Brand href="#home">G2 | Academy</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link href=""><strong> Back To Main Page </strong></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
