import { useState } from "react";
import Header from "./Header";
import Skills from "./Skills";
import History from "./History";
import Projects from "./Projects";
import Future from "./Future";
import Passions from "./Passions";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectModal from "./ProjectModal";
import type { Project } from "../data/projects";

export type { Project } from "../data/projects";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main id="main-content" role="main">
        <History />
        <Skills />
        <Projects onProjectClick={setSelectedProject} />
        <Future />
        <Passions />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Modal de proyecto */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Portfolio;