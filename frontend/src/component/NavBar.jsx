import React, { useState } from "react";
import "./navbar.css";

const BuilderIcon = () => (
  <svg
    className="logo-icon"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22V12m0 0l-9-5m9 5l9-5"
    />
  </svg>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-box">
            <BuilderIcon />
          </div>
          <span className="logo-text">Nishant Rawani</span>
        </div>

        {/* Menu Button */}
        <div className="menu-wrapper">
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {isOpen && (
            <div className="dropdown">
              <a href="#hero">
                <i class="fa-solid fa-house"></i> Home
              </a>
              <a href="#projects">
                <i class="fa-regular fa-lightbulb"></i> Projects
              </a>
              <a href="#skills">
                <i class="fa-solid fa-brain"></i> Skills
              </a>
              <a href="#experience">
                <i class="fa-brands fa-hotjar"></i> Experience
              </a>

              <a href="#contact">
                <i class="fa-regular fa-address-book"></i> Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
