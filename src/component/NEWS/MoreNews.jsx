import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MoreNews = () => {
    const [newsdata, setNewsdata] = useState([]);
    const [visibleNEWS, setVisibleNEWS] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_APP_API}/news.php`, {
                    params: { action: "getallNEWS" },
                    headers: { "Content-Type": "application/json" },
                });

                if (res.data.Result) {
                    setNewsdata(res.data.Result);
                } else {
                    setNewsdata([]);
                }
            } catch (err) {
                console.error(err);
                setNewsdata([]);
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        const updateVisibleNEWS = () => {
            const screenWidth = window.innerWidth;
            const activeNews = newsdata.filter(item => parseInt(item.is_active) === 1);

            if (screenWidth < 768) {
                setVisibleNEWS(activeNews.slice(0, 2)); // Show only 2 on mobile
            } else {
                setVisibleNEWS(activeNews); // Show all on larger screens
            }
        };

        updateVisibleNEWS();
        window.addEventListener('resize', updateVisibleNEWS);

        return () => window.removeEventListener('resize', updateVisibleNEWS);
    }, [newsdata]);

    return (
        <div className="my-56 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#7c340c]">Latest News</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    visibleNEWS.map((data, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
                            <img
                                src={`${import.meta.env.VITE_APP_API}/${data.news_img}`}
                                alt={data.news_title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#7c340c] mb-2">{data.news_title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{data.news_desc}</p>
                                <a href={`/ViewNews/${data.id}`} rel="noopener noreferrer" className="inline-block mt-3 text-[#e5bc11] font-medium hover:underline">
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoreNews
