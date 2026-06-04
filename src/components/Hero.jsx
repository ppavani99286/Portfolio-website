import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-subtitle">
            Hello, I'm
          </p>

          <h1>
            Pavani
          </h1>

          <h2>
            Frontend Developer & UI Designer
          </h2>

          <p className="hero-description">
            I build modern, responsive, and user-friendly websites
            using React, JavaScript, HTML, and CSS. Passionate about
            creating beautiful digital experiences and helping
            businesses establish a strong online presence.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <img
              src="/profile.png"
              alt="Pavani"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;