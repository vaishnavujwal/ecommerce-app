import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">© 2025 Ujjwal Vaishnav</div>
      <div className="footer-center">All Rights Reserved</div>
      <div className="footer-right">
        <a href="https://vaishnavujwal.github.io/myportfolio/" target="_blank"><FaInstagram /></a>
        <a href="https://vaishnavujwal.github.io/myportfolio/" target="_blank"><FaLinkedin /></a>
        <a href="https://vaishnavujwal.github.io/myportfolio/" target="_blank"><FaGithub /></a>
        <a href="https://vaishnavujwal.github.io/myportfolio/" target="_blank"><FaFacebook /></a>
      </div>
    </footer>
  );
};

export default Footer;
