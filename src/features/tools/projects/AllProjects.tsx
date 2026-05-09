import { projectsData } from './Data';
import BentoGrid from './BentoGrid';

export default function AllProjects() {
  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Here are some of the projects I've worked on
        </p>
      </div>

      <BentoGrid projects={projectsData} />
    </div>
  );
}
