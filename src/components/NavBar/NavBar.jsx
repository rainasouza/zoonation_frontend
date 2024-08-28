import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const NavBar = () => {
  const token = localStorage.getItem('token')
  return ( <div>
    {token && (
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2 px-4">
      <Navbar.Brand as={Link} to="/" className="fs-4">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/profile" className="mx-2">
            Perfil
          </Nav.Link>
          <Nav.Link as={Link} to="/toadopt" className="mx-2">
            Adote
          </Nav.Link>
          <Nav.Link as={Link} to="/post-pet" className="mx-2">
            Cadastre um Pet
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )}
    {!token && (
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2 px-4">
      <Navbar.Brand as={Link} to="/" className="fs-4">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/register" className="mx-2">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="mx-2">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>      
    )}
    </div>
  );
};

export default NavBar;
