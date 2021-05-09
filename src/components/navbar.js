import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

/* 

This is the navbar component

*/
export default class NavBar extends React.Component {
    render() {
        return (
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">My Site!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Click Me" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">A Thing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Also a Thing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">LOOK AT THIS THING</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}
