import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description:
      "Modern websites built with React, JavaScript, HTML, and CSS."
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description:
      "Clean, attractive, and user-friendly interfaces for web applications."
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    description:
      "Mobile-first websites that work perfectly on all screen sizes."
  },
  {
    icon: <FaRocket />,
    title: "Website Optimization",
    description:
      "Performance improvements, SEO basics, and faster loading websites."
  }
];

function Services() {
  return (
    <section id="services">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Services</span>
        </motion.h2>

        <div className="services-grid">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;