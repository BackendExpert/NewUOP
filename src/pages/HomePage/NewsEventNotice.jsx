import React, { useState } from 'react';
import NEWS from '../../component/NEWS/NEWS';

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
    <div className="py-20 flex flex-col items-center">
      {/* Buttons at the top */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={goPrev}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          aria-label="Previous news"
        >
          &lt;
        </button>

        <button
          onClick={goNext}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          aria-label="Next news"
        >
          &gt;
        </button>
      </div>

      {/* Carousel container — flexible width, overflow hidden */}
      <div
        className="overflow-hidden relative"
        style={{ position: 'relative' }}
      >
        {/* Sliding wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${newsCount * 100}%`,
            transform: `translateX(-${(100 / newsCount) * currentIndex}%)`,
          }}
        >
          {[...Array(newsCount)].map((_, idx) => (
            <div
              key={idx}
              style={{ width: `${100 / newsCount}%`, flexShrink: 0 }}
            >
              <NEWS />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsEventNotice;
