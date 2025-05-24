import axios from "axios";
import React, { useEffect, useState } from "react";

const Notices = () => {
    const [noticedata, setnoticedata] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_APP_API + "/notice.php", {
                params: { action: "getallNotice" },
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                if (res.data.Result) {
                    const acceptedNotices = res.data.Result.filter(
                        (notice) => Number(notice.is_accepted) === 1
                    );
                    acceptedNotices.sort((a, b) => {
                        const dateA = new Date(a.notice_date);
                        const dateB = new Date(b.notice_date);
                        return dateA - dateB;
                    });
                    const limitedNotices = acceptedNotices.slice(0, 6);
                    setnoticedata(limitedNotices);
                } else {
                    setnoticedata([]);
                }
            })
            .catch((err) => {
                console.error(err);
                setnoticedata([]);
            });
    }, []);

    const noticesToShow = isMobile ? noticedata.slice(0, 3) : noticedata;

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-around">
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

            <div>
                {noticesToShow.length === 0 ? (
                    <p className="text-center text-gray-500">No news available</p>
                ) : (
                    <div>
                        {noticesToShow.map((notice, index) => {
                            // Alternate alignment: even index left, odd index right
                            const alignClass = index % 2 === 0 ? "text-left" : "text-right";

                            // Format notice_date nicely (optional)
                            const formattedDate = new Date(notice.notice_date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            });

                            return (
                                <div
                                    key={index}
                                    className={`bg-gray-100 py-4 px-6 rounded-xl shadow-xl my-4 mx-auto ${alignClass}`}
                                >
                                    <h1 className="text-lg font-bold text-[#560606]">{notice.notice_title}</h1>
                                    <p className="text-sm text-gray-500 mb-2">{formattedDate}</p>

                                    <p className="py-4">{notice.notice_desc}</p>

                                    {notice.notice_link && (
                                        <a
                                            href={notice.notice_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#560606] font-semibold hover:underline"
                                        >
                                            Read More
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div>
                <center>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <button
                            type="button"
                            className="mt-8 bg-[#560606] hover:bg-[#7a0a0a] text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300"
                        >
                            More Notices
                        </button>
                    </a>
                </center>
            </div>
        </div>
    );
};

export default Notices;
