import React from 'react';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import About from './Aboutme';
import Skills from './Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import ContactMe from './Components/Contact';
import Footer from './Components/Footer';

const Home = () => {
    return (
        <div className='bg-[#F8F7F2]'>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
              
            </div>
            <div>
                <Profile></Profile>
            </div>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;