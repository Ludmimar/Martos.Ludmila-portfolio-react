import { Sprout } from "lucide-react";

const Futuro = () => {
  return (
    <section id="futuro" className="py-16 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 reveal flex items-center gap-3">
          <Sprout className="text-green-600" size={32} />
          Mi Futuro
        </h2>
        
        <div className="card-sakura p-8 reveal">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
              <Sprout className="text-green-600" size={32} />
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed .text-dark">
                Quiero crecer en un equipo de <strong>desarrollo</strong>, aportando mi <em>pasión</em>,
                mi capacidad de <em>aprender rápido</em> y mi <em>creatividad</em>.
                Sueño con aportar en proyectos que hagan la vida de las personas más fácil y linda,
                como una flor de cerezo en primavera 🌸.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Futuro;