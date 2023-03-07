import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container>
    <Nav className="me-auto justify-content-end">
      <Nav.Link><Facebook /></Nav.Link>
      <Nav.Link><Instagram /></Nav.Link>
      <Nav.Link><Twitter /></Nav.Link>
    </Nav>
  </Container>

);
export default TopMenu;
