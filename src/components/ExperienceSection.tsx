import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/ExperienceSection.module.scss';

const experiences = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    startDate: "2022-03-15",
    endDate: "present",
    description: "Led a team of 5 developers to build responsive web applications using React, Next.js, and TypeScript. Implemented design systems that improved development speed by 30%.",
    highlights: [
      "Reduced page load time by 40% through performance optimization",
      "Mentored junior developers in modern JavaScript practices",
      "Collaborated with UX team to implement accessibility standards"
    ]
  },
  {
    id: 2,
    company: "Digital Creations LLC",
    position: "Frontend Developer",
    startDate: "2020-06-10",
    endDate: "2022-03-10",
    description: "Developed and maintained e-commerce platforms serving 50K+ monthly users. Implemented features that increased conversion rates by 15%.",
    highlights: [
      "Built reusable component library adopted company-wide",
      "Integrated payment gateways with 99.9% uptime",
      "Implemented CI/CD pipelines reducing deployment time"
    ]
  },
  {
    id: 3,
    company: "Digital Creations LLC",
    position: "Frontend Developer",
    startDate: "2020-06-10",
    endDate: "2022-03-10",
    description: "Developed and maintained e-commerce platforms serving 50K+ monthly users. Implemented features that increased conversion rates by 15%.",
    highlights: [
      "Built reusable component library adopted company-wide",
      "Integrated payment gateways with 99.9% uptime",
      "Implemented CI/CD pipelines reducing deployment time"
    ]
  }
];

const formatDate = (dateString: string) => {
  if (dateString === "present") return "Present";
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });
};

export const ExperienceSection = () => {
  return (
    <section id="Experience" className={styles.experience} >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional <span>Experience</span>
      </motion.h2>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className={styles.experienceCard}
            
          >
            <div className={styles.companyHeader}>
              <div className={styles.companyIcon}>
                <FaBriefcase />
              </div>
              <h3>{exp.company}</h3>
              <div className={styles.date}>
                <FaCalendarAlt />
                <span>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
              </div>
            </div>

            <h4>{exp.position}</h4>
            
            <p className={styles.description}>{exp.description}</p>
            
            <ul className={styles.highlights}>
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};