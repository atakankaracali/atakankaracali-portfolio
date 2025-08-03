"use client";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Styles/Navbar.css";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <ScrollLink to="hero" smooth={true} duration={500} className="logo">
        <Image src="/icon3.png" alt="Logo" width={50} height={50} priority />
      </ScrollLink>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="nav-link">About</ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500} offset={-80} className="nav-link">Experience</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} offset={-80} className="nav-link">Skills</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="nav-link">Projects</ScrollLink>
        <ScrollLink to="certifications" smooth={true} duration={500} offset={-80} className="nav-link">Certifications</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="nav-link">Contact</ScrollLink>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </nav>
  );
}
