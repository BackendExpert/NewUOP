import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const HorizontalScroll = ({ setSelectedImage }) => {
  const scrollRef = useRef(null);
  const [imagedata, setImagedata] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_API + '/programsilder.php', {
      params: { action: "getallImages" },
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(res => {
        if (res.data.Result) {
          setImagedata(res.data.Result);
        } else {
          setImagedata([]);
        }
      })
      .catch(err => {
        console.log(err);
        setImagedata([]);
      });

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5; // Close to the end
        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Scroll to start
        } else {
          scroll("right"); // Scroll normally
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.5;

      const newScrollLeft = direction === "left"
        ? Math.max(scrollLeft - scrollAmount, 0)
        : Math.min(scrollLeft + scrollAmount, scrollWidth - clientWidth);

      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-12">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Images Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth w-full no-scrollbar px-6"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
      >
        {imagedata.map((image, index) => {
          const imgeview = `${import.meta.env.VITE_APP_API}/${image.img}`;

          return (
            <div key={index} className="relative flex-shrink-0" style={{ width: "15rem" }}>
              <button
                className="w-full h-80 cursor-pointer rounded-md transition-transform transform hover:scale-105"
                onClick={() => setSelectedImage(imgeview)}
              >
                <img
                  src={imgeview}
                  alt={`Event ${image.id}`}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => e.target.src = '/path/to/fallback-image.jpg'}
                />
              </button>

              {image.link && (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white py-1 px-3 rounded-full text-xs"
                >
                  View More
                </a>
              )}
            </div>
          );
        })}

        {/* End padding */}
        <div className="flex-shrink-0" style={{ width: "1rem" }}></div>
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HorizontalScroll;
