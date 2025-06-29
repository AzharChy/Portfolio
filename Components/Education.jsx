import React from 'react';

const Education = () => {
  return (
    <div className="hero  bg-base-200 px-4 py-12 ">
      <div className="hero-content flex flex-col items-center text-center gap-8 bg-[#252525] rounded-lg p-10 max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-white">Education</h2>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* B.Sc. Card */}
          <div className="bg-[#252525] rounded-lg shadow-lg border border-base-300 p-8 flex-1">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Shahjalal University of Science & Technology
            </h3>
            <p className="text-white text-lg mb-1">B.Sc. in Mathematics</p>
            <p className="text-white text-base opacity-80">Graduated in 2024</p>
          </div>

          {/* M.Sc. Card */}
          <div className="bg-[#252525] rounded-lg shadow-lg border border-base-300 p-8 flex-1">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Shahjalal University of Science & Technology
            </h3>
            <p className="text-white text-lg mb-1">M.Sc. in Mathematics</p>
            <p className="text-white text-base opacity-80">Currently Studying</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
