import React from 'react';
import { dataforcount } from './Data';
import CountUp from 'react-countup';

const DataCount = () => {
    return (
        <section className="py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                    {dataforcount.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center
                         hover:shadow-2xl hover:scale-[1.07] transition-transform duration-300 ease-in-out"
                        >
                            {/* Icon Circle */}
                            <div
                                aria-hidden="true"
                                className="absolute -top-10 flex items-center justify-center w-20 h-20 rounded-full
                           bg-gradient-to-tr from-[#560606] to-[#e8b910] shadow-md"
                            >
                                <item.icon className="text-white w-10 h-10" />
                            </div>

                            {/* Spacer for icon */}
                            <div className="mt-14" />

                            <h3 className="text-md font-semibold text-gray-700 uppercase mb-2 tracking-wide">
                                {item.name}
                            </h3>

                            <p className="text-4xl font-extrabold text-[#560606] drop-shadow-sm">
                                <CountUp end={item.value} duration={2.5} />
                                {item.id === 3 ? '' : '+'}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14 flex justify-center">
                    <a
                        href="https://sites.google.com/gs.pdn.ac.lk/statdiv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-3 font-semibold text-[#560606] rounded-full
                       bg-gradient-to-r from-[#e8b910] to-[#facc15] shadow-lg
                       hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
                    >
                        More Statistics
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DataCount;
