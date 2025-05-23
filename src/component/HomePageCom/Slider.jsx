import React, { useState, useEffect } from "react";
import axios from "axios";

const Slider = () => {
    const [imagedata, setimagedata] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_APP_API + "/homeimge.php", {
                params: { action: "getallImages" },
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
                if (res.data.Result) {
                    setimagedata(res.data.Result);
                } else {
                    setimagedata([]);
                }
            })
            .catch((err) => {
                console.log(err);
                setimagedata([]);
            });
    }, []);

    useEffect(() => {
        if (imagedata.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imagedata.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [imagedata.length]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagedata.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagedata.length);
    };

    if (imagedata.length === 0) {
        return <p className="text-center text-gray-500">No images available</p>;
    }

    return (
        <div className="relative w-full h-[90vh] overflow-hidden">
            {/* Image Slider */}
            {imagedata.map((image, index) => (
                <img
                    key={index}
                    src={`${import.meta.env.VITE_APP_API}/${image.img}`}
                    alt={image.title || "Slider"}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    style={{ filter: "brightness(0.8)" }}
                />

            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Text Content & Button */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 xl:pt-32">
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white mb-2">
                    {imagedata[currentIndex]?.title || "Default Title"}
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-white max-w-xs sm:max-w-md md:max-w-2xl mb-6">
                    {imagedata[currentIndex]?.imgdesc || "Default Description"}
                </p>
                {imagedata[currentIndex]?.link && (
                    <a
                        href={imagedata[currentIndex].link}
                        className="font-bold text-xl text-[#e8b910] duration-500 hover:pl-8"
                    >
                        Learn More
                    </a>
                )}
            </div>

            {/* Left Arrow */}
            <button
                className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-30 hover:bg-opacity-70"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full z-30 hover:bg-opacity-70"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-30">
                {imagedata.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? "bg-[#560606]" : "bg-gray-400"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
