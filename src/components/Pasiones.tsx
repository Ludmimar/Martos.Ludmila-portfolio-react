import { Palette } from "lucide-react";
import wingedStarIcon from "../assets/estrella-alada1.png";
import cherryBlossomIcon from "../assets/cherry-blossom.png";
import yarnBallIcon from "../assets/yarn.png";

const Pasiones = () => {
  const passions = [
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
      icon: yarnBallIcon,
      title: "Crochet",
      description: "Tejer con paciencia y creatividad, igual que programar."
    }
  ];

  return (
    <section id="pasiones" className="py-16 bg-gradient-to-b from-white to-pink-50/30 reveal">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
          <Palette className="text-pink-600" size={32} />
          Mis pasiones
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {passions.map((passion, index) => (
            <div key={index} className="card-sakura p-6 text-center group">
              <img 
                src={passion.icon} 
                alt={passion.title}
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
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

export default Pasiones;