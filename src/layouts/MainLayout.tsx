import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/navbar-component/NavbarComponent';

export default function MainLayout() {
  return (
    <>
      <NavbarComponent/>
      <Outlet />
    </>
  );
}
