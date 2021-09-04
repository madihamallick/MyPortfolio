import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import './Header.css'
import Resume from './Resume.pdf'

const Header = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand id="name" href="/">MADIHA</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav>
        <Nav.Link id="nav-menu" href="#body">HOME</Nav.Link>
        <Nav.Link id="nav-menu" href="#about">ABOUT</Nav.Link>
        <Nav.Link id="nav-menu" href="#projects">PROJECTS</Nav.Link>
        <Nav.Link id="nav-menu" href={Resume}>RESUME</Nav.Link>
        <Nav.Link id="nav-menu" style={{marginRight:"10rem"}}href="#contact">CONTACT</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default Header;