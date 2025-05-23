import axios from "axios";
import React, { useEffect, useState } from "react";

const NEWS = () => {
    const [newsdata, setnewsdata] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_APP_API + "/news.php", {
                params: { action: "getallNEWS" },
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                if (res.data.Result) {
                    const sortedNews = res.data.Result.sort(
                        (a, b) => new Date(b.news_date || b.date) - new Date(a.news_date || a.date)
                    );
                    const lastSixNews = sortedNews.slice(0, 6);
                    setnewsdata(lastSixNews);
                } else {
                    setnewsdata([]);
                }
            })
            .catch((err) => {
                console.error(err);
                setnewsdata([]);
            });
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold uppercase text-[#560606] mb-10 text-center tracking-wide">
                Latest News
            </h1>

            {newsdata.length === 0 ? (
                <p className="text-center text-gray-500">No news available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {newsdata.map((news, index) => {
                        const isStyleA = index % 2 === 0;
                        const isExpanded = expandedIndex === index;

                        if (isStyleA) {
                            return (
                                <div
                                    key={index}
                                    aria-label={news.news_title}
                                    onClick={() => toggleExpand(index)}
                                    className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.03]`}
                                    style={{
                                        backgroundImage: `url(${import.meta.env.VITE_APP_API}/${news.news_img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        color: "white",
                                    }}
                                >
                                    {/* Dark opacity overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                                    {/* Title + Date at bottom */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                        <h2 className="text-2xl font-bold drop-shadow-md">
                                            {news.news_title}
                                        </h2>
                                        {(news.news_date || news.date) && (
                                            <p className="text-gray-300 mt-1 text-sm font-medium">
                                                {new Date(news.news_date || news.date).toLocaleDateString(undefined, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        )}
                                    </div>

                                    {/* Sliding description panel */}
                                    <div
                                        className={`absolute left-0 right-0 bottom-0 bg-[#560606] p-6 text-white transform transition-transform duration-500 ease-in-out z-30 ${isExpanded ? "translate-y-0" : "translate-y-full"
                                            }`}
                                        onClick={(e) => e.stopPropagation()} // prevent toggle collapse on desc click
                                    >
                                        <h2 className="text-2xl font-bold mb-2">{news.news_title}</h2>
                                        {(news.news_date || news.date) && (
                                            <p className="text-gray-300 mb-4 text-sm font-medium">
                                                {new Date(news.news_date || news.date).toLocaleDateString(undefined, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        )}
                                        {news.news_desc && (
                                            <p className="mb-6 whitespace-pre-line">{news.news_desc}</p>
                                        )}
                                        <button
                                            onClick={() => {
                                                window.open(news.news_url || "#", "_blank");
                                            }}
                                            className="bg-white text-[#560606] hover:bg-gray-200 transition-colors duration-300 px-4 py-2 rounded-md font-semibold"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            );
                        } else {
                            // Style B unchanged
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.03]"
                                    aria-label={news.news_title}
                                >
                                    <img
                                        src={`${import.meta.env.VITE_APP_API}/${news.news_img}`}
                                        alt={news.news_title}
                                        className="w-full h-48 object-cover"
                                        loading="lazy"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-[#560606] text-xl font-bold mb-2">
                                            {news.news_title}
                                        </h2>
                                        {(news.news_date || news.date) && (
                                            <p className="text-gray-500 text-sm mb-4">
                                                {new Date(news.news_date || news.date).toLocaleDateString(undefined, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        )}
                                        {news.news_desc && (
                                            <p className="text-gray-700 text-base line-clamp-3 mb-6">
                                                {news.news_desc}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => {
                                                window.open(news.news_url || "#", "_blank");
                                            }}
                                            className="bg-[#560606] hover:bg-[#7a0a0a] transition-colors duration-300 text-white px-4 py-2 rounded-md font-semibold"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}

            <div>
                <center>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button
                            type="button"
                            className="mt-8 bg-[#560606] hover:bg-[#7a0a0a] text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300"
                        >
                            Read More
                        </button>
                    </a>
                </center>
            </div>
        </div>
    );
};

export default NEWS;
