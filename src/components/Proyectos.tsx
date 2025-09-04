import { LaptopIcon, ExternalLink, Github } from "lucide-react";
import { Project } from "./Portfolio";

interface ProyectosProps {
  onProjectClick: (project: Project) => void;
}

const Proyectos = ({ onProjectClick }: ProyectosProps) => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Incubadora NOC",
      description: "Plataforma para gestionar cursos, alumnos y pagos. Proyecto Bootcamp Santex.",
      stack: "Angular · SCSS · Node.js · Express · Sequelize · MySQL",
      link: "https://github.com/Ludmimar/Incubadora_Noc",
      image: "https://github.com/Ludmimar/Portfolio_Martos_Ldmila/blob/main/img/incubadora.png?raw=true"
    },
    {
      id: "2", 
      title: "Conversor de Moneda",
      description: "App en Java orientada a objetos para practicar lógica y POO.",
      stack: "Java · POO",
      link: "https://github.com/Ludmimar/DesafioConversorDeMoneda",
      image: "https://github.com/Ludmimar/Portfolio_Martos_Ldmila/blob/main/img/conversor.png?raw=true"
    },
    {
      id: "3",
      title: "Beauty Shop", 
      description: "Página de belleza desarrollada para practicar la implementación de un carrito de compras dinámico.",
      stack: "HTML · CSS · JS",
      link: "https://github.com/Ludmimar/Actividad_Semana_04_Bam_2.0",
      demo: "https://ludmila-martos-beauty.netlify.app/",
      image: "https://github.com/Ludmimar/Portfolio_Martos_Ldmila/blob/main/img/beauty.jpg?raw=true"
    },
    {
      id: "4",
      title: "Gestión de Notas de Alumnos",
      description: "El programa permite cargar alumnos, calcular promedios, asignar condiciones y realizar búsquedas y modificaciones de notas de forma interactiva con la consola.",
      stack: "Python",
      link: "https://github.com/Ludmimar/ISSD/tree/main/Programacion%201/Coloquio%20Promocional",
      image: "https://raw.githubusercontent.com/Ludmimar/Portfolio_Martos_Ldmila/8756fdf4509c5b8d43d37d0eda08e6ad06e1a1bc/img/python-original.svg"
    },
    {
      id: "5",
      title: "Java Digitalers",
      description: "Aplicación desarrollada en Java que simula el proceso de validación de ingreso a la plataforma de Online Banking de una entidad bancaria.",
      stack: "Java · Spring · HTML · CSS · JS",
      link: "https://github.com/Ludmimar/Java-Digitalers/tree/main/Mod03-Proyecto%20Integrador%20Etapa%201%20-%2002",
      demo: "https://fintech-banco.netlify.app",
      image: "https://raw.githubusercontent.com/Ludmimar/Portfolio_Martos_Ldmila/8756fdf4509c5b8d43d37d0eda08e6ad06e1a1bc/img/java-original.svg"
    },
    {
      id: "6",
      title: "Codo a codo",
      description: "Landing page interactiva que permite explorar diferentes cursos de formación en línea.",
      stack: "HTML · CSS · JS",
      link: "https://github.com/Ludmimar/CodoaCodo-Grupo01",
      demo: "https://ludmimar.github.io/CodoaCodo-Grupo01",
      image: "https://github.com/Ludmimar/Portfolio_Martos_Ldmila/blob/main/img/salusjpg.jpg?raw=true"
    },
    {
      id: "7",
      title: "Desafio-Java",
      description: "Aplicación en Java que consume la API pública Gutendex para explorar el catálogo de libros de Project Gutenberg.",
      stack: "JAVA",
      link: "https://github.com/Ludmimar/Desafio-Java-trabajando-con-lambdas-streams-y-Spring-Framework",
      image: "https://raw.githubusercontent.com/Ludmimar/Portfolio_Martos_Ldmila/8756fdf4509c5b8d43d37d0eda08e6ad06e1a1bc/img/java-original.svg"
    },
    {
      id: "8",
      title: "Encriptador de texto",
      description: "Aplicación web en JavaScript que encripta y desencripta textos usando reglas de sustitución, con posibilidad de copiar el resultado al portapapeles.",
      stack: "HTML · CSS · JS",
      link: "https://github.com/Ludmimar/Encriptador-de-Texto/tree/main?tab=readme-ov-file",
      demo: "https://ludmimar.github.io/Encriptador-de-Texto/",
      image: "https://github.com/Ludmimar/Portfolio_Martos_Ldmila/blob/main/img/encriptador.jpg?raw=true"
    },
    {
      id: "9",
      title: "API REST Portfolio Personal",
      description: "El proyecto implementa un sistema CRUD completo para administrar: Personas, Educación, Experiencia.",
      stack: "Java · SpringBoot · MySQL",
      link: "https://github.com/Ludmimar/Argentina-Programa-MyPortfolio-Backend",
      image: "https://raw.githubusercontent.com/Ludmimar/Portfolio_Martos_Ldmila/8756fdf4509c5b8d43d37d0eda08e6ad06e1a1bc/img/java-original.svg"
    }
  ];

  return (
    <section id="proyectos" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 reveal flex items-center gap-3">
          <LaptopIcon className="text-purple-600" size={32} />
          Proyectos
        </h2>
        
        <p className=".text-dark text-lg mb-12 reveal font-semibold">
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
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default Proyectos;