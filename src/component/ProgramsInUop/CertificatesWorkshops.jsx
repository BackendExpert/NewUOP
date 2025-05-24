import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const CertificatesWorkshops = () => {
  const [certificates, setCertificates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API}/cirtificate.php`, {
          params: { action: "getallcirtificate" },
          headers: { "Content-Type": "application/json" },
        });

        if (res.data.Status === "Success" && Array.isArray(res.data.Result)) {
          setCertificates(res.data.Result);
          setError("");
        } else {
          setCertificates([]);
          setError("No certificate programmes found.");
        }
      } catch (err) {
        setError("Failed to fetch certificate programmes.");
        setCertificates([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const filteredCertificates = certificates.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-gray-600">
        Loading Certificate Programmes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="xl:pt-40 min-h-screen px-10 py-16 bg-gradient-to-br from-white via-slate-100 to-gray-200">
      <h1 className="mt-8 mb-6 text-4xl font-extrabold text-center text-indigo-800">
        Certificate Programmes
      </h1>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 text-gray-700 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCertificates.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
          >
            <img
              src={`${import.meta.env.VITE_APP_API}/${item.image}` || "/placeholder.jpg"}
              alt="Programme Logo"
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-md font-bold text-gray-800 mb-1 line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {item.description || "No description available."}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center inline-block mt-auto px-4 py-2 bg-indigo-600 text-white text-xs rounded-full hover:bg-indigo-700 transition"
              >
                Visit Programme
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesWorkshops;
