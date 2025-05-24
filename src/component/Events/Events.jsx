import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Events = ({ data }) => {
    const [eventdata, seteventdata] = useState([]);

    useEffect(() => {
        if (!data) {
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
        }
    }, [data]);

    if (data) return null;

    const now = new Date();
    const maxItems = window.innerWidth < 768 ? 3 : 4;

    const truncateDescription = (desc) => {
        if (!desc) return "";
        return desc.length > 80 ? desc.slice(0, 80) + "..." : desc;
    };

    const upcomingEvents = eventdata
        .filter(event =>
            parseInt(event.is_accepted) === 1 &&
            new Date(event.event_date) >= now
        )
        .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
        .slice(0, maxItems);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-around">
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest News
                </h1>
                <h1 className="md:text-3xl text-xs font-extrabold uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Upcoming Events
                </h1>
                <h1 className="md:text-xl text-sm uppercase text-[#560606] mb-10 text-center tracking-wide">
                    Latest Notices
                </h1>
            </div>

            {upcomingEvents.length === 0 ? (
                <p className="text-center text-gray-500">No upcoming events</p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {upcomingEvents.map((event, index) => {
                        const isEven = index % 2 === 0;
                        const eventDate = new Date(event.event_date);
                        const formattedDate = eventDate.toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        });

                        return (
                            <div
                                key={index}
                                className={`bg-gray-100 shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="w-full md:w-1/3 h-48 md:h-auto">
                                    <img
                                        src={`${import.meta.env.VITE_APP_API}/${event.event_img}`}
                                        alt={event.event_title}
                                        className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-r-xl"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                </div>

                                <div className="w-full md:w-2/3 p-4 flex flex-col justify-start">
                                    <h1 className="text-[#560606] font-bold">{event.event_title}</h1>
                                    <p className="py-2">{truncateDescription(event.envet_desc)}</p>
                                    <p className="text-sm text-gray-600">Date: {formattedDate}</p>
                                    {event.event_link && (
                                        <a
                                            href={event.event_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 w-40 text-center bg-[#560606] text-white px-4 py-2 rounded hover:bg-[#440404]"
                                        >
                                            More Info
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
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
                            More Events
                        </button>
                    </a>
                </center>
            </div>
        </div>
    );
};

export default Events;
