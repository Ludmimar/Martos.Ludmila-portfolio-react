import { 
  Zap, 
  Users, 
  MessageCircle, 
  Lightbulb, 
  Handshake, 
  Target, 
  UsersRound,
  Code,
  Ear
} from "lucide-react";
import type React from "react";
// Using direct paths from public folder
const wingedStarIcon = "/estrella-alada1.png";
const cherryBlossomIcon = "/cherry-blossom.png";
const yarnIcon = "/yarn.png";

export interface SoftSkill {
  icon: React.ReactNode;
  label: string;
}

export interface Passion {
  icon: string;
  title: string;
  description: string;
}

export const softSkills: SoftSkill[] = [
  { icon: <Ear size={16} />, label: "Escucha activa" },
  { icon: <MessageCircle size={16} />, label: "Comunicación clara" },
  { icon: <Lightbulb size={16} />, label: "Resolución de objeciones" },
  { icon: <Handshake size={16} />, label: "Empatía & servicio" },
  { icon: <Target size={16} />, label: "Orientación a resultados" },
  { icon: <UsersRound size={16} />, label: "Trabajo en equipo" }
];

export const techSkills: string[] = [
  "HTML", "CSS", "JavaScript", "Java / POO", "Angular", "Node.js", 
  "SCSS", "Git", "MySQL", "Python", "SpringBoot", "Express", 
  "Sequelize", "Figma"
];

export const passions: Passion[] = [
  {
    icon: wingedStarIcon,
    title: "Anime",
    description: "Historias que me inspiran a nunca rendirme y buscar siempre mejorar."
  },
  {
    icon: cherryBlossomIcon,
    title: "Flores de cerezo",
    description: "Me recuerdan que cada instante cuenta, y que en lo fugaz habita la magia."
  },
  {
    icon: yarnIcon,
    title: "Crochet",
    description: "Tejer con paciencia y creatividad, igual que programar."
  }
];
