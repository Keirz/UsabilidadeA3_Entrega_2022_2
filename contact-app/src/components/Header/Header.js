import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

const Header = () => {
  return (

        <Navbar  className="navbarHeader container-fluid">
          <div className="container-fluid left">
            <Navbar.Brand href="/" className="left">
            <img src="/imgs/favicon.png" className="brandImg" />ReforçA+</Navbar.Brand>
            
            </div>
            <div className="container-fluid right">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="container-fluid right">
              <Nav className=" right">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/aluno">Seção de Management de Alunos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/professores">
                  Seção de Management de Professores
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      );
    }


export default Header;
