import { useState } from 'react';
import { Project } from './Data';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink } from 'lucide-react';

interface BentoGridProps {
  projects: Project[];
}

const LAYOUT = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
];

export default function BentoGrid({ projects }: BentoGridProps) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full md:[grid-auto-rows:200px]">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`${LAYOUT[i] ?? ''} relative overflow-hidden rounded-2xl cursor-pointer group h-48 md:h-auto`}
            onClick={() => setSelected(project)}
          >
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
                <span className="text-white text-5xl font-bold">{project.title.charAt(0)}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-4">
              <p className="text-white font-semibold text-sm md:text-base leading-snug mb-2">
                {project.title}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-colors"
                >
                  <Github size={14} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        project={selected}
      />
    </>
  );
}
