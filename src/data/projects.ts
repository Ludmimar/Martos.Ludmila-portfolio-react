export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string;
  link: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
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
    link: "https://github.com/Ludmimar/Digitalers-Java-Developer-Telecom",
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

