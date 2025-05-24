import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllEvents = () => {
    const [eventData, setEventData] = useState([]);
    const [visibleEvents, setVisibleEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    // Fetch events
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_APP_API}/event.php`, {
                params: { action: 'getallEvents' },
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => {
                setEventData(res.data?.Result || []);
            })
            .catch((err) => {
                console.error('Failed to fetch events:', err);
                setEventData([]);
            });
    }, []);

    // Filter and sort events
    useEffect(() => {
        let filtered = eventData.filter((event) =>
            event?.event_title?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filtered.sort((a, b) => {
            const dateA = new Date(a.event_date);
            const dateB = new Date(b.event_date);
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
        });

        setVisibleEvents(filtered);
    }, [eventData, searchTerm, sortOrder]);

    return (
        <div className="xl:pt-40 pt-8 xl:px-24 px-6 bg-gray-100 min-h-screen font-sans">
            <div className="py-8 max-w-[1400px] mx-auto">
                {/* Search and Sort Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-lg shadow-md mb-8">
                    <input
                        type="text"
                        placeholder="Search by event title..."
                        className="w-full md:w-1/2 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400 transition duration-300 ease-in-out"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search events"
                    />
                    <select
                        className="w-full md:w-1/4 px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400 transition duration-300 ease-in-out"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        aria-label="Sort events"
                    >
                        <option value="desc">Newest First</option>
                        <option value="asc">Oldest First</option>
                    </select>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    {visibleEvents.map((event, index) => {
                        const date = new Date(event.event_date);
                        const year = date.getFullYear();
                        const month = date.toLocaleString('en-US', { month: 'short' });
                        const day = date.getDate();
                        const description = event.envet_desc?.slice(0, 200) + (event.envet_desc?.length > 200 ? '...' : '');

                        return (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer group"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden h-56 rounded-t-xl">
                                    <img
                                        src={`${import.meta.env.VITE_APP_API}/${event.event_img}`}
                                        alt={event.event_title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out rounded-t-xl"></div>

                                    {/* Date badge */}
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg select-none transform transition duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-100 opacity-90">
                                        <div>{day}</div>
                                        <div>{month}</div>
                                        <div>{year}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 transition-all duration-500">
                                    <h2 className="text-[#560606] font-bold mb-3 text-xl tracking-wide transition-colors duration-300 group-hover:text-yellow-600">
                                        {event.event_title}
                                    </h2>
                                    <p className="text-gray-600 mb-5 text-justify">
                                        {description}
                                    </p>
                                    <a
                                        href={event.event_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-6 py-3 bg-yellow-500 text-[#560606] font-semibold rounded-lg shadow-md hover:bg-yellow-600 hover:text-white transition-colors duration-500 ease-in-out"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllEvents;
