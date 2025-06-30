import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left: Name + Copyright */}
        <div className="text-center md:text-left text-sm">
          &copy; 2025 Mohammed Azhar Mahmud Chowdhury. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/md-azhar-mahmud-chowdhury-aa867232a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AzharChy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+8801731875066"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
