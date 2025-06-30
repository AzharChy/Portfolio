import React from 'react';
import ThemeToggle from './Themetoggle';
import logo from '../src/assets/llogo.svg';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">

        {/* Logo */}
        <div className="flex-1">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition"
          >
            <img src={logo} alt="logo" className="w-12 h-12 rounded-xl" />
            Azhar.dev
          </button>
        </div>

        {/* Resume & Theme */}
        <div className="flex items-center gap-4">
       

          <a
            href="https://drive.google.com/file/d/1faP5WF_glWbYu2FvZNTwlsnwO_N_UhOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
