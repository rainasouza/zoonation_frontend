import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css'; 

const NavBar = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const location = useLocation();
// location serve pra observar mudancas de URL
  useEffect(() => {
// use effect a cada mudanca de url, a pagina recarrega 
    setToken(localStorage.getItem('token'));
  }, [location]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2 px-4">
      <Navbar.Brand as={Link} to="/" className="fs-4">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {token ? (
            <>
              <Nav.Link as={Link} to="/profile" className="mx-2">
                Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/toadopt" className="mx-2">
                Adote
              </Nav.Link>
              <Nav.Link as={Link} to="/post-pet" className="mx-2">
                Cadastre um Pet
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/register" className="mx-2">
                Registrar
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="mx-2">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
