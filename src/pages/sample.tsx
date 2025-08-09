import { useState } from 'react';
import ToolRenderer from '../components/tools/ToolRenderer';

const TOOL_OPTIONS = [
  'getProjects',
  'getPresentation',
  'getResume',
  'getContact',
  'getSkills',
  'getSports',
  'getCrazy',
  'getInternship',
];

export default function SampleToolPage() {
  const [selectedTool, setSelectedTool] = useState('getProjects');

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-8 px-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Tool Visual Test Page</h1>
      <div className="mb-6">
        <label htmlFor="tool-select" className="mr-2 text-gray-700 dark:text-gray-200 font-medium">Select Tool:</label>
        <select
          id="tool-select"
          value={selectedTool}
          onChange={e => setSelectedTool(e.target.value)}
          className="rounded border-gray-300 dark:bg-gray-800 dark:text-white px-3 py-2"
        >
          {TOOL_OPTIONS.map(tool => (
            <option key={tool} value={tool}>{tool}</option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-3xl">
        <ToolRenderer toolInvocations={selectedTool} />
      </div>
    </div>
  );
}
