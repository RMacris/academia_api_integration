import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';
import { useAuthentication } from '../../Contexts/LoginContext';
import { useNavigate } from 'react-router-dom';

export function NavbarMenu()  {
    const auth = useAuthentication()
    // const navigate = useNavigate()
    function HandleLogout() { 
        auth.clearAuth()
        // navigate('/')
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className='nav-custom-container'>
                    <Navbar.Brand href="/">Resilia-Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link eventKey={1} href="/">HOME</Nav.Link>
                            { auth.auth && <Nav.Link eventKey={2} href="/avalicao">AVALIAÇÕES</Nav.Link> }
                            <Nav.Link eventKey={3} href="/contato">CONTATOS</Nav.Link>
                            <Nav.Link eventKey={4} href="/about">SOBRE</Nav.Link>
                            {!(auth.auth) && <Nav.Link eventKey={5} href="/">LOGIN</Nav.Link>}
                            {(auth.auth) && <Nav.Link onClick={HandleLogout} eventKey={5} href="/">SAIR</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Navbar>
    );
}