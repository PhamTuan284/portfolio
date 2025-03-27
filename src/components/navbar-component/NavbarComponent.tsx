import Navbar from "react-bootstrap/Navbar";
import "./NavbarComponent.scss";
import Magnetic from "../magnetic/Magnetic";
import { forwardRef, memo, useMemo } from "react";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTheme } from "../../contexts/theme-provider";
import { FaSun, FaMoon } from "react-icons/fa";

interface NavbarProps {}

const NavbarComponent = memo(
  forwardRef<HTMLDivElement, NavbarProps>(function NavbarComponent(props, ref) {
    const { theme, toggleTheme } = useTheme();

    const memoizedOffcanvas = useMemo(
      () => (
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
      ),
      [theme]
    );

    return (
      <>
        <Navbar expand={false} className="navbar">
          <div className="container d-flex justify-content-end align-item-center">
            <div
              className={`theme-toggle me-3 ${theme === "dark" ? "dark" : ""}`}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } theme`}
            >
              <FaSun className="fa-sun"/>
              <FaMoon className="fa-moon"/>
            </div>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-false"}>
              <Magnetic>
                <div className="burger">
                  <div ref={ref} className="bounds"></div>
                </div>
              </Magnetic>
            </Navbar.Toggle>
            {memoizedOffcanvas}
          </div>
        </Navbar>
      </>
    );
  })
);

export default NavbarComponent;
