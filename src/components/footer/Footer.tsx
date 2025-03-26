import { memo } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = memo(function Footer() {
  return (
    <>
      <div className="footer m-auto text-center">
        <p>Contact me</p>
        <h1>tuanpham22790@gmail.com</h1>
        <div className="d-flex justify-content-center my-2">
          <Link to="https://github.com/PhamTuan284" target="blank">
            <FaGithubSquare size={36} className="me-3" />
          </Link>
          <Link to="https://www.linkedin.com/in/minh-tuan-pham-694350196/" target="blank">
            <FaLinkedin size={36} className="me-3" />
          </Link>
          <Link to="https://www.facebook.com/TuanTei/" target="blank">
            <FaFacebookSquare size={36} />
          </Link>
        </div>
        <p>Copyright © 2025 Tuan</p>
      </div>
    </>
  );
});

export default Footer;
