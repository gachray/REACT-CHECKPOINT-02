
import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" style={{ width: '100%', padding: '10px' }}>
      <BootstrapNavbar.Brand href="#home">FIFA</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#players">Players</Nav.Link>
        <Nav.Link href="#teams">Teams</Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;