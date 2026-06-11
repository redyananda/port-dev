import { useState } from "react";
import { X, Menu } from 'lucide-react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <a href="#hero" className="navbar-brand">
        <img src="/logo.png" alt="logo" />
      </a>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toogle Menu"
      >
        {isOpen ? <X size={28} />: <Menu size={28} />}

      </button>
      <ul className={isOpen ? "navbar-nav open": "navbar-nav"}>
        <li className="nav-link">
          <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
        </li>
        <li className="nav-link">
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li className="nav-link">
          <a href="" onClick={() => setIsOpen(false)}>Portfolio</a>
        </li>
        <li className="nav-link">
          <a href="" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
