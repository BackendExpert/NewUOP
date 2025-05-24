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
        setImagedata(res.data?.Result || []);
      })
      .catch(() => setImagedata([]));

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;
        scrollRef.current.scrollTo({
          left: isAtEnd ? 0 : scrollLeft + clientWidth * 0.5,
          behavior: "smooth"
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const amount = clientWidth * 0.5;
    const newPos = direction === "left"
      ? Math.max(scrollLeft - amount, 0)
      : Math.min(scrollLeft + amount, scrollWidth - clientWidth);
    scrollRef.current.scrollTo({ left: newPos, behavior: "smooth" });
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-16">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl text-white p-2 rounded-full hover:bg-white/20 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-10 no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {imagedata.map((image, index) => {
          const imageUrl = `${import.meta.env.VITE_APP_API}/${image.img}`;
          return (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-96 relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              style={{ scrollSnapAlign: "start" }}
            >
              <button
                className="w-full h-full"
                onClick={() => setSelectedImage(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={`Event ${image.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => (e.target.src = "/fallback.jpg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100" />
              </button>

              {image.link && (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white text-xs px-4 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
                >
                  View More
                </a>
              )}
            </div>
          );
        })}

        {/* Padding at end to avoid image cutoff */}
        <div className="flex-shrink-0 w-6" />
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl text-white p-2 rounded-full hover:bg-white/20 transition"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HorizontalScroll;
