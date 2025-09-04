import { Route, Code, Zap, Sprout, Mail } from "lucide-react";

const StickyNav = () => {
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-50 to-pink-100 backdrop-blur-sm border-b border-pink-200 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-center gap-3 py-3">
          <a href="#historia" className="chip-sakura">
            <Route size={16} />
            Mi historia
          </a>
          <a href="#skills" className="chip-sakura">
            <Zap size={16} />
            Superpoderes
          </a>
          <a href="#proyectos" className="chip-sakura">
            <Code size={16} />
            Proyectos
          </a>
          <a href="#futuro" className="chip-sakura">
            <Sprout size={16} />
            Futuro
          </a>
          <a href="#contacto" className="chip-sakura">
            <Mail size={16} />
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;