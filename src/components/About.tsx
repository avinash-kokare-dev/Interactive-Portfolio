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
        <div className={styles.container}>
          {/* Image Column */}
          <motion.div
            className={styles.imageColumn}
            variants={itemVariants}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.mainImage} />
              <div className={styles.decorativeShape} />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className={styles.contentColumn}
            variants={itemVariants}
          >
            <motion.h2 variants={itemVariants}>
              About <span>Me</span>
            </motion.h2>

            <motion.p className={styles.subtitle} variants={itemVariants}>
              Passionate developer creating digital experiences
            </motion.p>

            <motion.p variants={itemVariants}>
              Hi, I&apos;m Avinash Vitthal Kokare. I specialize in building responsive,
              user-friendly web applications with modern technologies.
              With {getYearOfExperience()} years of experience, I bridge design and technology
              to create impactful digital solutions.
            </motion.p>

            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <FaCode className={styles.skillIcon} />
                <div>
                  <h4>Frontend</h4>
                  <p>React, Next.js, TypeScript</p>
                </div>
              </div>

              <div className={styles.skillItem}>
                <FaServer className={styles.skillIcon} />
                <div>
                  <h4>Backend</h4>
                  <p>Node.js, Express, MongoDB</p>
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
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;