import { useState } from 'react';
import { Project } from './Data';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderImage = () => {
    if (project.imageUrl) {
      return (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          onClick={handleCardClick}
        />
      );
    }
    return (
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-4xl font-bold opacity-80">
          {project.title.charAt(0)}
        </div>
      </div>
    );
  };

  return (
    <>
     
      {renderImage()}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={project}
      />
    
    </>
  );
} 