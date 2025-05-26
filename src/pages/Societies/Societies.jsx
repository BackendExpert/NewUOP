import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const facultyColors = {
  "Common Societies": "bg-cyan-500",
  "Faculty of Agriculture": "bg-green-500",
  "Faculty of Allied Health Sciences": "bg-purple-500",
  "Faculty of Arts": "bg-sky-500",
  "Faculty of Dental Sciences": "bg-pink-500",
  "Faculty of Engineering": "bg-red-500",
  "Faculty of Management": "bg-orange-500",
  "Faculty of Medicine": "bg-indigo-500",
  "Faculty of Science": "bg-yellow-500",
"Faculty of Veterinary Medicine and Animal Science": "bg-teal-500",

};

const Societies = () => {
  const [societiesData, setSocietiesData] = useState([]);
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API}/society.php`, {
          params: { action: "getallsocieties" },
          headers: { "Content-Type": "application/json" },
        });

        if (res.data.Status === "Success" && Array.isArray(res.data.Result)) {
          setSocietiesData(res.data.Result);
          const faculties = Array.from(
            new Set(res.data.Result.map((soc) => soc.faculty))
          ).map((facultyName, index) => ({
            id: index + 1,
            faculty: facultyName,
          }));
          setFacultyList(faculties);
          if (faculties.length > 0) setSelectedFaculty(faculties[0].id);
        }
      } catch (error) {
        console.error("Error fetching societies:", error);
      }
    };

    fetchSocieties();
  }, []);

  const selectedFacultyObj = facultyList.find((f) => f.id === selectedFaculty);

  const filteredSocieties = societiesData.filter(
    (soc) =>
      soc.faculty === (selectedFacultyObj?.faculty || "") &&
      soc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100 xl:py-48 py-24 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-900 drop-shadow-sm mb-4">
          Explore University Societies
        </h1>
        <p className="text-sky-600 text-lg">By faculty • Connected through purpose</p>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-4">
          {facultyList.map((faculty) => (
            <motion.button
              key={faculty.id}
              onClick={() => setSelectedFaculty(faculty.id)}
              className={`
                w-full text-left px-5 py-3 rounded-xl text-white font-semibold shadow-md
                transition transform hover:scale-[1.03] duration-200
                ${selectedFaculty === faculty.id
                  ? `${facultyColors[faculty.faculty]} ring-4 ring-white`
                  : `${facultyColors[faculty.faculty]} opacity-80`
                }
              `}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: faculty.id * 0.05 }}
            >
              {faculty.faculty}
            </motion.button>
          ))}
        </aside>

        {/* Main content */}
        <section className="flex-1">
          {/* Search */}
          <div className="flex items-center mb-6 max-w-md relative">
            <Search className="absolute left-3 text-sky-500" />
            <input
              type="text"
              placeholder="Search societies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition bg-white"
            />
          </div>

          {/* Content */}
          <motion.div
            key={selectedFaculty}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredSocieties.length === 0 ? (
              <p className="text-center text-sky-600 italic mt-20">No societies found.</p>
            ) : (
              <div className="grid grid-cols-1 md: xl:grid-cols-4 gap-8">
                {filteredSocieties.map((soc) => (
                  <div
                    key={soc.id}
                    className="relative bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-4 flex flex-col items-center group transition hover:scale-[1.03]"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                      <img
                        src={`${import.meta.env.VITE_APP_API}/${soc.image}`}
                        alt={soc.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center font-semibold text-sky-900">{soc.name}</p>
                    <a
                      href={soc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-sm text-white font-semibold px-4 py-2 rounded-full transition bg-sky-500 hover:bg-sky-600 shadow"
                    >
                      Visit
                    </a>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Societies;
