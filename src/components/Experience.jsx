import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    year: "2025 - Present",
    role: "Frontend Developer",
    company: "Freelance & Personal Projects",
    description:
      "Developing responsive websites using React, JavaScript, HTML, and CSS. Creating portfolio websites, landing pages, and modern user interfaces."
  },
  {
    year: "2025 - Present",
    role: "Data Science Student",
    company: "Academic Learning",
    description:
      "Studying programming, data structures, databases, machine learning fundamentals, and web technologies through coursework and projects."
  },
  {
    year: "2024 - Present",
    role: "Self-Learning Developer",
    company: "Independent Learning",
    description:
      "Building projects, exploring modern web technologies, learning Git/GitHub, React, responsive design, and deployment workflows."
  }
];

function Experience() {
  return (
    <section id="experience">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Experience</span>
        </motion.h2>

        <div className="experience-timeline">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >
              <div className="experience-icon">
                <FaBriefcase />
              </div>

              <div className="experience-content glass-card">

                <span className="experience-year">
                  {exp.year}
                </span>

                <h3>{exp.role}</h3>

                <h4>{exp.company}</h4>

                <p>{exp.description}</p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;