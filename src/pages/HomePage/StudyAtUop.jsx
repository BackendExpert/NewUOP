import React from 'react'
import { programData } from '../../component/ProgramsInUop/ProgramData'

const StudyAtUop = () => {
    const undergraduate = programData.find(p => p.id === 1)
    const postgraduate = programData.find(p => p.id === 2)

    return (
        <div className="px-4 sm:px-6 md:px-10 py-10">
            <h1 className="text-[#560606] text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 text-center md:text-left">
                Study at Peradeniya
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium mx-auto mb-12 text-center md:text-left">
                The University of Peradeniya welcomes both Sri Lankan and international students to experience globally recognized education, pioneering research, and a dynamic campus environment.
            </p>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Undergraduate Programmes */}
                <div className="md:w-1/3 w-full">
                    <h2 className="text-lg sm:text-xl font-semibold text-[#560606] mb-4">{undergraduate.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{undergraduate.desc}</p>
                    <div className="space-y-6">
                        {undergraduate.courses.map(course => (
                            <a
                                key={course.id}
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
                            >
                                <img src={course.img} alt={course.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-base sm:text-lg font-semibold text-[#560606]">{course.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Postgraduate Programmes */}
                <div className="md:w-2/3 w-full">
                    <h2 className="text-lg sm:text-xl font-semibold text-[#560606] mb-4">{postgraduate.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{postgraduate.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {postgraduate.courses.map(course => (
                            <a
                                key={course.id}
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
                            >
                                <img src={course.img} alt={course.name} className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-sm sm:text-base font-semibold text-[#560606]">{course.name}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyAtUop
