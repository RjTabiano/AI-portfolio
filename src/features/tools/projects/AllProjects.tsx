import { projectsData } from './Data';
import Carousel from './Carousel';

export default function AllProjects() {
  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Here are some of the projects I've worked on
        </p>
      </div>

      <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
        <Carousel projects={projectsData} />
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          Click on the navigation arrows or dots to browse through my projects. 
          Each project includes links to the source code and live demos where available.
        </p>
      </div>
    </div>
  );
}
