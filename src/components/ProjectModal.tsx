import { X, Github, ExternalLink } from "lucide-react";
import { Project } from "./Portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/65 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-4">
          {/* Imagen acotada para que la descripción se vea */}
          <div className="aspect-video max-h-60 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Descripción */}
          <p className="text-dark text-lg leading-relaxed">{project.description}</p>

          {/* Stack / Tecnologías */}
          <p className="text-dark font-medium">
            <strong>Tecnologías:</strong> {project.stack}
          </p>

          {/* Botones */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sakura px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
            >
              <Github size={18} />
              Ver en GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-download px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
              >
                <ExternalLink size={18} />
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
