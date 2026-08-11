import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/ExperienceSection.module.scss';

const experiences = [
  {
    id: 1,
    company: "OZiva (HUL)",
    position: "Sr. Software Engineer",
    startDate: "2022-10-17",
    endDate: "present",
    description: "Engineered scalable, production-ready full-stack applications by building reusable frontend experiences and reliable backend services. Focused on delivering maintainable, high-quality software with strong engineering standards, performance, and user experience.",
    highlights: [
      "Developed and maintained production React.js applications using JavaScript, TypeScript, Next.js, and Material UI (MUI), building reusable components and feature-based modules for scalable customer-facing experiences.",
      "Contributed to the migration from a custom React.js storefront to Shopify Hydrogen (SSR), improving Google PageSpeed from 20 to 75+, reducing bounce rate by 30–35%, and increasing conversion rate from ~2–3% to ~4–5% through improved rendering strategies and frontend performance optimization.",
      "Implemented frontend performance optimization using Server-Side Rendering, code splitting, lazy loading, and bundle optimization, with a strong focus on Core Web Vitals, page-load performance, and user experience.",
      "Worked across monolithic and micro-frontend architectures, contributing to reusable frontend patterns, component organization, responsive UI development, and maintainable feature-based structures.",
      "Built and maintained features across React.js, Next.js, Shopify Hydrogen, and React Native, delivering responsive customer experiences across web and mobile applications and integrating RESTful APIs and third-party services.",
      "Developed unit and component tests using React Testing Library, covering critical UI behavior and user interactions to improve frontend reliability and reduce regressions during feature development.",
      "Worked hands-on with Node.js and Express.js to develop and integrate RESTful APIs, implementing authentication, business validations, API integrations, and asynchronous request handling to support frontend customer journeys.",
      "Gained hands-on backend experience with Redis caching, Kafka-based asynchronous processing, JWT authentication, MongoDB, and PostgreSQL, collaborating with backend teams to troubleshoot API issues and improve end-to-end application reliability.",
      "Integrated GA4, Google Tag Manager, and Mixpanel to track user journeys, engagement, and conversion behavior; collaborated with Product teams to analyze data and run A/B tests for customer-facing features and product improvements.",
      "Integrated Razorpay as part of a payment gateway migration from GoKwik, helping reduce payment processing costs while maintaining a reliable checkout experience.",
      "Participated in code reviews, Agile ceremonies, frontend architecture discussions, and technical decision-making, while mentoring 2 junior engineers and 4 interns on development practices and code quality.",
      "Used Google AI Studio to accelerate UI implementation and repetitive development tasks, reducing feature development time by approximately 35–40%, followed by code review, refactoring, testing, and production validation."
    ]
  },
  {
    id: 3,
    company: "Cere Labs Pvt. Ltd, Mulund",
    position: "Software Engineer",
    startDate: "2021-06-22",
    endDate: "2022-06-27",
    description: "Worked as a Software Engineer on AI-driven software products at a product-based company, contributing to the development and maintenance",
    highlights: [
      "Developed and maintained internal engineering tools that streamlined developer workflows, automated routine tasks, and improved operational efficiency across multiple teams.",
      "Implemented new features and resolved production issues across internal applications, improving application stability, maintainability, and user experience while working closely with senior engineers.",
      "Improved backend processing workflows using Redis caching, RabbitMQ asynchronous messaging, and Python (Pandas) for data processing and transformation, supporting more efficient and reliable execution of business workflows.",
      "Collaborated with the Analytics team on a sensitive-data redaction application, contributing to improvements in data detection and processing accuracy for document-based workflows.",
      "Contributed to REST API development and frontend-backend integration, troubleshooting API issues and supporting end-to-end feature implementation across applications.",
      "Participated in Docker-based application deployments, gaining hands-on experience with containerized environments, application delivery, and production support."
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
