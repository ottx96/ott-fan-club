import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function NavigationBar() {
    return (
        <Navbar active={2} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Ott-Fanclub</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey={1} href="#/">Startseite</Nav.Link>
                    <Nav.Link eventKey={2} href="#quotes">Zitate</Nav.Link>
                    <NavDropdown eventKey="/" title="Mehr" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#calendar">Kalender</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Coming Soon</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={1} href="#memes">Memes</Nav.Link>
                    <Nav.Link eventKey={2} href="#about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
