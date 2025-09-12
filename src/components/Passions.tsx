import { Palette } from "lucide-react";
import { passions } from "../data/skills";
import OptimizedImage from "./OptimizedImage";

const Passions = () => {

  return (
    <section id="pasiones" className="py-16 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
          <Palette className="text-pink-600" size={32} />
          Mis pasiones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {passions.map((passion, index) => (
            <div key={index} className="card-sakura p-6 text-center group">
              <OptimizedImage 
                src={passion.icon} 
                alt={`Icono de ${passion.title}`}
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-xl font-bold mb-3 text-foreground">{passion.title}</h3>
              <p className=".text-dark leading-relaxed">{passion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passions;