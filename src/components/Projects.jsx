import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FashionAura",
    image: "/project1.png",
    description:
      "Modern fashion e-commerce website with responsive design, product showcase, and elegant UI.",
    technologies: "React, CSS, JavaScript",
    github: "https://github.com/ppavani99286/fashionaura",
    live: "https://womens-style.netlify.app/"
  },

  {
    title: "Developer Portfolio",
    image: "/project2.png",
    description:
      "Personal portfolio website built with React and modern UI principles.",
    technologies: "React, Framer Motion, CSS",
    github: "https://github.com/ppavani99286/portfolio",
    live: "https://portfolio.vercel.app"
  },

  {
    title: "Business Landing Page",
    image: "/project3.png",
    description:
      "Professional landing page designed for startups and small businesses.",
    technologies: "React, CSS",
    github: "https://github.com/ppavani99286/business",
    live: "https://cafe-pro-ebon.vercel.app/"
  },

];

function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech-stack">
                  {project.technologies}
                </span>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;