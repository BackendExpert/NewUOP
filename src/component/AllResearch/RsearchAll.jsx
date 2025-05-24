import React, { useEffect, useState } from 'react';
import BarChart from '../Charts/BarChart';
import { researchstats } from './ResearchStatus';
import { FaCheck } from "react-icons/fa";
import axios from 'axios';

const RsearchAll = () => {
    const [resdata, setresdata] = useState([]);

    useEffect(() => {
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
    }, []);

    return (
        <div className='px-4 mt-16 bg-gray-100 xl:px-24'>
            <div className="py-16 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#560606] uppercase mb-12">Research and Innovation</h1>

                {/* Icon Stats Grid */}
                <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-7 bg-white p-10 rounded-xl shadow-lg">
                    {researchstats.map((data, index) => (
                        <div key={index} className="text-center">
                            <data.icon className="h-12 w-12 mx-auto text-[#560606]" />
                            <a href={data.link}>
                                <h2 className="mt-4 text-lg font-medium text-gray-600 hover:text-[#e8b910] transition">{data.name}</h2>
                            </a>
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

                    <div className="bg-white p-6 md:w-1/2 rounded-xl shadow-xl mt-6 md:mt-0">
                        <h2 className="text-2xl font-semibold text-[#560606] mb-4 text-center">Research Highlights - 2024</h2>
                        <table className="w-full text-sm text-left text-gray-600">
                            <tbody>
                                {[
                                    { label: 'Research Journals', value: '11', link: 'https://www.pdn.ac.lk/journals/' },
                                    { label: 'Research Publications', value: '' },
                                    { label: 'Citations', value: '' },
                                    { label: 'Research Ranking', value: '' },
                                    { label: 'Top 2% of World Scientists (2023)', value: '9' },
                                    { label: 'Annual Research Conferences', value: '5+' },
                                    { label: 'Annual Research Collaborations', value: '' },
                                    { label: 'Research Awards and Recognitions', value: '' },
                                    { label: 'Annual Workshops/Seminars', value: '' },
                                    { label: 'Capital grants for Research', value: '' },
                                ].map((item, index) => (
                                    <tr key={index} className="border-b py-2">
                                        <td className="py-2 flex items-center font-medium">
                                            <FaCheck className="mr-2 text-green-600" />
                                            {item.link
                                                ? <a href={item.link} className="hover:underline text-blue-600">{item.label}</a>
                                                : item.label}
                                        </td>
                                        <td className="text-right">{item.value || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                                    <a href={research.link}>
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
