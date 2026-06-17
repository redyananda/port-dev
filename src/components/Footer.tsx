import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-left">
        ©{new Date().getFullYear()} p_dev. All rights reserved.
      </p>
      <div className="footer-nav">
        <a href="https://instagram.com" target="_blank">
          <img src="./ig.webp" alt="instagram" />
        </a>
        <a href="https://github.com" target="_blank">
          <img src="./github.webp" alt="github" />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <img src="./linkedin.webp" alt="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
