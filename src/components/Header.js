import { Link } from "gatsby"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import "../styles/global.css"

export default function Header() {
  return (
    <Navbar expand="md" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" id="logo">
            {/* <img src="/favicon.ico" alt="PJP Economics Logo"></img> */}
            PJP ECONOMICS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ms-auto">
            <Link to="/" className="nav-link" activeClassName="active">
              Home
            </Link>
            <Link to="/services" className="nav-link" activeClassName="active">
              Services
            </Link>
            <Link to="/about" className="nav-link" activeClassName="active">
              About
            </Link>
            <Link to="/contact" className="nav-link" activeClassName="active">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
