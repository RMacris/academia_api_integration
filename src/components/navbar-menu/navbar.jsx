import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

export default class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: [
                {
                    id: 1,
                    name: '/',
                    onClick: this.props.onClick
                },
                {
                    id: 2,
                    name: '/Contatos',
                    onClick: this.props.onClick
                },
                {
                    id: 3,
                    name: '/Sobre',
                    onClick: this.props.onClick
                },
                {
                    id: 4,
                    name: '/Login',
                    onClick: this.props.onClick
                }
            ]
        };
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className='nav-custom-container'>
                        <Navbar.Brand href="#home">Resilia-Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey={1} href="/">HOME</Nav.Link>
                                <Nav.Link eventKey={2} href="/Contatos">CONTATOS</Nav.Link>
                                <Nav.Link eventKey={3} href="/Sobre">SOBRE</Nav.Link>
                                <Nav.Link eventKey={4} href="/Login">LOGIN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </Navbar>
        );
    }
}