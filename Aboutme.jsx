import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-[#e9f2ff]" id="about">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-slate-800 text-center mb-10">
          About Me
        </h2>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 leading-relaxed text-slate-700 text-lg space-y-6">
          <p>
            I’m <strong className="text-slate-900">Mohammed Azhar Mahmud Chowdhury</strong> from Sylhet, Bangladesh. I’m a Math graduate turned Full-Stack Developer with a love for solving real-world problems through code. I enjoy building clean, user-friendly interfaces and powerful APIs. My current stack includes React, Node.js, and MongoDB. I’m currently learning <strong>Next.js</strong> and <strong>SQL</strong> to level up my backend and full-stack capabilities.
          </p>

          <p>
            Outside of coding, I’m passionate about reading books and playing outdoor sports like cricket, football, basketball, and volleyball. I’ve had the honor of leading my university’s cricket team and participating in professional cricket leagues.
          </p>

          <p>
            My dream is to become a modern web developer, skilled in cutting-edge technologies and AI, using my expertise to create smart, high-performing websites that deliver the best user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
