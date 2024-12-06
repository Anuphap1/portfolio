import { useState, useEffect } from "react";
import "./navbarStyle.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isOpen && !e.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isOpen]);

  // Close menu when pressing Escape key
  useEffect(() => {
    const closeOnEscape = (e) => {
      if (isOpen && e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Anuphap</div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-list ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#welcome" onClick={toggleMenu}>
              Welcome
            </a>
          </li>
          <li className="nav-item">
            <a href="#about-me" onClick={toggleMenu}>
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
