import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Organization = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 xl:py-48 py-32 px-6">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-maroon-700 drop-shadow-sm tracking-tight font-serif">
                    University Organization
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Learn how the University of Peradeniya is structured and governed
                    under national education statutes.
                </p>
            </div>

            {/* Content Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-14 space-y-10">
                {/* Introduction */}
                <div className="text-gray-700 text-lg leading-relaxed text-justify">
                    <p className="mb-4">
                        The University of Peradeniya operates under the provisions of the{" "}
                        <strong>Universities Act No. 16 of 1978</strong> and the{" "}
                        <strong>Universities (Amendment) Act No. 7 of 1985</strong>. (
                        <a
                            href="http://www.ugc.ac.lk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            ugc.ac.lk
                        </a>
                        )
                    </p>

                    <p>
                        According to these acts, every university has a Chancellor, officers,
                        and authorities responsible for governance. The Chancellor, appointed
                        by H.E. the President, is the ceremonial head and serves a five-year
                        term.
                    </p>
                </div>

                {/* Structure Description */}
                <div className="space-y-5 text-gray-700 text-justify text-base leading-relaxed">
                    <p>
                        The University’s governance is two-tiered, consisting of the{" "}
                        <strong>Council</strong> and the <strong>Senate</strong>. The Council
                        serves as the chief executive and decision-making body, while the
                        Senate is the academic authority that oversees teaching, research, and
                        examinations.
                    </p>
                    <p>
                        Faculty Boards operate under the Senate to manage academic affairs
                        within individual faculties. The Council includes the
                        Vice-Chancellor, Deputy Vice-Chancellor, Deans, elected Senate
                        representatives, and thirteen distinguished individuals appointed by
                        the UGC.
                    </p>
                </div>

                {/* Image Section */}
                <div className="text-center">
                    <img
                        src="../src/assets/Organization.jpg"
                        alt="University Organization Chart"
                        className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
                        onClick={() => setIsModalOpen(true)}
                    />
                    <p className="mt-2 text-sm text-gray-500">Click image to enlarge</p>
                </div>

                {/* Footer Note */}
                <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
                    Last updated: May 2025 | For more details, visit the{" "}
                    <a
                        href="http://www.ugc.ac.lk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        University Grants Commission
                    </a>
                    .
                </div>
            </div>

            {/* Modal View */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
                        onClick={() => setIsModalOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            src="../src/assets/Organization.jpg"
                            alt="Full-size University Organization Structure"
                            className="max-w-5xl w-full rounded-xl shadow-2xl cursor-pointer"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Organization;
