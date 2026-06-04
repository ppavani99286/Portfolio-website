import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </motion.h2>

        <div className="about-container">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/profile.png"
              alt="Pavani"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <h3>Frontend Developer & Data Science Student</h3>

            <p>
              I am a Computer Science (Data Science) student passionate
              about building modern, responsive, and visually appealing
              websites. I enjoy transforming ideas into interactive
              digital experiences using React, JavaScript, HTML, and CSS.
            </p>

            <p>
              My focus is creating clean user interfaces, mobile-friendly
              layouts, and professional websites that help businesses
              and individuals strengthen their online presence.
            </p>

            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
            >
              Download CV
            </a>

          </motion.div>

        </div>

        <div className="about-cards">

          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FaCode className="about-icon" />

            <h4>Frontend Development</h4>

            <p>
              React, JavaScript, HTML5, CSS3 and responsive design.
            </p>
          </motion.div>

          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaLaptopCode className="about-icon" />

            <h4>UI / UX Design</h4>

            <p>
              Modern interfaces focused on usability and user experience.
            </p>
          </motion.div>

          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FaRocket className="about-icon" />

            <h4>Performance</h4>

            <p>
              Fast, optimized, and mobile-friendly web experiences.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;