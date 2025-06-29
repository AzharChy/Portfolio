import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Name + Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 Mohammed Azhar Mahmud Chowdhury. All rights reserved.</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/md-azhar-mahmud-chowdhury-aa867232a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/AzharChy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/+8801731875066"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
