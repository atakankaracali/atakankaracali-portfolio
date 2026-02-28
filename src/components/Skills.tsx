import "./Styles/Skills.css";
import { FaReact, FaPython, FaDocker, FaCss3Alt, FaGit, FaLinux, FaNodeJs, FaUnity } from "react-icons/fa";
import { SiRedux, SiNewrelic, SiTypescript, SiSelenium, SiKotlin, SiMongodb, SiCss3, SiDjango, SiFigma } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card"><FaReact size={40} color="#61DBFB" /> React.js</div>
        <div className="skill-card"><FaPython size={40} color="#FFD43B" /> Python</div>
        <div className="skill-card"><SiTypescript size={40} color="#2496ED" /> Typescript</div>
        <div className="skill-card"><FaNodeJs size={40} color="#228B22" /> Node.js</div>
        <div className="skill-card"><SiKotlin size={40} color="#2496ED" /> Kotlin</div>
        <div className="skill-card"><SiRedux size={40} color="#764ABC" /> Redux</div>
        <div className="skill-card"><SiCss3 size={40} color="#2496ED" /> CSS3</div>  
        <div className="skill-card"><SiDjango size={40} color="#006400" /> Django</div>  
        <div className="skill-card"><SiSelenium size={40} color="#228B22" /> Selenium</div>
        <div className="skill-card"><FaDocker size={40} color="#2496ED" /> Docker</div>
        <div className="skill-card"><SiNewrelic size={40} color="#008C99" /> New Relic</div>
        <div className="skill-card"><FaLinux size={40} color="#FCC624" /> Linux</div>
        <div className="skill-card"><FaGit size={40} color="#F05032" /> Git</div>
        <div className="skill-card"><FaCss3Alt size={40} color="#1572B6" /> Tailwind CSS</div>  
        <div className="skill-card"><FaUnity size={40} color="#808080" /> Unity 3D</div>  
        <div className="skill-card"><SiMongodb size={40} color="#228B22" /> MongoDB</div>
        <div className="skill-card"><SiFigma size={40} color="#2496ED" /> Figma</div>
      </div>
    </section>
  );
}
