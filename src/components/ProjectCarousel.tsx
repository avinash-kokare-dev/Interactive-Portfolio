import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/ProjectCarousel.module.scss';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
    githubLink: "https://github.com/username/ecommerce-platform",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode, animations, and project showcase.",
    githubLink: "https://github.com/username/portfolio",
    tags: ["Next.js", "Framer Motion", "SCSS"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and drag-and-drop interface.",
    githubLink: "https://github.com/username/task-manager",
    tags: ["TypeScript", "Firebase", "React DnD"]
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Real-time weather forecasting application with interactive maps and historical data.",
    githubLink: "https://github.com/username/weather-app",
    tags: ["React", "OpenWeather API", "Chart.js"]
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Web application that generates AI art based on text prompts using Stable Diffusion.",
    githubLink: "https://github.com/username/ai-image-generator",
    tags: ["Python", "Flask", "React"]
  }
];

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <section id="Projects" className={styles.projects}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className={styles.carouselContainer}>
        <button 
          className={styles.navButton} 
          onClick={prevSlide}
          aria-label="Previous projects"
        >
          <FaArrowLeft />
        </button>

        <div className={styles.carousel}>
          {visibleProjects.map((project) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3>{project.title}</h3>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

        <button 
          className={styles.navButton} 
          onClick={nextSlide}
          aria-label="Next projects"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className={styles.dots}>
        {projects.slice(0, projects.length - 2).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project set ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};