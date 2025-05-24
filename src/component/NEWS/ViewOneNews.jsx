import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ViewOneNews = () => {
    const { id } = useParams();
    const [newsdata, setNewsdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/news.php", {
            params: { action: "getallNEWS" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) {
                    setNewsdata(res.data.Result);
                } else {
                    setNewsdata([]);
                }
            })
            .catch(err => {
                console.error(err);
                setNewsdata([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const newsItem = newsdata.find(item => item.id?.toString() === id);

    if (loading) {
        return <div className="my-32 text-center text-gray-500">Loading...</div>;
    }

    if (!newsItem) {
        return (
            <div className="my-32 px-4 md:px-12 text-center text-gray-500">
                <h2 className="text-2xl font-semibold mb-4">News item not found</h2>
                <Link
                    to="/news"
                    className="text-[#7c340c] hover:underline font-medium"
                >
                    ← Back to News
                </Link>
            </div>
        );
    }

    return (
        <div className="xl:my-48 my-48 px-4 md:px-12 max-w-4xl mx-auto">
            <Link
                to="/news"
                className="text-[#7c340c] hover:underline font-medium text-sm mb-4 inline-block"
            >
                ← Back to News
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold text-[#7c340c]">{newsItem.news_title}</h1>

            <p className="mt-2 mb-4 text-gray-500 font-semibold">{newsItem.news_date}</p>

            {newsItem.news_img && (
                <img
                    src={`${import.meta.env.VITE_APP_API}/${newsItem.news_img}`}
                    alt={newsItem.news_title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-6"
                />
            )}

            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {newsItem.news_desc}
            </p>

            <div className="md:flex mt-8">
                <div className="mr-2">
                    {newsItem.img2 && (
                        <img
                            src={`${import.meta.env.VITE_APP_API}/${newsItem.img2}`}
                            alt={newsItem.news_title}
                            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-6"
                        />
                    )}
                </div>
                <div className="mr-2">
                    {newsItem.img3 && (
                        <img
                            src={`${import.meta.env.VITE_APP_API}/${newsItem.img3}`}
                            alt={newsItem.news_title}
                            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-6"
                        />
                    )}
                </div>
            </div>




            {newsItem.news_link && (
                <a
                    href={newsItem.news_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-[#e5bc11] font-semibold hover:underline"
                >
                    Visit original source →
                </a>
            )}
        </div>
    );
};

export default ViewOneNews;
