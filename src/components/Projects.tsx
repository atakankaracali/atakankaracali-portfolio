"use client";

import "./Styles/Projects.css";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/studionesa.png" alt="StudioNesa" className="project-image" />
          <h3>StudioNesa</h3>
          <p>
            A handcrafted product showcase website with multilingual content, image gallery modals,
            and Firebase-powered admin panel. Built for a real brand, tailored for real users.
          </p>
          <a href="https://www.studionesa.com/" target="_blank" className="project-link" rel="noreferrer">
            Visit studionesa.com 🌐
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/settingsme.png" alt="SettingsMe" className="project-image" />
          <h3>SettingsMe</h3>
          <p>
            What if the universe had a settings page, and you could patch your reality?
            This project is not just a quirky concept; it is a deep dive into advanced frontend engineering.
          </p>
          <a href="https://www.settingsme.com/" target="_blank" className="project-link" rel="noreferrer">
            Visit settingsme.com 🌐
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/cosmo.png" alt="CosmoAdiuvo" className="project-image" />
          <h3>CosmoAdiuvo</h3>
          <p>
            CosmoAdiuvo is an AI-powered astrology web app that merges real-time astronomy data, 3D visuals, and GPT-4o to deliver a truly cosmic experience.
          </p>
          <a href="https://www.cosmoadiuvo.com/" target="_blank" className="project-link" rel="noreferrer">
            Visit cosmoadiuvo.com 🌐
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/meme-generator.png" alt="AI Meme Generator" className="project-image" />
          <h3>AI Meme Generator</h3>
          <p>
            A fun and shareable meme creation platform powered by AI. Features multiple creative modes and user interactions.
            Built with React, TypeScript, Firebase & OpenRouter.
          </p>
          <a href="https://www.aigeneratememe.com/" target="_blank" className="project-link" rel="noreferrer">
            Visit aigeneratememe.com 🌐
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/restaurant-app.png" alt="Restaurant App" className="project-image" />
          <h3>Restaurant Ordering App</h3>
          <p>
            An interactive online ordering interface with cart, modals, and Redux state management.
            Built with React, Redux, and Ant Design.
          </p>
          <a href="https://restarount-app.netlify.app/" target="_blank" className="project-link" rel="noreferrer">
            Live Demo 🌐
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/showcase-ui.png" alt="Game Card Showcase" className="project-image" />
          <h3>Game Card UI Showcase</h3>
          <p>
            A clean and responsive UI component gallery built with HTML, CSS & JS. Demonstrates layout design without frameworks.
          </p>
          <a href="https://atakan-showcase.netlify.app/" target="_blank" className="project-link" rel="noreferrer">
            View Showcase 🌐
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="project-card">
          <img src="/projects/swedbank-form.png" alt="Swedbank Form Task" className="project-image" />
          <h3>Swedbank Application Form</h3>
          <p>
            Built with vanilla HTML, CSS & JavaScript. Fully responsive and styled according to Swedbanks UI guidelines.
          </p>
          <a href="https://bank-atakan.netlify.app/" target="_blank" className="project-link" rel="noreferrer">
            View Demo 🌐
          </a>
        </motion.div>


      </div>
    </section>
  );
}
