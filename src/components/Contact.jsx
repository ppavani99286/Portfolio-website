import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact <span>Me</span>
        </motion.h2>

        <div className="contact-container">

          {/* LEFT SIDE */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Work Together</h3>

            <p>
              Have a project idea or need a responsive website?
              Feel free to reach out. I'm always interested in
              discussing new opportunities and collaborations.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <FaEnvelope />
                <span>ppavani99286@example.com</span>
              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/ppavani99286"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pirangi-pavani-5662ba386/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              

            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;