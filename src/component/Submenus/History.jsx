import React, { useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const sections = [
  {
    title: "History of the University of Peradeniya",
    content:
      "The University of Peradeniya is the heir to a seventy-year-old University tradition which commenced with the inception of the University of Ceylon, the first institution of its kind established in Colombo on 1 July 1942. It moved to the banks of Mahaweli River, the longest in the Country, in 1952. However the history of its evolution as the oldest and the largest University in the country pass through the following stages.\n\n*1942 to 1952 University of Ceylon\n\n*1952 to 1972 University of Ceylon Peradeniya\n\n*1972 to 1978 Peradeniya Campus, University of Sri Lanka\n\n*Since 1978 University of Peradeniya\n\nSir Ivor Jennings the first Vice-Chancellor, on his first visit to the campus site in 1944 with the site plan of the architect Sir Patrick Abercrombie’s, has written:\n\n“No University in the world would have such a setting”.\n\nThe University is located in Peradeniya in the Central Province, which bares lush greenery vegetation and mist-clad mountains, approximately 6 km from the City of Kandy, the historic Capital of the last independent Kingdom and 110 km from Colombo, Capital of Sri Lanka, and can be reached within two to three hours by public road or by railway.\n\nThe access to the University premises is through Galaha Road from the turn off near the historic Royal Botanical Gardens of Peradeniya, a popular tourist and lovers’ attraction, famous for its rare tropical plants and orchids.\n\nThe University covers about 700 hectares of land and the developed area covering approximately 130 hectares is occupied by buildings of the Faculties, Halls of Residence, Staff bungalows etc.\n\nThroughout the campus most trees begin to bear flowers in early March signaling the coming of spring. Lovers’ Lane, Kissing Bend, open-air theater and the lower Hanthana Road display a rare aesthetic beauty through the rich foliage.",
    image: "",
  },
  {
    title: "History of the University of Peradeniya",
    content: "The University of Peradeniya is the heir to a seventy-year-old university tradition...",
    image: "../src/assets/history1.jpg",
  },
  {
    title: "Establishment of the Ceylon University College",
    content: "A significant development came in the early years of the 20th century...",
    image: " ",
  },
  {
    title: "The Battle of Sites",
    content: "The College Council of the Ceylon University College appointed various committees...",
    image: "../src/assets/13.jpg",
  },
  {
    title: "Establishment of the University of Ceylon",
    content: "The Ceylon University Ordinance No. 20 of 1942, enacted by the State Council...",
    image: "",
  },
  {
    title: "Moving the University to Peradeniya",
    content: "The Second World War (WWII), which had spread to the East by December 1941...",
    image: "../src/assets/history2.jpg",
  },
];

const HistoryBook = () => {
  const book = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        book.current.pageFlip().flipNext();
      } else if (e.key === "ArrowLeft") {
        book.current.pageFlip().flipPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex items-center justify-start min-h-screen p-4 bg-gradient-to-r from-gray-100 to-gray-300">
      <HTMLFlipBook
        width={600}
        height={400}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        ref={book}
        className="shadow-2xl"
      >
        {/* Cover Page */}
        <div className="flex items-center justify-center w-full h-full bg-white shadow-md">
          <div className="p-4 text-center">
            <h1 className="text-5xl font-bold text-[#800000] mb-4">
              History and Heritage
            </h1>
            <div className="flex items-center justify-start w-full h-full">
  <img
    src="../src/assets/"
    alt="Cover"
    className="object-contain max-w-full "
  />
</div>


          </div>
        </div>

        {/* Regular Pages */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex w-full h-full overflow-hidden bg-white shadow-md"
          >
            {/* Left page: Image */}
            <div className="flex items-center justify-center h-full p-3 bg-gray-100 w-1/1">
              <img
                src={section.image}
                alt={`History ${index}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Right page: Text Content */}
            <div className="flex flex-col justify-center h-full p-5 bg-white ">
              <h2 className="mb-3 text-xl font-bold text-gray-800">{section.title}</h2>
              <p className="text-sm leading-relaxed text-justify text-gray-600 whitespace-pre-line">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default HistoryBook;
