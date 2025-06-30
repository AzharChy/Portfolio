import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import profile from '../src/assets/profile.jpg';

const Profile = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-20 bg-[#e9f2ff]">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">

        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 leading-tight">
            Frontend React Developer
          </h1>
          <p className="mb-6 text-slate-600 text-lg leading-relaxed">
            Hi, I’m <strong className="text-slate-800">Mohammed Azhar Mahmud Chowdhury</strong>, a passionate React developer. I build clean, responsive web apps and am actively seeking entry-level opportunities to contribute and grow in the tech industry.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 text-2xl mb-6 text-slate-600">
            <a
              href="https://www.linkedin.com/in/md-azhar-mahmud-chowdhury-aa867232a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+8801731875066"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/AzharChy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1faP5WF_glWbYu2FvZNTwlsnwO_N_UhOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition"
          >
            View Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
