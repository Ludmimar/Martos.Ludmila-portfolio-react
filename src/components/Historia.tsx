import { Briefcase, GraduationCap, LaptopIcon, Route } from "lucide-react";

const Historia = () => {
  return (
    <section id="historia" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 reveal flex items-center gap-3">
          <Route className="text-primary" size={32} />
          Mi Historia
        </h2>
        
        <p className=".text-dark text-lg mb-12 reveal font-semibold">
          <Briefcase className="inline mr-2" size={20} />
          Ventas →
          <GraduationCap className="inline mx-2" size={20} />
          Formación →
          <LaptopIcon className="inline mx-2" size={20} />
          Desarrollo
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-200 to-pink-400 rounded-full hidden md:block" />
          
          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex gap-6 items-start reveal">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center border-2 border-white shadow-md relative z-10">
                <Briefcase className="text-blue-600" size={20} />
              </div>
              <div className="card-sakura p-6 flex-1">
                <h3 className="text-xl font-bold mb-3">Ventas & Atención al Cliente</h3>
                <p className=".text-dark leading-relaxed">
                  Durante años trabajé en call centers en <strong>atención, ventas y retención</strong>. Siempre recibí buenas devoluciones por mi 
                  <em> adaptación rápida</em> y capacidad de <strong>aprender al instante</strong> cada nueva tarea.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex gap-6 items-start reveal">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center border-2 border-white shadow-md relative z-10">
                <GraduationCap className="text-green-600" size={20} />
              </div>
              <div className="card-sakura p-6 flex-1">
                <h3 className="text-xl font-bold mb-3">Formación & Transición</h3>
                <p className=".text-dark leading-relaxed">
                  Estudié <strong>Tecnicatura en Programación en UTN</strong> y, aunque la vida me alejó un tiempo, hace unos años retomé con cursos
                  becados y proyectos autodidactas. Descubrí que programar es como tejer: paciencia, lógica y creatividad.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex gap-6 items-start reveal">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center border-2 border-white shadow-md relative z-10">
                <LaptopIcon className="text-purple-600" size={20} />
              </div>
              <div className="card-sakura p-6 flex-1">
                <h3 className="text-xl font-bold mb-3">Hoy: Desarrollo Web</h3>
                <p className=".text-dark leading-relaxed">
                  Construyo proyectos web y aplicaciones con <strong>HTML, CSS, JS y Java</strong>, buscando siempre que el resultado
                  sea tan armonioso como un buen tejido y tan mágico como un capítulo de <em>Anime</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;