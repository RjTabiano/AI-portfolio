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
      <div className="bg-[#111111] p-6 rounded-xl shadow-lg w-full max-w-[500px] md:max-w-6xl relative mt-40 md:mt-0 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white/70 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl text-center md:text-3xl font-bold mb-8 tracking-tight bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent bg-clip-text">
          {project.title}
        </h2>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-8 w-full mb-8">
          {/* Image */}
          <div className="max-w-[350px] md:max-w-none mx-auto md:mx-0 h-[500px]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-fit rounded"
            />
          </div>

          {/* Description */}
          <p className="text-base text-white/90 w-full h-[400px] overflow-y-auto pr-2">
            {project.description}
          </p>
        </div>

        {/* Album section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Project Album</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Example thumbnails */}
            {/* {project.album?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Album ${idx}`}
                className="w-full h-32 object-cover rounded"
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>

  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
