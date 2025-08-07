import { skills } from "../../utility/constants";
import React from "react";
import {
  FaCode,
  FaServer,
  FaPaintbrush,
  FaBrain,
  FaRobot,
} from "react-icons/fa6";

const SkillSection = ({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) => (
  <div className="mb-8">
    <h3 className="text-lg text-white font-semibold flex items-center gap-2 mb-4">
      {icon} {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-[#333333] text-white text-sm px-3 py-1 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="rounded-2xl p-8 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl text-white font-bold mb-10">Skills & Expertise</h2>
      <SkillSection title="Frontend Development" icon={<FaCode />} items={skills.frontend} />
      <SkillSection title="Backend & Systems" icon={<FaServer />} items={skills.backend} />
      <SkillSection title="Design & Creative Tools" icon={<FaPaintbrush />} items={skills.design} />
      <SkillSection title="Soft Skills" icon={<FaBrain />} items={skills.softSkills} />
      <SkillSection title="AI & Fullstack Engineering" icon={<FaRobot />} items={skills.ai} />
    </section>
  );
}
