import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function DiplomaProgrammes() {
  const [search, setSearch] = useState("");
  const [diplomas, setDiplomas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDiplomas = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API}/diploma.php`, {
          params: { action: "getalldips" },
          headers: { "Content-Type": "application/json" },
        });

        console.log("API response:", res.data);

        if (res.data.Status === "Success" && Array.isArray(res.data.Result)) {
          setDiplomas(res.data.Result);
          setError("");
        } else {
          setDiplomas([]);
          setError("No diplomas found.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch diploma programmes.");
        setDiplomas([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDiplomas();
  }, []);

  const filteredDiplomas = diplomas.filter(
    (item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl text-gray-600">
        Loading Diploma Programmes...
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
    <div className="xl:pt-40 pt-8 min-h-screen px-6 py-16 bg-gradient-to-br from-white via-slate-100 to-gray-200">
      <h1 className="mt-20 mb-6 text-4xl font-extrabold text-center text-indigo-800">
        Diploma Programmes
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

      <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {filteredDiplomas.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col h-[380px]"
          >
            <img
              src={`${import.meta.env.VITE_APP_API}/${item.image}` || "/placeholder.jpg"}
              alt="Programme Logo"
              className="h-[50%] w-full object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-md font-bold text-gray-800 mb-1">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>

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
}
