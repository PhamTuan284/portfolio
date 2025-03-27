import { memo } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = memo(function Footer() {
  return (
    <>
      <div className="footer m-auto text-center">
        <p>Contact me</p>
        <h1>
          <a href="mailto:tuanpham22790@gmail.com" className="email-link">
            tuanpham22790@gmail.com
          </a>
        </h1>
        <div className="social-links">
          <Link to="https://github.com/PhamTuan284" target="blank" className="github">
            <FaGithubSquare size={36} />
          </Link>
          <Link to="https://www.linkedin.com/in/minh-tuan-pham-694350196/" target="blank" className="linkedin">
            <FaLinkedin size={36} />
          </Link>
          <Link to="https://www.facebook.com/TuanTei/" target="blank" className="facebook">
            <FaFacebookSquare size={36} />
          </Link>
        </div>
        <p>Copyright © 2025 Tuan</p>
      </div>
    </>
  );
});

export default Footer;
