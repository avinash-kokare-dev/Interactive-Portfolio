'use client'
import React, { useEffect } from 'react';
import Head from "next/head";
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { EducationSection } from '@/components/EducationSection';


const Home = () => {

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/send', {
        method: "POST",
        body: JSON.stringify({ from: "avi" }),
      });
      const data = await response.json();
      console.log("Response : ", data)
    }

    getData();
  }, []);
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
      </Head>
      <HeroSection />
      <About />
      <ExperienceSection />
      <ProjectCarousel />
      <EducationSection />
      <ContactSection />
    </>
  );
}

export default Home;