import { 
  Zap, 
  Users, 
  Code
} from "lucide-react";
import { softSkills, techSkills } from "../data/skills";

const Skills = () => {

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8 flex items-center gap-3">
          <Zap className="text-yellow-500" size={32} />
          Mis Superpoderes
        </h2>
        
        <p className="text-dark text-lg mb-12 font-semibold">
          Mis <em>soft skills</em> de ventas + mis <em>tech skills</em> en IT
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div className="card-sakura p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold">Soft Skills (Ventas)</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-full border border-blue-100">
                  <div className="text-blue-600">{skill.icon}</div>
                  <span className="font-semibold text-blue-800">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div className="card-sakura p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold">Tech Skills (IT)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-purple-50 rounded-full border border-purple-100 text-center justify-center">
                  <span className="font-semibold text-purple-800 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;