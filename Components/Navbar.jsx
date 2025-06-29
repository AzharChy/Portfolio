import React from 'react';
import ThemeToggle from './Themetoggle';
import logo from '../src/assets/llogo.svg'

const Navbar = () => {
    return (
      <div className="navbar shadow-sm bg-[#252525] max-w-7xl m-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl">
        <img src={logo} alt='logo' className='w-16 h-16 bg-white'></img>
    </a>
  </div>
 <div className='mr-5'>
     <ThemeToggle></ThemeToggle>
 </div>
  <div className="flex-none">
   <a
            href="https://drive.google.com/file/d/1faP5WF_glWbYu2FvZNTwlsnwO_N_UhOw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
  </div>
</div>
    );
};

export default Navbar;