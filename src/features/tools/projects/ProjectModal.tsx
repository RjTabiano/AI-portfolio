import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Github } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#111111] p-6 rounded-xl shadow-lg w-full max-w-[500px] md:max-w-6xl relative mt-40 md:mt-0 max-h-[80vh] overflow-y-auto scrollbar-dark">
        <button
          className="absolute top-2 right-2 text-white/70 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl text-center md:text-3xl font-bold mb-8 tracking-tight bg-gradient-to-r from-indigo-400 to-blue-300 text-transparent bg-clip-text">
          {project.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-8 w-full mb-8">
          <div className="max-w-[350px] md:max-w-none mx-auto md:mx-0 h-[500px]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-fit rounded"
            />
          </div>

          <div className="flex flex-col gap-4 w-full h-[500px] overflow-y-auto pr-2 scrollbar-dark">
            <div className="text-base text-white/80">
              <h4 className="text-lg text-white/90 font-semibold mb-2">Description</h4>
              <p>{project.description.intro}</p>
              <ul className="list-disc list-inside space-y-3 ml-4 my-5">
                {project.description.features.map((feature: any, i: any) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p>{project.description.outro}</p>
            </div>

            {Array.isArray(project.technologies) && project.technologies.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-white/90 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-xs text-white bg-[#1e1e1e] border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-700 text-sm text-white bg-[#141414] hover:bg-[#1d1d1d] transition-colors"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-700 text-sm text-white bg-[#141414] hover:bg-[#1d1d1d] transition-colors"
                  >
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Project Album</h3>
          {Array.isArray(project.album) && project.album.length > 0 ? (
            <div className="">
              <Swiper
                style={{
                  // @ts-ignore - CSS custom properties
                  '--swiper-navigation-color': '#e5e7eb',
                  '--swiper-pagination-color': '#e5e7eb',
                } as React.CSSProperties}
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="album-swiper rounded-lg"
              >
                {project.album.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`Album ${idx}`} className="w-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="album-thumbs mt-3"
                breakpoints={{
                  768: { slidesPerView: 6 },
                  1024: { slidesPerView: 8 },
                }}
              >
                {project.album.map((img: string, idx: number) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`Thumb ${idx}`} className="w-full h-20 object-cover rounded-md" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="text-zinc-400 text-sm">No album images available.</div>
          )}
        </div>
      </div>
    </div>

  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
