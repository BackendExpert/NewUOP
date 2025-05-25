import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ResearchHome = () => {
    const [resdata, setResdata] = useState([]);
    const [highlightData, setHighlightData] = useState([]);

    useEffect(() => {
        // Fetch research data
        axios.get(`${import.meta.env.VITE_APP_API}/research.php`, {
            params: { action: "getResearch" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) setResdata(res.data.Result);
                else setResdata([]);
            })
            .catch(err => {
                console.error(err);
                setResdata([]);
            });

        // Fetch research stats for previous year
        const previousYear = new Date().getFullYear() - 1;
        axios.get(`${import.meta.env.VITE_APP_API}/research.php`, {
            params: { action: "getResearchStats" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result && res.data.Result.length > 0) {
                    const stats = res.data.Result.find(s => Number(s.year) === previousYear);
                    if (stats) {
                        setHighlightData([
                            { label: 'Research Journals', value: stats.research_journals },
                            { label: 'Research Publications', value: stats.research_publications },
                            { label: 'Citations', value: stats.citations },
                            { label: 'Research Ranking', value: stats.research_ranking },
                            { label: 'Top 2% of World Scientists (' + stats.year + ')', value: stats.number_of_researchers_top2_percent },
                            { label: 'Annual Research Conferences', value: stats.annual_research_conferences },
                            { label: 'Annual Research Collaborations', value: stats.annual_research_collaborations },
                            { label: 'Research Awards and Recognitions', value: stats.research_awards_and_recognitions },
                            { label: 'Annual Workshops/Seminars', value: stats.annual_workshops_seminars },
                            { label: 'Capital grants for Research', value: `$${parseFloat(stats.capital_grants_for_research).toLocaleString()}` },
                        ]);
                    }
                }
            })
            .catch(err => {
                console.error(err);
                setHighlightData([]);
            });
    }, []);

    return (
        <div className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white xl:px-28">
            <h1 className="uppercase text-center text-[#560606] font-bold text-4xl mb-4">
                Research & Innovation
            </h1>
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                The University of Peradeniya pioneers transformative research and creative innovations,
                advancing knowledge to address global and local challenges.
            </p>

            {/* Research Highlights */}
            <div className="grid gap-6 md:grid-cols-2 mb-16">
                <div className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200">
                    <h2 className="text-2xl font-semibold text-[#560606] text-center mb-6">
                        Research Highlights - {new Date().getFullYear() - 1}
                    </h2>
                    <div className="space-y-4">
                        {highlightData.map((item, index) => (
                            <div key={index} className="flex justify-between items-center text-gray-700">
                                <div className="flex items-center gap-3">
                                    <FaCheck className="text-green-600" />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Latest Research */}
                {resdata.length > 4 && (
                    <div className="relative group bg-white shadow-xl rounded-2xl overflow-hidden">
                        <div
                            style={{
                                backgroundImage: `url(${import.meta.env.VITE_APP_API}/${resdata[4]?.res_img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="w-full h-64 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="text-center font-semibold py-4 text-lg">
                            {resdata[4]?.res_titile}
                        </h3>
                        <div className="absolute inset-0 bg-black bg-opacity-90 text-white px-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-md mb-4">{resdata[4]?.res_desc}</p>
                            <a href={resdata[4]?.res_link} target="_blank">
                                <button className="bg-[#e8b910] py-2 px-6 rounded-full font-semibold text-black shadow-lg hover:scale-105 transition-transform duration-300">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Recent Research Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {resdata.slice(0, 4).map((data, index) => (
                    <div
                        key={index}
                        className="relative group bg-white shadow-xl rounded-2xl overflow-hidden"
                    >
                        <div
                            style={{
                                backgroundImage: `url(${import.meta.env.VITE_APP_API}/${data.res_img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="w-full h-48 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="text-center font-semibold py-4 text-lg">
                            {data.res_titile}
                        </h3>
                        <div className="absolute inset-0 bg-black bg-opacity-90 text-white px-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <p className="text-md mb-4">{data.res_desc}</p>
                            <a href={data.res_link} target="_blank">
                                <button className="bg-[#e8b910] py-2 px-6 rounded-full font-semibold text-black shadow-lg hover:scale-105 transition-transform duration-300">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Researches Button */}
            <div className="flex justify-center mt-12">
                <a href="/Researches">
                    <button className="bg-[#e8b910] py-3 px-10 rounded-full font-semibold text-black shadow-lg hover:px-12 transition-all duration-300">
                        More Research and Innovation
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ResearchHome;