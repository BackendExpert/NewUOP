import React, { useState } from 'react';

const UniversityOrganization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen px-4 xl:py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-5xl p-8 mx-auto bg-white shadow-md rounded-xl">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#800000] mb-6 text-center font-serif">
          University Organization
        </h1>

        {/* Introductory Text */}
        <p className="mb-6 text-lg text-justify text-gray-700">
          The University of Peradeniya operates under the provisions of the <strong>Universities Act No. 16 of 1978</strong> and the <strong>Universities (Amendment) Act No. 7 of 1985</strong>. (<a href="http://www.ugc.ac.lk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">ugc.ac.lk</a>)
        </p>

        {/* Structure Overview */}
        <div className="mb-8 space-y-4 text-justify text-gray-700">
          <p>
            As per the Universities Act, each university has a Chancellor, officers and authorities that make the plans and decisions and monitor the implementation of such decisions in the overall management of the University. The Chancellor is the ceremonial head of the University and is appointed by H.E. the President of Sri Lanka for a period of five years.
          </p>
          <p>
            The Authorities of the University of Peradeniya are structured in a two-tier format comprising the Council and the Senate. The <strong>Council</strong> is the chief executive and governing body, while the <strong>Senate</strong> is the academic authority overseeing teaching, research, and examinations.
          </p>
          <p>
            Faculty Boards operate under the Senate, each regulating academic matters within its faculty. The Council includes the Vice-Chancellor (Chair), Deputy Vice-Chancellor, Deans, elected Senate reps, and thirteen distinguished members appointed by the UGC.
          </p>
        </div>

        {/* Image: Organizational Chart */}
        <div className="mb-8">
          <img
            src="../src/assets/Organization.jpg"
            alt="University Organizational Structure"
            className="w-full rounded-md shadow-lg cursor-zoom-in transition-transform hover:scale-[1.02]"
            onClick={handleImageClick}
          />
          <p className="mt-2 text-sm text-center text-gray-500">
            Click image to view full-size
          </p>
        </div>

        {/* Additional Info */}
        <div className="text-sm text-center text-gray-500">
          Last updated: May 2025 | For detailed statutes, visit the{' '}
          <a
            href="http://www.ugc.ac.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            University Grants Commission
          </a>
          .
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleModalClose}
        >
          <img
            src="../src/assets/Organization.jpg"
            alt="Full-size University Organization Structure"
            className="w-full max-w-4xl rounded shadow-lg cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default UniversityOrganization;
