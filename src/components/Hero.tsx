"use client";
import { motion } from "framer-motion";
import "./Styles/Hero.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Karacali-CV.pdf";
    link.download = "Karacali-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-title"
      >
        {`Hey, I am Atakan 👋`}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="hero-subtitle"
      >
        Senior Full Stack Engineer crafting clean, user-friendly interfaces. Lets build products people love to use.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="hero-button"
        onClick={handleDownloadCV}
      >
        Download CV 📄
      </motion.button>

      <div className="social-icons">
        <a href="https://github.com/atakankaracali" target="_blank" className="social-link" rel="noreferrer">
          <FaGithub size={45} />
        </a>
        <a href="https://www.linkedin.com/in/atakankaracali/" target="_blank" className="social-link" rel="noreferrer">
          <FaLinkedin size={45} />
        </a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="scroll-down"
      >
        ⬇ Scroll Down ⬇
      </motion.div>
    </section>
  );
}