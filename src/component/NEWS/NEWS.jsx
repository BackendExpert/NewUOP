import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NEWS = () => {
    const [newsdata, setnewsdata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/news.php", {
            params: { action: "getallNEWS" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) {
                    const sortedNews = res.data.Result.sort((a, b) => new Date(b.date) - new Date(a.date));
                    const lastSixNews = sortedNews.slice(0, 6);
                    setnewsdata(lastSixNews);
                } else {
                    setnewsdata([]);
                }
            })
            .catch(err => {
                console.error(err);
                setnewsdata([]);
            });
    }, []);

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

                        if (isStyleA) {
                            // Style A: Image card with dark gradient overlay text inside bottom
                            return (
                                <div
                                    key={index}
                                    className="relative rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-[1.03]"
                                    style={{
                                        backgroundImage: `url(${import.meta.env.VITE_APP_API}/${news.news_img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '320px',
                                    }}
                                    aria-label={news.news_title}
                                >
                                    {/* Darker gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h2 className="text-white text-2xl font-bold drop-shadow-md">
                                            {news.news_title}
                                        </h2>
                                        {news.date && (
                                            <p className="text-gray-300 mt-1 text-sm font-medium">
                                                {new Date(news.date).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        } else {
                            // Style B: Image on top, text on white background below
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
                                        <h2 className="text-[#560606] text-xl font-bold mb-2">{news.news_title}</h2>
                                        {news.date && (
                                            <p className="text-gray-500 text-sm mb-4">
                                                {new Date(news.news_date).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        )}
                                        {news.news_desc && (
                                            <p className="text-gray-700 text-base line-clamp-3">{news.news_desc}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

export default NEWS;
