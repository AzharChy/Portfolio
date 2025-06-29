import React from 'react';

const About = () => {
  return (
    <div className="hero bg-base-200 mt-10">
      {/* <h2 className="text-4xl font-bold text-[#252525] mb-4">About Me</h2> */}
      <div className="hero-content flex-col items-center text-center gap-10 px-6 py-12 bg-[#252525] rounded-lg max-w-4xl">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white leading-relaxed mb-4">
            I’m <strong>Mohammed Azhar Mahmud Chowdhury</strong> from Sylhet, Bangladesh. I pursued web development alongside my graduation through the Programming Hero platform. I enjoy building modern, scalable websites using the latest technologies. After mastering the <strong>MERN stack</strong>, I’m currently diving into <strong>Next.js</strong> and advanced backend technologies.
          </p>
          <p className="text-white leading-relaxed mb-4">
            Outside of coding, I’m passionate about reading and playing outdoor sports like cricket, football, basketball, and volleyball. I’ve also had the honor of leading my university’s cricket team and participating in professional cricket leagues.
          </p>
          <p className="text-white leading-relaxed">
            My dream is to become a modern web developer, skilled in cutting-edge technologies and AI, using my expertise to create smart, high-performing websites that deliver the best user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
