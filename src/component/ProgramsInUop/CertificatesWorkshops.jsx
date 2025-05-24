import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CertificatesWorkshops = () => {
  const [certificates, setCertificates] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Load data from JSON file (could be replaced with an API call)
    fetch("/courses.json")
      .then((response) => response.json())
      .then((data) => setCertificates(data.certificates));
  }, []);

  const filteredCertificates = certificates.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-white via-slate-100 to-gray-200">
      <h1 className="mt-8 mb-6 text-4xl font-extrabold text-center text-indigo-800">
        Certificate Programmes
      </h1>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by title or provider..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 text-gray-700 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-[280px]"
          >
            {/* Image takes 50% */}
            <img
              src={item.image}
              alt="Programme Logo"
              className="h-[50%] w-full object-cover"
            />

            {/* Card body */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-md font-bold text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  Offered by: <span className="font-medium">{item.offeredBy}</span>
                </p>

                {/* Styled button link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 mb-3 px-4 py-2 bg-indigo-600 text-white text-xs rounded-full hover:bg-indigo-700 transition"
                >
                  Visit Programme
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesWorkshops;