import React, { useState } from "react";
import { motion } from "framer-motion";

const diplomaData = [
  {
    name: "Diploma in Management and Development",
    offeredBy: "Centre for Distance and Continuing Education (CDCE)",
    link: "https://cdce.pdn.ac.lk/diploma2.php",
    logo: "/mgt.png",
    skills: "Leadership, Strategic Planning, Public Management"
  },
  {
    name: "Diploma in Library and Information Services",
    offeredBy: "Centre for Distance and Continuing Education (CDCE)",
    link: "https://cdce.pdn.ac.lk/diploma2.php",
    logo: "/library1.jpg",
    skills: "Cataloging, Digital Archiving, Research Tools"
  },
  {
    name: "Diploma in Early Childhood Care and Development",
    offeredBy: "Centre for Distance and Continuing Education (CDCE)",
    link: "https://cdce.pdn.ac.lk/diploma2.php",
    logo: "/child.jpg",
    skills: "Child Psychology, Educational Play, Communication"
  },
  {
    name: "Diploma in Laboratory Technology",
    offeredBy: "Centre for Distance and Continuing Education (CDCE)",
    link: "https://cdce.pdn.ac.lk/diploma2.php",
    logo: "/lab.jpeg",
    skills: "Lab Safety, Sample Analysis, Instrumentation"
  },
  {
    name: "Diploma in Computing and Electronics",
    offeredBy: "Centre for Distance and Continuing Education (CDCE)",
    link: "https://cdce.pdn.ac.lk/diploma2.php",
    logo: "/computer.jpeg",
    skills: "Programming, Microcontrollers, Digital Logic"
  },
  {
    name: "Diploma in Exercise and Sport Sciences",
    offeredBy: "Faculty of Medicine",
    link: "https://med.pdn.ac.lk/departments/sportsciences/index.php",
    logo: "/sport.jpeg",
    skills: "Fitness Assessment, Sports Psychology, Training"
  },
  {
    name: "Diploma in Human Rights",
    offeredBy: "Centre for the Study of Human Rights",
    link: "https://arts.pdn.ac.lk/cshr/",
    logo: "/hr1.jpeg",
    skills: "Law, Ethics, International Policy"
  }
];

export default function DiplomaProgrammes() {
  const [search, setSearch] = useState("");

  const filteredDiplomas = diplomaData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.offeredBy.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="xl:pt-40 pt-8 min-h-screen px-6 py-16 bg-gradient-to-br from-white via-slate-100 to-gray-200">
      <h1 className="mt-20 mb-6 text-4xl font-extrabold text-center text-indigo-800">
        Diploma Programmes
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
            {/* Image takes 50% */}
            <img
              src={item.logo}
              alt="Programme Logo"
              className="h-[50%] w-full object-cover"
            />

            {/* Card body */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-md font-bold text-gray-800 mb-1">{item.name}</h2>
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

              <p className="text-xs text-gray-500 italic">
                Skills: {item.skills}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
