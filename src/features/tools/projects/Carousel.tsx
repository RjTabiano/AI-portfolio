import { Project } from './Data';
import ProjectCard from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-cards';
import '../../../index.css';


interface CarouselProps {
  projects: Project[];
}

export default function Carousel({ projects }: CarouselProps) {
  return (
    <div className="relative w-full h-full">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-full"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="w-full h-full flex items-center justify-center">
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>      
  );
}
