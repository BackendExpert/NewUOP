import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Events = () => {
    const [eventdata, seteventdata] = useState([]);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + "/event.php", {
            params: { action: "getallEvents" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) {
                    seteventdata(res.data.Result);
                } else {
                    seteventdata([]);
                }
            })
            .catch(err => {
                console.error(err);
                seteventdata([]);
            });
    }, []);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex item-center justify-around">
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest News
                </h1>
                <h1 className="md:text-3xl text-xs font-extrabold uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest Events
                </h1>
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest Notices
                </h1>
            </div>

        </div>
    )
}

export default Events