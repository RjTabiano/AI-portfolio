import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Github, ExternalLink, X } from 'lucide-react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/thumbs';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  if (!isOpen || !project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-52 md:h-64 flex-shrink-0">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-blue-500" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

          <div className="absolute bottom-4 left-5 right-14">
            <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
              {project.title}
            </h2>
          </div>

          <button
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:bg-black/60 transition-colors"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto scrollbar-dark flex-1">
          <div className="p-5 md:p-7 space-y-6">

            {/* Description */}
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Description</p>
              <p className="text-sm text-white/80 leading-relaxed">{project.description.intro}</p>
              {project.description.features?.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {project.description.features.map((feature: string, i: number) => (
                    <li key={i} className="flex gap-2.5 text-sm text-white/70">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {project.description.outro && (
                <p className="mt-3 text-sm text-white/60 leading-relaxed italic">
                  {project.description.outro}
                </p>
              )}
            </div>

            {/* Technologies */}
            {Array.isArray(project.technologies) && project.technologies.length > 0 && (
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs text-white bg-zinc-800 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 text-sm text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm text-white transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            )}

            {/* Album */}
            {Array.isArray(project.album) && project.album.length > 0 && (
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Album</p>
                <Swiper
                  style={{
                    // @ts-ignore
                    '--swiper-navigation-color': '#e5e7eb',
                    '--swiper-pagination-color': '#e5e7eb',
                  } as React.CSSProperties}
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="album-swiper rounded-xl"
                >
                  {project.album.map((img: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <img src={img} alt={`Album ${idx}`} className="w-full object-cover rounded-xl" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={4}
                  freeMode
                  watchSlidesProgress
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="album-thumbs mt-3"
                  breakpoints={{
                    768: { slidesPerView: 6 },
                  }}
                >
                  {project.album.map((img: string, idx: number) => (
                    <SwiperSlide key={idx}>
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-16 object-cover rounded-lg" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
