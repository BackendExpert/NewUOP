import React, { useState } from 'react';
import NEWS from '../../component/NEWS/NEWS';
import Events from '../../component/Events/Events';
import Notices from '../../component/Notices/Notices';

const NewsEventNotice = () => {
    const newsCount = 3; // Number of news items
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsCount - 1 : prevIndex - 1));
    };

    const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === newsCount - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="py-20 flex flex-col items-center px-4 max-w-7xl mx-auto">
            {/* Buttons at the top */}
            <div className="mb-6 flex space-x-6">
                <button
                    onClick={goPrev}
                    aria-label="Previous news"
                    className="
            flex items-center justify-center
            w-10 h-10 sm:w-12 sm:h-12
            bg-white 
            border border-gray-300
            rounded-full
            shadow-md
            hover:bg-[#560606] hover:border-[#560606]
            hover:text-white
            transition
            duration-300
            focus:outline-none focus:ring-2 focus:ring-[#560606]
          "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={goNext}
                    aria-label="Next news"
                    className="
            flex items-center justify-center
            w-10 h-10 sm:w-12 sm:h-12
            bg-white 
            border border-gray-300
            rounded-full
            shadow-md
            hover:bg-[#560606] hover:border-[#560606]
            hover:text-white
            transition
            duration-300
            focus:outline-none focus:ring-2 focus:ring-[#560606]
          "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Carousel container */}
            <div className="overflow-hidden relative w-full" style={{ position: 'relative' }}>
                {/* Sliding wrapper */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        width: `${newsCount * 100}%`,
                        transform: `translateX(-${(100 / newsCount) * currentIndex}%)`,
                    }}
                >
                    <div className="flex-shrink-0" style={{ width: `${100 / newsCount}%` }}>
                        <NEWS />
                    </div>
                    <div className="flex-shrink-0" style={{ width: `${100 / newsCount}%` }}>
                        <Events />
                    </div>
                    <div className="flex-shrink-0" style={{ width: `${100 / newsCount}%` }}>
                        <Notices />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEventNotice;
