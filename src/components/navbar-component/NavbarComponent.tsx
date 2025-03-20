import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavbarComponent.scss";
import Magnetic from "../magnetic/Magnetic";
import { forwardRef } from "react";

interface NavbarProps {}

const NavbarComponent = forwardRef<HTMLDivElement, NavbarProps>(
  function NavbarComponent(props, ref) {
    return (
      <>
        <Navbar expand="lg" className="navbar">
          <Navbar.Brand>
            <Link to="/">{"</> Tuan"}</Link>
          </Navbar.Brand>

          <Magnetic>
            <div className="burger">
              <div ref={ref} className="bounds"></div>
            </div>
          </Magnetic>
        </Navbar>
      </>
    );
  }
);

export default NavbarComponent;
