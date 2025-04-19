'use client'
import React from 'react';
import Head from "next/head";
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectCarousel } from '@/components/ProjectCarousel';

const Home = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
      </Head>
      <HeroSection />
      <About />
      <ExperienceSection />
      <ProjectCarousel />
      <ContactSection />
    </>
  );
}

export default Home;