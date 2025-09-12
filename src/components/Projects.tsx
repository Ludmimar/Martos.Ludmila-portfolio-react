import { LaptopIcon, ExternalLink, Github } from "lucide-react";
import { Project, projects } from "../data/projects";
import OptimizedImage from "./OptimizedImage";

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {

  return (
    <section id="proyectos" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
          <LaptopIcon className="text-purple-600" size={32} />
          Proyectos
        </h2>
        
        <p className="text-dark text-lg mb-12 font-semibold">
          Cada proyecto cuenta una parte del viaje: práctica, colaboración y entrega de valor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="card-sakura cursor-pointer group relative overflow-hidden"
              onClick={() => onProjectClick(project)}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={`Screenshot del proyecto ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>

                {/*<p className=".text-dark text-sm mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>*/}
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                    {project.stack}
                  </span>
                    {/*
                  <div className="flex gap-2 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Demo
                      </a>
                    )}
                  </div>*/}
                </div>
              </div>
              
              {/* Hover sparkle effect */}
              <div className="absolute top-2 right-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ✨
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;