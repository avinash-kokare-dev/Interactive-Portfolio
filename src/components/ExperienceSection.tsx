import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/ExperienceSection.module.scss';

const experiences = [
  {
    id: 1,
    company: "OZiva Pvt. Ltd, Mumbai",
    position: "Software Engineer",
    startDate: "2022-10-17",
    endDate: "present",
    description: "Collaborated with a team of 5 developers to build responsive web applications using React, Next.js, and TypeScript, contributing to a fast and consistent user experience across devices.",
    highlights: [ "Spearheaded the development and optimization of scalable, user-centric features using modern frontend frameworks like React and Next.js, ensuring smooth performance across devices and browsers.","Adopted best practices and modern tooling to optimize resource consumption (JS/CSS size, network requests, rendering performance) without compromising user experience.","Partnered closely with product managers and designers to deliver high-impact features—one of which contributed directly to a 12–14% increase in company revenue post-launch.","Led a cost optimization initiative focused on frontend performance, asset delivery, and infrastructure utilization, resulting in approximately 40% savings in operational expenses.","Continuously drove website performance improvements by implementing performance audits, lazy loading, code-splitting, and other optimization techniques to improve load speed, responsiveness, and overall UX.","Integrated analytics platforms such as Google Analytics and MoEngage for comprehensive event tracking and behavior analysis, enabling data-driven decision-making across product and marketing teams."
    ]
  },
  {
    id: 2,
    company: "Bluebricks Technologies Pvt Ltd, Pune",
    position: "Full Stack Developer",
    startDate: "2022-07-02",
    endDate: "2022-10-12",
    description: "Developed and maintained core web applications for an AI/ML product platform with a focus on scalability, performance, and reliability.",
    highlights: [
      "Contributed to full-stack development at Blue Bricks, working with Node.js, MongoDB, and React to build scalable and maintainable web applications.","Integrated AI/ML APIs into existing features by implementing backend logic in Node.js to fetch, process, and handle responses from machine learning models.","Parsed and transformed AI-generated data on the backend and delivered structured results to the frontend, enabling dynamic and interactive UI updates in React."
    ]
  },
  {
    id: 3,
    company: "Cere Labs Pvt. Ltd, Mulund",
    position: "Frontend Developer",
    startDate: "2021-06-22",
    endDate: "2022-06-27",
    description: "Worked as a Software Engineer on AI-driven software products at a product-based company, contributing to the development and maintenance",
    highlights: [
      "Built an internal tool for developers to manage packages, web apps, and other resources using React.js (frontend) and Node.js (backend), improving developer productivity.","Assisted in debugging and optimizing existing codebases to enhance performance and maintainability.","Collaborated with the analytics team to improve the Aadhar Redaction bot, a client-side deployed tool, enhancing its accuracy and efficiency in sensitive data redaction.","Contributed to the development of new features in an existing product, focusing on improving user experience and overall functionality.","Participated in the deployment process using Docker, helping ensure consistent environments and smoother application delivery across stages."
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