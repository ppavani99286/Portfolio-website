import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaProjectDiagram, FaUsers } from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: "15+",
    title: "Projects Built",
  },
  {
    icon: <FaCode />,
    number: "500+",
    title: "Hours Coding",
  },
  {
    icon: <FaLaptopCode />,
    number: "10+",
    title: "Technologies",
  },
  {
    icon: <FaUsers />,
    number: "5+",
    title: "Happy Clients",
  },
];

function Stats() {
  return (
    <section id="stats">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Statistics</span>
        </motion.h2>

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.title}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;