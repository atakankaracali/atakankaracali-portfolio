"use client";
import { useState, useEffect } from "react";
import "./Styles/Contact.css";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";


export default function Contact() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setShowButton(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-info">
        Feel free to reach out via the following channels:
      </p>
      <div className="contact-details">
        <p>📧 E-mail: <a href="mailto:atakan.karacali17@gmail.com">atakan.karacali17@gmail.com</a></p>
        <p>📍 Location: Riga, Latvia</p>
        <p>📱 Phone: +371 29356847</p>
        <p>🌍 Languages: Turkish - Native / English - B2 (CEFR) / Latvian - A1</p>
      </div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/atakankaracali/" target="_blank">LinkedIn</a>
        <a href="https://github.com/atakankaracali" target="_blank">GitHub</a>
      </div>
      {showButton && (
        <ScrollLink to="hero" smooth={true} duration={700} className="go-up-button">
          <FaArrowUp size={30} />
        </ScrollLink>
      )}
    </section>
  );
}
