import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import styles from '../styles/HeroSection.module.scss';
import Link from 'next/link';

const HeroSection = () => {
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
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.section 
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.gradientBg} />
      
      <div className={styles.content}>
        <motion.div className={styles.textContainer} variants={itemVariants}>
          <motion.p className={styles.greeting} variants={itemVariants}>
            Hello, I'm
          </motion.p>
          
          <motion.h1 className={styles.name} variants={itemVariants}>
            <span>Avinash</span> Kokare
          </motion.h1>
          
          <motion.div className={styles.animatedText} variants={itemVariants}>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1500,
                'Backend Developer',
                1500,
                'UI/UX Designer',
                1500,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className={styles.typeAnimation}
            />
          </motion.div>
        </motion.div>

        <motion.div className={styles.ctaContainer} variants={itemVariants}>
          <motion.button
            className={styles.primaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={'#Contact'}>Contact Me</Link>
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        animate={{
          y: [0, 15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;