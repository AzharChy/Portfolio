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
    <button className="btn bg-white text-black">
      Resume
    </button>
  </div>
</div>
    );
};

export default Navbar;