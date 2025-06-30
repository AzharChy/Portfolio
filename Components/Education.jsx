import React from 'react';

const Education = () => {
  return (
    <section className="py-20 bg-[#e9f2ff]" id="education">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-800 mb-12">Education</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* B.Sc. Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex-1">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
              Shahjalal University of Science & Technology
            </h3>
            <p className="text-slate-700 text-lg mb-1">B.Sc. in Mathematics</p>
            <p className="text-slate-500 text-base">Graduated in 2024</p>
          </div>

          {/* M.Sc. Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex-1">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
              Shahjalal University of Science & Technology
            </h3>
            <p className="text-slate-700 text-lg mb-1">M.Sc. in Mathematics</p>
            <p className="text-slate-500 text-base">Currently Studying</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
