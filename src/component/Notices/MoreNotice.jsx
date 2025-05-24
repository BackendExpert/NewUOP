import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoreNotice = () => {
    const [noticedata, setnoticedata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/notice.php", {
            params: { action: "getallNotice" },
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            console.log("Raw API Response:", res.data); // Add this line for debugging
            if (res.data.Result) {
                const acceptedNotices = res.data.Result.filter(data => data.is_accepted === '1');
                console.log("Accepted Notices:", acceptedNotices); // Log filtered notices
                setnoticedata(acceptedNotices);
            } else {
                setnoticedata([]);
            }
        })
        .catch(err => {
            console.error(err);
            setnoticedata([]);
        });
    }, []);
    

    return (
        <div className="my-48 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#7c340c]">Latest News</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    noticedata.map((data, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-[#7c340c] mb-2">{data.notice_title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{data.notice_desc}</p>
                                <a href={data.notice_link} rel="noopener noreferrer" target='_blank' className="inline-block mt-3 text-[#e5bc11] font-medium hover:underline">
                                    Read more →
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MoreNotice;
