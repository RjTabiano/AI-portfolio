import AllProjects from '../../features/tools/projects/AllProjects';

interface ToolRendererProps {
  toolInvocations: string;
}

export default function ToolRenderer({ toolInvocations }: ToolRendererProps) {
  if (!toolInvocations) return null;

  // Normalize tool name if needed
  const toolName = toolInvocations;

  switch (toolName) {
    case 'getProjects':
    case 'projects':
      return (
        <div className="w-full overflow-hidden rounded-lg">
          <AllProjects />
        </div>
      );
    case 'getPresentation':
      return <div className="w-full overflow-hidden rounded-lg"></div>;
    case 'getResume':
      return <div className="w-full rounded-lg"></div>;
    case 'getContact':
      return <div className="w-full rounded-lg"></div>;
    case 'getSkills':
      return <div className="w-full rounded-lg"></div>;
    case 'getSports':
      return <div className="w-full rounded-lg"></div>;
    case 'getCrazy':
      return <div className="w-full rounded-lg"></div>;
    case 'getInternship':
      return <div className="w-full rounded-lg"></div>;
    default:
      return (
        <div className="bg-secondary/10 w-full rounded-lg p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium">{toolName}</h3>
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
              Tool Result
            </span>
          </div>
          <div className="mt-2">
            <p>Tool executed: {toolName}</p>
          </div>
        </div>
      );
  }
}