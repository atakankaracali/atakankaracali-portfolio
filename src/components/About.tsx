import "./Styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>

      <p className="about-text">
        I am Atakan Karacali, a Senior Full Stack Developer based in Riga, Latvia.
        I build fast, scalable and user-friendly web applications with React, TypeScript,
        Node.js and Python, and I enjoy owning a product end to end, from the first
        component to the server it runs on.
      </p>

      <p className="about-text">
        Most recently at Datwyler, I worked in a small team where I took ownership well
        beyond the frontend: SAP integrations, PostgreSQL, Keycloak authentication,
        deployments and server maintenance. That experience taught me how to keep
        production systems running, not just how to ship features.
      </p>

      <p className="about-text">
        Outside of work, I build my own products. Letonya Sayfam is a trilingual platform
        with an AI assistant for the Turkish-speaking community in Latvia, backed by a
        social media community of 6,000+ followers. I also love integrating AI into
        real products, as in my AI Meme Generator and CosmoAdiuvo.
      </p>

      <p className="about-text">
        I am pursuing a Master in Business Informatics at Riga Technical University, and I
        am currently open to new opportunities: full-time roles in Riga (on-site or hybrid),
        remote B2B contracts, and freelance web and AI integration projects.
      </p>
    </section>
  );
}
