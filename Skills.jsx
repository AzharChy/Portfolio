import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiJsonwebtokens, SiDaisyui } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-4 py-12">
      <div className="hero-content flex-col items-center text-center gap-10 bg-[#252525] rounded-lg p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Frontend Card */}
          <div className="card bg-[#252525] shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title text-2xl text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-3 mt-4 text-white text-lg">
                <span className="badge badge-outline"><FaHtml5 /> HTML5</span>
                <span className="badge badge-outline"><FaCss3Alt /> CSS3</span>
                <span className="badge badge-outline"><FaReact /> React</span>
                <span className="badge badge-outline"><SiFirebase /> Firebase</span>
                <span className="badge badge-outline"><SiTailwindcss /> Tailwind</span>
                <span className="badge badge-outline"><SiDaisyui /> DaisyUI</span>
                <span className="badge badge-outline"><FaBootstrap /> Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div className="card bg-[#252525] shadow-lg border border-base-300">
            <div className="card-body">
              <h3 className="card-title text-2xl text-primary">Backend</h3>
              <div className="flex flex-wrap gap-3 mt-4 text-white text-lg">
                <span className="badge badge-outline"><FaNodeJs /> Node.js</span>
                <span className="badge badge-outline"><SiExpress /> Express.js</span>
                <span className="badge badge-outline"><SiMongodb /> MongoDB</span>
                <span className="badge badge-outline"><SiJsonwebtokens /> JWT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
