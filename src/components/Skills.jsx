import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    percentage: 95,
  },
  {
    name: "CSS3",
    percentage: 90,
  },
  {
    name: "JavaScript",
    percentage: 85,
  },
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "Git & GitHub",
    percentage: 75,
  },
  {
    name: "Responsive Design",
    percentage: 90,
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </motion.h2>

        <div className="skills-grid">

          <div className="skills-text">
            <h3>
              Technologies I Use
            </h3>

            <p>
              I specialize in creating responsive and modern
              websites using frontend technologies. My focus is
              writing clean code, building attractive interfaces,
              and ensuring excellent user experience.
            </p>
          </div>

          <div className="skills-bars">

            {skills.map((skill, index) => (
              <motion.div
                className="skill-item"
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>

                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.percentage}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                  />
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;