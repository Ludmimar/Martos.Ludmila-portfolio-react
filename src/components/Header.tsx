import { useState } from "react";
import { Menu, X, Download, Github, Linkedin } from "lucide-react";
import profileImg from "../assets/profile.png";
import cherryBlossomIcon from "../assets/cherry-blossom.png";
import wingedStarIcon from "../assets/estrella-alada1.png";
import yarnBallIcon from "../assets/yarn.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "cv-Martos.Ludmila.pdf"; // ruta dentro de /public
  link.download = "CV_Ludmila.pdf"; // nombre del archivo al descargar
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <header className="gradient-sakura text-white relative z-10 overflow-hidden">
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4 relative z-20">
          <div className="logo flex items-center gap-2 font-bold text-xl">
            <img 
              src={cherryBlossomIcon} 
              alt="Cherry Blossom" 
              className="w-8 h-8" 
            />
            Ludmila Martos
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 font-semibold">
            <li><a href="#historia" className="hover:text-pink-200 transition-colors">Historia</a></li>
            <li><a href="#skills" className="hover:text-pink-200 transition-colors">Superpoderes</a></li>
            <li><a href="#proyectos" className="hover:text-pink-200 transition-colors">Proyectos</a></li>
            <li><a href="#futuro" className="hover:text-pink-200 transition-colors">Futuro</a></li>
            <li><a href="#contacto" className="hover:text-pink-200 transition-colors">Contacto</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 z-30 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 right-0 bg-white text-gray-800 rounded-lg shadow-lg p-4 md:hidden z-20">
              <ul className="flex flex-col gap-3">
                <li><a href="#historia" onClick={toggleMenu} className="block hover:text-pink-600">Historia</a></li>
                <li><a href="#skills" onClick={toggleMenu} className="block hover:text-pink-600">Superpoderes</a></li>
                <li><a href="#proyectos" onClick={toggleMenu} className="block hover:text-pink-600">Proyectos</a></li>
                <li><a href="#futuro" onClick={toggleMenu} className="block hover:text-pink-600">Futuro</a></li>
                <li><a href="#contacto" onClick={toggleMenu} className="block hover:text-pink-600">Contacto</a></li>
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="text-center py-12 relative z-10">
          <img
            src={profileImg}
            alt="Ludmila Martos"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-6"
            style={{ animation: "pop-in 0.9s 0.4s forwards", opacity: 0, transform: "scale(0.9)" }}
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto">
            De conectar con personas a conectar con tecnología
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95 leading-relaxed">
            Vengo del mundo de <strong>ventas y atención al cliente</strong>, donde aprendí a escuchar y adaptarme rápido.
            Hoy vuelvo a mi primer amor: la <em>programación</em>. Me inspiran el <strong>anime</strong>
            <img src={wingedStarIcon} alt="Winged Star" className="inline w-8 h-8 mx-1" />, 
            las <em>flores de cerezo</em> <img src={cherryBlossomIcon} alt="Cherry Blossom" className="inline w-8 h-8 mx-1" /> 
            y el <strong>tejido a crochet</strong>
            <img src={yarnBallIcon} alt="Yarn Ball" className="inline w-8 h-8 mx-1" />, 
            y quiero que mi código también refleje esa pasión y dedicación.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleDownloadCV}
              className="btn-download px-6 py-3 rounded-full flex items-center gap-2 font-bold"
            >
              <Download size={20} />
              Descargar CV
            </button>
            <a 
              href="https://github.com/Ludmimar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-sakura px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ludmimar89" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-sakura px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;