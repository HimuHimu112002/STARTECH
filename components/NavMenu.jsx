import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
const NavMenu = () => {
  return (
    <Navbar expand="lg" className="shadow sticky-top">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Desktop</Nav.Link>
            <Nav.Link>Laptop</Nav.Link>
            <Nav.Link>Components PC</Nav.Link>
            <Nav.Link>Monitor</Nav.Link>
            <Nav.Link>Ups</Nav.Link>
            <Nav.Link>Phone</Nav.Link>
            <Nav.Link>Tablet</Nav.Link>
            <Nav.Link>Office Equipment</Nav.Link>
            <Nav.Link>Camera</Nav.Link>
            <Nav.Link>Security</Nav.Link>
            <Nav.Link>Networking</Nav.Link>
            <Nav.Link>Software</Nav.Link>
            <Nav.Link>Server & Storage</Nav.Link>
            <Nav.Link>Accessories</Nav.Link>
            <Nav.Link>Gadget</Nav.Link>
            <Nav.Link>Gaming</Nav.Link>
            <Nav.Link>TV</Nav.Link>
            <Nav.Link>Appliance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
