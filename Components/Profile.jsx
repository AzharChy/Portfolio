import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import profile from '../src/assets/profile.jpg';

const Profile = () => {
  return (
    <div className="hero bg-base-200 px-4 sm:px-6 md:px-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-10 py-12 bg-[#252525] rounded-lg w-full max-w-7xl mx-auto">
        
        {/* Text Content */}
        <div className="text-center lg:text-left w-full lg:w-1/2 p-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frontend React Developer
          </h1>
          <p className="mb-6 text-white leading-relaxed text-base sm:text-lg">
            Hi, I’m <strong>Mohammed Azhar Mahmud Chowdhury</strong>, a passionate Frontend React Developer. I specialize in building modern, responsive web applications and am actively seeking entry-level opportunities to grow and contribute in the tech industry.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 text-2xl mb-6">
            <a
              href="https://www.linkedin.com/in/md-azhar-mahmud-chowdhury-aa867232a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/+8801731875066"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/AzharChy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* Resume Button with Drive Link */}
          <a
            href="https://drive.google.com/file/d/1faP5WF_glWbYu2FvZNTwlsnwO_N_UhOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
