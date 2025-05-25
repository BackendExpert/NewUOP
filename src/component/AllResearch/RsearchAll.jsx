import React, { useEffect, useState } from 'react';
import BarChart from '../Charts/BarChart';
import { researchstats } from './ResearchStatus';
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

const RsearchAll = () => {
    const [resdata, setresdata] = useState([]);
    const [highlightData, setHighlightData] = useState([]);

    useEffect(() => {
        // Fetch main research data
        axios.get(import.meta.env.VITE_APP_API + "/research.php", {
            params: { action: "getResearch" },
            headers: { "Content-Type": "application/json" },
        })
            .then(res => {
                if (res.data.Result) {
                    setresdata(res.data.Result);
                } else {
                    setresdata([]);
                }
            })
            .catch(() => setresdata([]));

        // Fetch research stats for previous year and format highlightData
        const previousYear = new Date().getFullYear() - 1;
        axios.get(import.meta.env.VITE_APP_API + "/research.php", {
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
                            { label: `Top 2% of World Scientists (${stats.year})`, value: stats.number_of_researchers_top2_percent },
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
                console.error("Error fetching research stats:", err);
                setHighlightData([]);
            });
    }, []);

    return (
        <div className='px-4 mt-16 bg-gradient-to-b from-gray-50 to-white xl:px-24'>
            <div className="py-16 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#560606] uppercase mb-12">Research and Innovation</h1>

                {/* Icon Stats Grid - Completely New Style */}
                <div className="grid gap-8 md:grid-cols-3 xl:grid-cols-7 px-6 py-10 bg-gray-50 rounded-lg">
                    {researchstats.map((data, index) => (
                        <div
                            key={index}
                            className="py-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer group"
                            title={data.name}
                        >
                            <div className="p-5 mb-4 bg-gradient-to-tr from-[#4f3d3d] via-[#6c5757] to-[#8e7171] rounded-full text-white flex items-center justify-center text-4xl group-hover:scale-110 transform transition-transform duration-300">
                                <data.icon className="w-10 h-10" />
                            </div>
                            <a href={data.link} target="_blank" rel="noopener noreferrer" className="w-full">
                                <h2 className="text-center text-base font-semibold text-gray-700 group-hover:text-[#4f3d3d] transition-colors duration-300 px-4">
                                    {data.name}
                                </h2>
                            </a>
                            <div className="mt-2 w-8 h-1 bg-[#4f3d3d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto" />
                        </div>
                    ))}
                </div>



                {/* Research Highlights and Chart */}
                <div className="mt-10 md:flex gap-4">
                    <div className="bg-white p-6 md:w-1/2 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold text-[#560606] mb-2">Research Highlights</h2>
                        <p className="text-gray-500 mb-4">Explore key research statistics and development trends.</p>
                        <div className="hidden md:block">
                            <BarChart />
                        </div>
                    </div>

                    {/* Updated Highlights Display */}
                    <div className="bg-white p-6 md:w-1/2 rounded-xl shadow-xl mt-6 md:mt-0">
                        <h2 className="text-2xl font-semibold text-[#560606] mb-4 text-center">
                            Research Highlights - {new Date().getFullYear() - 1}
                        </h2>
                        <div className="space-y-4">
                            {highlightData.length === 0 ? (
                                <p className="text-center text-gray-400">No research highlights available.</p>
                            ) : (
                                highlightData.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center text-gray-700">
                                        <div className="flex items-center gap-3">
                                            <FaCheck className="text-green-600" />
                                            <span className="font-medium">{item.label}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-gray-900">{item.value || '-'}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Research Cards */}
                <div className="grid gap-8 mt-12 md:grid-cols-2 xl:grid-cols-3">
                    {resdata.map((research, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition">
                            <img
                                src={`${import.meta.env.VITE_APP_API}/${research.res_img}`}
                                alt={research.res_titile}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold uppercase text-[#560606] mb-2">{research.res_titile}</h3>
                                <p className="text-gray-600 text-sm line-clamp-4">{research.res_desc}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <a href={research.res_link} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-[#560606] text-white px-4 py-2 rounded-full shadow-md hover:px-6 transition-all">
                                            Read More
                                        </button>
                                    </a>
                                    <span className="text-sm text-gray-500 hover:text-[#560606] transition">{research.res_faculty}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RsearchAll;
