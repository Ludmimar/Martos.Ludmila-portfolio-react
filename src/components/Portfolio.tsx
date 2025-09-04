import { useEffect, useState } from "react";
import Header from "./Header";
import StickyNav from "./StickyNav";
import Historia from "./Historia";
import Skills from "./Skills";
import Proyectos from "./Proyectos";
import Futuro from "./Futuro";
import Pasiones from "./Pasiones";
import Contacto from "./Contacto";
import Footer from "./Footer";
import FloatingPetals from "./FloatingPetals";
import ScrollToTop from "./ScrollToTop";
import ProjectModal from "./ProjectModal";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  link: string;
  demo?: string;
  image: string;
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize reveal animation
  useRevealOnScroll();

  return (
    <div className="min-h-screen">
      <FloatingPetals />
      
      <Header />
      
      <StickyNav />
      
      <main>
        <Historia />
        <Skills />
        <Proyectos onProjectClick={setSelectedProject} />
        <Futuro />
        <Pasiones />
        <Contacto />
      </main>
      
      <Footer />
      
      <ScrollToTop />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Portfolio;