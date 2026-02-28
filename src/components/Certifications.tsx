"use client";

import "./Styles/Certifications.css";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Google AI Essentials</h3>
          <p>Google Coursera Specialization</p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/WKYOGPYN5RRQ"
            target="_blank"
            className="certification-link"
          >
            View Certificate 📜
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Google Prompt Essentials</h3>
          <p>Google Coursera Specialization about AI and Prompt Engineering</p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/C3HOGF80WBPJ"
            target="_blank"
            className="certification-link"
          >
            View Certificate 📜
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Discover Tech Autumn 2025</h3>
          <p>
            Riga TechGirl covering UX/UI, Product & Project Management, DevOps,
            Data Analytics, Programming, Cybersecurity, AI, and Digital
            Marketing
          </p>
          <a
            href="https://www.digitalasizaugsmesskola.lv/certificates/quiphk1fv4"
            target="_blank"
            className="certification-link"
          >
            View Certificate 📜
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Cisco CyberOPS Associate</h3>
          <p>CISCO Networking and Security Certification</p>
          <a
            href="https://www.credly.com/badges/a258f141-77f4-47f6-b6e0-ead453480242?source=linked_in_profile"
            target="_blank"
            className="certification-link"
          >
            View Certificate 📜
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Duolingo English Test (CEFR - B2)</h3>
          <p>Certified B2 English proficiency</p>
          <a
            href="https://certs.duolingo.com/nc5k99lfvli345us"
            target="_blank"
            className="certification-link"
          >
            View Certificate 📜
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Cisco Cyber Security Introduction Training</h3>
          <p>Cisco Cyber Security Introduction Trainining Course</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="certification-card">
          <h3>Cisco Introduction to Cisco Wireless Networks Training</h3>
          <p>Cisco Introduction to Cisco Wireless Networks Training</p>
        </motion.div>
      </div>
    </section>
  );
}
