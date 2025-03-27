import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar-component/NavbarComponent";
import StickyCursor from "../components/sticky-cursor/StickyCursor";
import { useRef } from "react";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
  const stickyElement = useRef(null);

  return (
    <>
      <NavbarComponent ref={stickyElement} />
      <StickyCursor stickyElement={stickyElement} />
      <Outlet />
    </>
  );
}
