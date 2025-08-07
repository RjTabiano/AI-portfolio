import React from "react";
import ReactDOM from "react-dom";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-2" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="mb-4 w-full h-48 object-cover rounded"
        />
        <p>{project.description}</p>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
