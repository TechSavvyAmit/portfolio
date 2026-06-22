import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import "../assets/css/Header.css";

export default function Header() {
  const location = useLocation();

  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname.substring(1) || "home";
    setActiveLink(currentPath);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const navLinks = [
    {
      id: "home",
      icon: FaHome,
      text: "Home",
      path: "/",
    },
    {
      id: "skills",
      icon: FaCode,
      text: "Skills",
      path: "/skills",
    },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    {
      id: "projects",
      icon: FaLaptopCode,
      text: "Projects",
      path: "/projects",
    },
    {
      id: "contact",
      icon: FaEnvelope,
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo */}

        <Link to="/" className="logo">
          <span>A</span>mit
        </Link>

        {/* Desktop Nav */}

        <nav className="desktop-nav">
          {navLinks.map(({ id, icon: Icon, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => setActiveLink(id)}
              className={`nav-link ${activeLink === id ? "nav-active" : ""
                }`}
            >
              <Icon />
              <span>{text}</span>
            </Link>
          ))}
        </nav>

        {/* Resume */}

        <a
          href="https://drive.google.com/file/d/1clOorL_ydBn9jUlIjrAfhFnb9r7kBaxu/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          <FaDownload />
          Resume
        </a>

        {/* Mobile */}

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenu && (
        <div className="mobile-nav">
          {navLinks.map(({ id, icon: Icon, text, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => {
                setActiveLink(id);
                setMobileMenu(false);
              }}
              className={`mobile-link ${activeLink === id ? "mobile-active" : ""
                }`}
            >
              <Icon />
              {text}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}