import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComponent.scss";
import Magnetic from "../magnetic/Magnetic";
import { forwardRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

interface NavbarProps {}

const NavbarComponent = forwardRef<HTMLDivElement, NavbarProps>(
  function NavbarComponent(props, ref) {
    return (
      <>
        <Navbar expand={false} className="navbar">
          <Navbar.Brand>
            <Link to="/">{"</> Tuan"}</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-false"}>
            <Magnetic>
              <div className="burger">
                <div ref={ref} className="bounds"></div>
              </div>
            </Magnetic>
          </Navbar.Toggle>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                {"</> Tuan"}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about-me">About me</Nav.Link>
                <Nav.Link href="/work">My work</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </>
    );
  }
);

export default NavbarComponent;
