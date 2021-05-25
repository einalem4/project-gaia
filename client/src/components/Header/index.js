import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return(
        <Navbar expand="lg">
            <Navbar.Brand href="#home">Project Gaia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;