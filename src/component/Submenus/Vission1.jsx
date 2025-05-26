import React, { useState } from 'react';

const BookPagedLayout = () => {
  const [page, setPage] = useState(0);

  const pages = [
    {
      title: 'Vision',
      description: (
        <>
          <p className="mb-4 text-justify">
            “To provide a uniquely transformative experience for its students, staff and partners, whilst serving the public through producing and implementing innovative research and outreach programmes that are anchored in its founding values and principles” <br></br>
            <br></br> In order to achieve this Vision, The University of Peradeniya strives to be,
          </p>
          <ul className="pl-5 space-y-2 text-justify list-disc">
            <li>Unparalleled in providing a range of innovative and appropriate learning and teaching programmes, including professional certification and outreach initiatives, that facilitate the transformation of talented students into thoughtful, and competent graduates who are socially-responsible, gender-sensitive, environment-conscious and altruistic.</li>
            <li>Noteworthy for its service to the general public, the nation, region and wider global community as an outstanding higher education institution.</li>
            <li>Inspired in its research quality and impact, including through learning from indigenous and local communities, and for the international reputation earned by its staff and alumni, who are also productively engaged in nourishing the aspirations, cultures and values of society.</li>
            <li> Qualitatively innovative in its sustained support for and empowerment of students and community members to successfully participate in the educational, cultural and social life of the University and thereby contribute to equitable and sustainable global development.</li>
            <li> Unmatched in the depth and mutuality of its partnerships with all key stakeholders to enhance the relevance and contribution of the education, training, certification, research, scholarship and dissemination of knowledge that it undertakes in order to fulfil national goals and maintain core values and principles. </li>
            <li> Excellent in achieving and sustaining stakeholder satisfaction and learning outcomes comparable to the best universities in the world. </li>
         
          </ul>
        </>
      ),
    },
    {
      title: 'Mission',
      description: (
        <>
          <p className="mb-4 text-justify">
            “To contribute to national, regional and global society through the pursuit of education, learning and research, and the dissemination of knowledge at the highest international levels of excellence.”
          </p>
         
        </>
      ),
    },
    {
      title: 'Goals',
      description: (
        <ul className="pl-5 space-y-2 text-justify list-disc">
          <li>Ensure quality and relevance of undergraduate and postgraduate programmes complying with national and international standards.</li>
          <li>Enhance opportunities for education by ensuring postgraduate and continuing education programmes being more flexible, accessible, innovative and open.</li>
          <li>Enhance capacity for innovative research, scholarly work and partnerships targeting knowledge creation and socio-economic development with a global impact and visibility.</li>
          <li>Strengthen administrative and financial management within a sustainable good governance framework.</li>
          <li>Upgrade learning, working and living environment conducive for high-quality academic pursuits, professional development and productivity.</li>
        <li> Enhance capacity and range of outreach engagements.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-gray-100">
      {/* Tabs */}
      <div className="flex mt-16 mb-6 space-x-4">
        {pages.map((p, index) => (
          <button
            key={p.title}
            onClick={() => setPage(index)}
            className={`px-6 py-2 font-semibold rounded-full ${
              index === page ? 'bg-[#800000] text-white' : 'bg-white text-gray-700 border'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Card Content */}
      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl animate-fadeIn">
        <h2 className="mb-6 text-3xl font-serif font-bold text-[#800000]">
          {pages[page].title}
        </h2>
        <div className="text-lg text-gray-800">{pages[page].description}</div>
      </div>
    </div>
  );
};

export default BookPagedLayout;
