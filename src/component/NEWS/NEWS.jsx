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
                if (res.data.Result && Array.isArray(res.data.Result)) {
                    const filteredNews = res.data.Result.filter((newsItem) =>
                        parseInt(newsItem.is_active || "1") === 1
                    );

                    const sortedNews = filteredNews.sort(
                        (a, b) =>
                            new Date(b.news_date || b.date || 0) - new Date(a.news_date || a.date || 0)
                    );

                    const lastSixNews = sortedNews.slice(0, 6);
                    setnewsdata(lastSixNews);
                } else {
                    setnewsdata([]);
                }
            })
            .catch((err) => {
                console.error("News fetch error:", err);
                setnewsdata([]);
            });
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    const getImageUrl = (imgPath) => {
        if (!imgPath) return "";
        return imgPath.startsWith("http")
            ? imgPath
            : `${import.meta.env.VITE_APP_API}/${imgPath}`;
    };

    const truncateDescription = (desc) => {
        if (!desc) return "";
        return desc.length > 180 ? desc.slice(0, 180) + "..." : desc;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex item-center justify-around">
                <h1 className="md:text-3xl text-xs font-extrabold uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest News
                </h1>
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Upcoming Events
                </h1>
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest Notices
                </h1>
            </div>

            {newsdata.length === 0 ? (
                <p className="text-center text-gray-500">No news available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {newsdata.map((news, index) => {
                        const isStyleA = index % 2 === 0;
                        const isExpanded = expandedIndex === index;
                        const imgUrl = getImageUrl(news.news_img);

                        if (isStyleA) {
                            return (
                                <div
                                    key={index}
                                    aria-label={news.news_title}
                                    onClick={() => toggleExpand(index)}
                                    className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.03]`}
                                    style={{
                                        backgroundImage: `url(${imgUrl})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        color: "white",
                                        minHeight: "250px",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                                    <div className="absolute bottom-4 left-4 right-4 z-20">
                                        <h2 className="text-2xl font-bold drop-shadow-md">
                                            {news.news_title}
                                        </h2>
                                        {(news.news_date || news.date) && (
                                            <p className="text-gray-300 mt-1 text-sm font-medium">
                                                {new Date(news.news_date || news.date).toLocaleDateString(
                                                    undefined,
                                                    {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    }
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    <div
                                        className={`absolute left-0 right-0 bottom-0 bg-[#560606] p-6 text-white transform transition-transform duration-500 ease-in-out z-30 ${isExpanded ? "translate-y-0" : "translate-y-full"
                                            }`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <h2 className="text-2xl font-bold mb-2">{news.news_title}</h2>
                                        {(news.news_date || news.date) && (
                                            <p className="text-gray-300 mb-4 text-sm font-medium">
                                                {new Date(news.news_date || news.date).toLocaleDateString(
                                                    undefined,
                                                    {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    }
                                                )}
                                            </p>
                                        )}
                                        {news.news_desc && (
                                            <p className="mb-6 whitespace-pre-line">
                                                {truncateDescription(news.news_desc)}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => {
                                                window.open(news.news_link || news.news_url || "#", "_blank");
                                            }}
                                            className="bg-white text-[#560606] hover:bg-gray-200 transition-colors duration-300 px-4 py-2 rounded-md font-semibold"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.03]"
                                    aria-label={news.news_title}
                                >
                                    <img
                                        src={imgUrl}
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
                                                {new Date(news.news_date || news.date).toLocaleDateString(
                                                    undefined,
                                                    {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    }
                                                )}
                                            </p>
                                        )}
                                        {news.news_desc && (
                                            <p className="text-gray-700 text-base line-clamp-3 mb-6">
                                                {truncateDescription(news.news_desc)}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => {
                                                window.open(news.news_link || news.news_url || "#", "_blank");
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
                            More NEWS
                        </button>
                    </a>
                </center>
            </div>
        </div>
    );
};

export default NEWS;
