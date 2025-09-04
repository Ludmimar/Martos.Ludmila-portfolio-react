import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-8 mt-16">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-lg">
            © 2025 · Portfolio de <strong>Ludmila Martos</strong>
          </p>
          
          <p className="flex items-center gap-2 text-pink-100">
            Hecho con <Heart className="text-red-200" size={16} fill="currentColor" /> y <Coffee className="text-amber-200" size={16} />
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Ludmimar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/ludmimar89/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ludmilamartos@gmail.com"
              className="hover:text-pink-200 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;