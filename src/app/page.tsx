'use client'
import React from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
      </Head>

      <HeroSection />

      {/* <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.main}
        id='Home'
      >
        <section className={styles.hero}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Welcome to My Portfolio</h1>
            <p>I create beautiful digital experiences</p>
          </motion.div>
        </section>

      </motion.main> */}
      <About />
      <ContactSection />
    </>
  );
}

export default Home;