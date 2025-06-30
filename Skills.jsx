import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiJsonwebtokens, SiDaisyui,
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className="py-20 bg-[#e9f2ff]" id="skills">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-12">
          My Skills
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Frontend Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaHtml5 className="text-orange-600" />} label="HTML5" />
              <SkillBadge icon={<FaCss3Alt className="text-blue-600" />} label="CSS3" />
              <SkillBadge icon={<FaReact className="text-cyan-500" />} label="React" />
              <SkillBadge icon={<SiTailwindcss className="text-sky-400" />} label="TailwindCSS" />
              <SkillBadge icon={<SiDaisyui className="text-purple-400" />} label="DaisyUI" />
              <SkillBadge icon={<SiFirebase className="text-yellow-500" />} label="Firebase" />
              <SkillBadge icon={<FaBootstrap className="text-indigo-600" />} label="Bootstrap" />
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              <SkillBadge icon={<FaNodeJs className="text-green-600" />} label="Node.js" />
              <SkillBadge icon={<SiExpress className="text-gray-600" />} label="Express.js" />
              <SkillBadge icon={<SiMongodb className="text-green-700" />} label="MongoDB" />
              <SkillBadge icon={<SiJsonwebtokens className="text-red-500" />} label="JWT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable badge component
const SkillBadge = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full shadow-sm text-sm font-medium hover:scale-105 transition">
    {icon}
    {label}
  </span>
);

export default Skills;
