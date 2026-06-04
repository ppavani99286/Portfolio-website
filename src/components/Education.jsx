import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2025 - Present",
    title: "B.Tech - Computer Science & Data Science",
    institute: "Malla Reddy Deemed to be University",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with a specialization in Data Science. Learning web development, programming, databases, AI, and data analytics."
  },
  {
    year: "2023 - 2025",
    title: "Intermediate Education",
    institute: "Narayana Junior College",
    description:
      "Completed higher secondary education with a strong academic foundation in mathematics and science."
  }
];

function Education() {
  return (
    <section id="education">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Education</span>
        </motion.h2>

        <div className="timeline">

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>

              <div className="timeline-content glass-card">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.institute}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;