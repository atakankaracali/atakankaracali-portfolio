"use client";

import "./Styles/Experience.css";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>Senior Full Stack Developer - Datwyler</h3>
          <p><strong>Location:</strong> Riga, Latvia</p>
          <p><strong>Duration:</strong> Jan 2025 - Present</p>
          <p><strong>Technologies:</strong> React.js, TypeScript, Next.js, Redux, Ant Design, Tailwind CSS, GitLab, Docker, RestAPI</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>Senior Frontend Developer - BonApp</h3>
          <p><strong>Location:</strong> Riga, Latvia</p>
          <p><strong>Duration:</strong> Dec 2024 - Dec 2025</p>
          <p><strong>Technologies:</strong> React.js, TypeScript, Next.js, Redux, Ant Design, Tailwind CSS, Azure DevOps, Docker</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>QA & Performance Engineer - Aerones</h3>
          <p><strong>Location:</strong> Riga, Latvia</p>
          <p><strong>Duration:</strong> Aug 2024 - Dec 2024</p>
          <p><strong>Technologies:</strong> New Relic, Postman, Selenium, Confluence, Node.js, React.js, Docker</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>Mid Full Stack Developer - virtuDev</h3>
          <p><strong>Location:</strong> Stockholm, Sweden (Hybrid)</p>
          <p><strong>Duration:</strong> Feb 2023 - Mar 2024</p>
          <p><strong>Technologies:</strong> Python (Django, Twisted), React.js, Electron, Docker, Bitbucket, Git, Jira</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>Full Stack Developer - Call Center Studio</h3>
          <p><strong>Location:</strong> Remote (Chicago, USA)</p>
          <p><strong>Duration:</strong> Apr 2022 - Feb 2023</p>
          <p><strong>Technologies:</strong> Python (Django), React.js, NumPy, GCP, Docker, Confluence, Bitbucket</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="experience-card">
          <h3>Junior Full Stack Developer - Nebula Bilişim</h3>
          <p><strong>Location:</strong> Istanbul, Turkey (Remote)</p>
          <p><strong>Duration:</strong> Mar 2021 - Apr 2022</p>
          <p><strong>Technologies:</strong> Node.js, AngularJS, TypeScript, Windows Server Hardening, Unity3D, Docker, Git</p>
        </motion.div>

      </div>
    </section>
  );
}
