import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from '../styles/About.module.scss';
import { getYearOfExperience } from '@/utils/helper';
import { FaCode, FaPalette, FaServer } from 'react-icons/fa';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <div className='about-section'>
      <motion.section
        id="About"
        className={styles.about}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className={styles.aboutHeading}>
          Who <span className={styles.aboutSpan}>Am I</span>
        </motion.h2>
        <div className={styles.container}>
          {/* Image Column */}
          <motion.div
            className={styles.imageColumn}
            variants={itemVariants}
          >
            <img src="/avinash_kokare.jpeg" alt="Profile Image" className={styles.profileImage} />
            <motion.div className={styles.stats} variants={itemVariants}>
              <div className={styles.statItem}>
                <h3>{getYearOfExperience()}</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className={styles.contentColumn}
            variants={itemVariants}
          >


            <motion.p className={styles.subtitle} variants={itemVariants}>
              Passionate Engineer creating digital experiences
            </motion.p>

            <motion.p variants={itemVariants}>
              Hi, I&apos;m <b>Avinash Vitthal Kokare</b>.
              I'm a <b>Senior Software Engineer with 5+ years</b> of experience building scalable, high-performance web applications and full-stack products. My expertise spans <b>frontend architecture, performance engineering, backend development, and AI-powered applications</b>, with hands-on experience delivering production systems used by thousands of users.
              I enjoy solving complex engineering challenges—from improving Core Web Vitals and modernizing frontend architectures to designing scalable APIs, integrating distributed systems, and optimizing application performance. I believe great software is built by balancing user experience, engineering excellence, and measurable business impact.
              Beyond writing code, I enjoy collaborating across product, design, and engineering teams, mentoring developers, and driving technical discussions that improve scalability, maintainability, and long-term product quality. I'm currently expanding my expertise in distributed systems, system design to build software that performs reliably at scale.
            </motion.p>

            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <FaCode className={styles.skillIcon} />
                <div>
                  <h4>Frontend</h4>
                  <p>React, Next.js, TypeScript, React Native</p>
                </div>
              </div>

              <div className={styles.skillItem}>
                <FaServer className={styles.skillIcon} />
                <div>
                  <h4>Backend</h4>
                  <p>Node.js, Express, MongoDB, System Design</p>
                </div>
              </div>

              <div className={styles.skillItem}>
                <FaPalette className={styles.skillIcon} />
                <div>
                  <h4>Design</h4>
                  <p>Figma, UI/UX Principles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;