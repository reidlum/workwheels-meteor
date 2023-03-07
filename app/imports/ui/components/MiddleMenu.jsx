import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Cart3, Search } from 'react-bootstrap-icons';

const MiddleMenu = () => (
  <Container>
    <Navbar expand="lg">
      <Container className="justify-content-start">
        <Nav>
          <img src="https://workwheelsusa.com/wp-content/uploads/2016/02/logo.png" alt="work logo" width="252px" className="px-3" />
          <NavDropdown title="PRODUCTS" className="px-3">
            <NavDropdown.Item />
            <NavDropdown.ItemText>WHEELS</NavDropdown.ItemText>
          </NavDropdown>
          <Nav.Link className="px-3">SHOP</Nav.Link>
          <Nav.Link className="px-3">NEWS</Nav.Link>
          <Nav.Link className="px-3">GALLERY</Nav.Link>
          <Nav.Link className="px-3">DEALERS</Nav.Link>
          <Nav.Link className="px-3">CONTACT</Nav.Link>
          <Nav.Link className="px-3"><Search /></Nav.Link>
        </Nav>
      </Container>
      <Container className="justify-content-end">
        <Nav>
          <NavDropdown title="MY ACCOUNT" className="px-3">
            <NavDropdown.Item />
            <NavDropdown.ItemText>WHEELS</NavDropdown.ItemText>
          </NavDropdown>
          <Nav.Link><Cart3 /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);
export default MiddleMenu;
