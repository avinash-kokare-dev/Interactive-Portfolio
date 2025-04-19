import { motion, useInView } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/ContactSection.module.scss';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, type: 'spring' }
    }
  };

  return (
    <motion.section 
      id="Contact"
      className={styles.contact}
      initial="hidden"
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className={styles.container}>
        {/* Header */}
        <motion.div className={styles.header} variants={itemVariants}>
          <h2>Get In Touch</h2>
          <div className={styles.divider} />
          <p>Have a project in mind or want to collaborate? Let's talk!</p>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div className={styles.info} variants={itemVariants}>
            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -5 }}
            >
              <div className={styles.icon}>
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Panvel, Navi Mumbai, India</p>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -5 }}
            >
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <a href="mailto:avi1999kokare@gmail.com">avi1999kokare@gmail.com</a>
            </motion.div>

            <motion.div 
              className={styles.infoCard}
              whileHover={{ y: -5 }}
            >
              <div className={styles.icon}>
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+91-9892583723</a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className={styles.form}
            variants={formVariants}
          >
            <motion.div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
              />
            </motion.div>

            <motion.div className={styles.formGroup}>
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
            </motion.div>

            <motion.div className={styles.formGroup}>
              <input 
                type="text" 
                placeholder="Subject" 
              />
            </motion.div>

            <motion.div className={styles.formGroup}>
              <textarea 
                placeholder="Your Message" 
                rows={5}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;