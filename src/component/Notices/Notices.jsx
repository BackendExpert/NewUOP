import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Notices = () => {
    const [noticedata, setnoticedata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/notice.php", {
            params: { action: "getallNotice" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) {
                    const lastSixNotice = res.data.Result.slice(-9);
                    setnoticedata(lastSixNotice);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex item-center justify-around">
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest News
                </h1>
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Upcoming Events
                </h1>
                <h1 className="md:text-3xl text-xs font-extrabold uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest Notices
                </h1>
            </div>
        </div>
    )
}

export default Notices