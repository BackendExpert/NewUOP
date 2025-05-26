import React, { useState, useEffect } from 'react';

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
          <p className="mb-4">
            “To contribute to national, regional and global society through education and research...”
          </p>
          <ul className="pl-5 space-y-2 list-disc">
            <li>Quality and relevance in education</li>
            <li>Inclusive, flexible postgraduate opportunities</li>
            <li>Global-impact research capacity</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Goals',
      description: (
        <ul className="pl-5 space-y-2 list-disc">
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

  // Handle left/right arrow key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && page > 0) {
        setPage((prev) => prev - 1);
      } else if (e.key === 'ArrowRight' && page < pages.length - 1) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, pages.length]);

  const handlePageClick = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - left;

    if (clickX < width / 2 && page > 0) {
      setPage(page - 1);
    } else if (clickX >= width / 2 && page < pages.length - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 select-none"
      onClick={handlePageClick}
    >
      <div className="flex w-full max-w-6xl overflow-hidden border shadow-lg cursor-pointer rounded-xl">
        {/* Left - Title */}
        <div className="bg-[#800000] text-white flex items-center justify-center p-10 text-4xl font-bold font-serif w-[40%]">
          {pages[page].title}
        </div>

        {/* Right - Description */}
        <div className="flex-grow p-10 text-lg text-gray-800 bg-white animate-fadeIn">
          {pages[page].description}
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Click or use ← / → keys to flip pages
      </p>
    </div>
  );
};

export default BookPagedLayout;
