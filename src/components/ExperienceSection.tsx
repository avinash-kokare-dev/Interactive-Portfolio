import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/ExperienceSection.module.scss';
import { on } from 'nodemailer/lib/smtp-transport';

const experiences = [
  {
    id: 1,
    company: "OZiva (HUL)",
    position: "Sr. Software Engineer",
    startDate: "2022-10-17",
    endDate: "present",
    description: "Engineered scalable, production-ready full-stack applications by building reusable frontend experiences and reliable backend services. Focused on delivering maintainable, high-quality software with strong engineering standards, performance, and user experience.",
    highlights: [ 
      "Took ownership to migrate OZiva's headless e-commerce platform from a custom React.js storefront to Shopify Hydrogen (SSR), improving Google PageSpeed scores from 20 - 25 to 75+, reducing bounce rates by 30–35%, and increasing conversion rates (CVR) from ~2–3% to ~4–5% through Server-Side Rendering (SSR), optimized rendering strategies, and Core Web Vitals improvements. Established a scalable frontend architecture that accelerated feature delivery and enhanced the overall customer experience.",
      "Modernized the frontend architecture by introducing a feature-based modular architecture, improving code maintainability, scalability, and developer productivity. Optimized bundle delivery using React Server Components, code splitting, lazy loading, and render optimization, significantly improving application performance and the overall user experience.",
      "Delivered business-critical customer journeys across Web and React Native applications by building scalable frontend features, integrating Razorpay as a cost-effective payment solution, and implementing GA4, Google Tag Manager, and Mixpanel analytics. Partnered with Product teams to drive A/B testing, enabling data-driven product decisions, continuous conversion optimization, and improved customer engagement.",
      "Engineered secure RESTful APIs within a microservices architecture using Node.js and Express.js, implementing JWT-based authentication (Access & Refresh Tokens), standardized request validation, and reusable service layers to build secure, scalable, and maintainable backend services powering critical e-commerce workflows.",
      "Improved backend performance and scalability by implementing Redis caching for frequently accessed business data, reducing database load and API response latency, while leveraging Kafka-driven asynchronous event processing for reliable order notification workflows, improving system responsiveness, operational resilience, and supporting high-traffic production workloads.",
      "Mentored 2 junior engineers and 4 interns through technical guidance, code reviews, debugging sessions, and architecture discussions, promoting engineering best practices, accelerating onboarding, and improving overall team productivity and software quality."
    ]
  },
  {
    id: 2,
    company: "Blue Bricks Pvt. Ltd, Pune",
    position: "Full Stack Developer",
    startDate: "2022-07-02",
    endDate: "2022-10-12",
    description: "Developed and maintained core web applications for an AI/ML product platform with a focus on scalability, performance, and reliability.",
    highlights: [
      "Contributed to the development of full-stack web applications, building and maintaining production-ready features while collaborating with senior engineers throughout the development lifecycle.",
      "Integrated AI/ML APIs into existing applications by implementing backend logic to fetch, process, and transform AI-generated responses into structured data, enabling dynamic and interactive user experiences on the frontend"
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
      "Built and maintained internal engineering tools that simplified developer workflows, improved operational efficiency, and supported day-to-day engineering activities across multiple teams.",
      "Delivered new features and resolved production issues for applications, contributing to application stability, maintainability, and an improved user experience while collaborating closely with senior engineers.",
      "Enhanced backend processing by implementing Redis caching, RabbitMQ-based asynchronous workflows, and Python (Pandas) data processing, improving execution efficiency and supporting reliable processing of business-critical workloads.",
      "Contributed to backend API development and system integrations while gaining hands-on experience with containerized deployments using Docker, modern software delivery practices, and production support."
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