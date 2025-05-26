import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Install this package
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "History of the University of Peradeniya",
    content: 
      "The University of Peradeniya is the heir to a seventy-year-old university tradition, which commenced with the inception of the University of Ceylon, the first institution of its kind to be established in Ceylon on 1st July 1942 and located in Colombo until it was shifted to the present site of great natural beauty at Peradeniya on 6th October 1952. The history of the establishment of the University of Ceylon dates much beyond 1942. Although European-style university education had an early start in India with the establishment of three universities in 1857, the colonial administration in Ceylon was in no hurry to confer the same benefits on the Ceylonese people. By the end of the nineteenth century, there was a well-developed secondary school system in the island, but only a few who had the means were able to go abroad, to Great Britain or India, to pursue university education.\n\n The first formal step in tertiary education was taken in the field of medical education with the establishment of the Ceylon Medical College in 1870. The initial plans of the Medical College were modest. It was to be an 'elementary school' for medical assistants. However, the Ceylon Medical College expanded rapidly and was sufficiently well developed by 1888 for its Licentiate in Medicine and Surgery (LMS) to be recognized by the General Medical Council of Great Britain. Thus, it became a medical school for fully-qualified medical practitioners. In 1874, a Council of Legal Education (later Law College) was formed to produce lawyers. In another development, a Technical College was established in Colombo in 1893 to train sub-professional engineering personnel. Due to the lack of a clear government policy on technical education, this college languished for many years without development. Moreover, a proposal for a University of Ceylon was developed as far back as 1884, though little progress was made on this proposal until the end of the 19th century."
  },
  {
    title: "Establishment of the Ceylon University College",
    content:
    "A significant development came in the early years of the 20th century, with the formation of the Ceylon University Association in 1906 by a group of public-spirited citizens under the leadership of Sir Ponnambalam Arunachalam (1853-1924). The initiative, influence and the sustained interest of this association led to the founding of the Ceylon University College on 1st January 1921 as a government institution at “Regina Walawwa”, Thurston Road (now Cumaratunga Munidasa Mawathe), Colombo, which was renamed “College House”. The Ceylon University College was granted recognition by the University of London to prepare students for external degrees in the fields of Arts and Science. \n\n The first principal of the Ceylon University College was Mr. Robert Marrs, who was assisted by a College Council. The staff consisted of five professors, three lecturers and four visiting lecturers and the total student enrolment was 155. The establishment of the University College was considered as only a preliminary step in the ultimate creation of a fully-fledged university. During its brief existence, the University College had produced 580 graduates of the University of London. According to an estimate prepared by the University of London in 1938, Ceylon had provided the largest quota of external students outside the United Kingdom."
  },
  {
    title: "The Battle of Sites",
    content:
    "The College Council of the Ceylon University College appointed various committees to plan the academic activities of the future university, and it also recommended a site consisting 95 acres at Bullers Road (now Bauddhaloka Mawatha) in Colombo. The government accepted these proposals, and a draft university ordinance was prepared. However, in 1926, a controversy arose over the location of the new university. This long-drawn-out controversy, better known as “the battle of sites”, divided the national leaders, who were working together at that time in the struggle for the independence of Ceylon, into two groups. \n\n On 20th December 1926, Governor Hugh Clifford appointed a Committee to consider the question of a site for the proposed university under the chairmanship of Justice M.T. Akbar. The Akbar Committee Report (later published as Sessional paper IX of 1927) recommended that the proposed university be unitary and residential and that it be established outside Colombo. The Akbar Report created a further wave of agitation and the Governor appointed another Commission in 1928 with Sir Walter Buchanan-Riddel as the Chairman. The “Riddel Report” issued in January 1929 covered all aspects of the problem of the location of the university and decided in favour of a site at Aruppola in the Dumbara Valley close to Kandy (Sessional Paper IV of 1929). In 1937, the second State Council resolved to establish the university in Kandy and an estimate was submitted to purchase land at the Aruppola site. At this stage Dr. S.C. Paul and Mr. Andreas Nell drew attention to certain disadvantages of the Aruppola site, drawing special attention to the fact of Malaria rampant in the area at the time and limited space for future expansion of the university. Their memorandum favoured a larger and more salubrious site at Peradeniya, a tea plantation on the banks of the Mahaweli River and a site of great scenic beauty, which offered easier road and rail access to the capital in Colombo and the nearby city of Kandy.\n\n The government in 1938 acquired this site where the University of Peradeniya exists at present. The extent of the land was about 700 hectares and a further 120 hectares were added later. About 150 hectares of this land were developed and landscaped to create the “University Park” in which the university complex is now located while the rest of the land remains afforested.\n\n When Dr. Ivor Jennings (later Sir Ivor Jennings) arrived in Ceylon in March 1941 to assume duties as the second Principal of the Ceylon University College, the battle of sites was long over and the site for the University at Peradeniya had been acquired, but there was no arrangement for establishing the proposed university. Dr. Jennings lost no time in submitting a memorandum to the then Minister of Education Dr. C.W.W. Kannangara in April 1941 stressing the urgent need to create the university in Colombo and then move it to Peradeniya. He prepared the draft University Ordinance by improving the draft ordinance already prepared by the Ceylon University College Council, which later became Ordinance No. 20 of 1942.",
  },
  {
    title: "Establishment of the University of Ceylon",
    content:
    "The Ceylon University Ordinance No. 20 of 1942, enacted by the State Council, conferred on the university a two-tier pattern of academic self-government with a division of powers between the Senate and the Council. The other laws required for university administration were provided by:\n\n The statutes made by the Chancellor on the recommendation of the Court,\n\n The acts made by the Council, and \n\n The regulations made by such authorities as the Council, the Senate and the Board of Residence and Discipline.\n\n The university was considered to be unitary, residential and autonomous, with its seat in Peradeniya, but until the buildings were ready it was to remain in Colombo.\n\nThe proclamation establishing the university was issued on 9th June 1942 and Dr. Jennings undertook the enormous task of establishing the university by amalgamating the Ceylon University College and the Medical College into a single unit. A unitary, residential and autonomous university was created on 1st July 1942.\n\n This University established in 1942 has however changed its identity several times as indicated below due to the change in its location and subsequent legislation:\n\n *University of Ceylon: 1942 – 1952. \n\n *University of Ceylon, Peradeniya: 1952 – 1972. \n\n *University of Sri Lanka, Peradeniya Campus: 1972 – 1978. \n\n *University of Peradeniya: 1979 to date (2012). \n\n*Those sections of the university functioning in Colombo were integrated in 1967 to form the University of Ceylon, Colombo.",
  },
  {
    title: "Moving the University to Peradeniya",
    content:
    "The Second World War (WWII), which had spread to the East by December 1941, produced an acute shortage of building materials, and in consequence the construction plans for Peradeniya had to be shelved. In the meantime the Peradeniya site had been taken over, for the duration of the war, by the armed services for setting up the headquarters of the allied South East Asia Command (SEAC). It was only in 1946 that the construction work could finally commence.\n\n Two consultants, Sir Patrick Abercrombie and Mr. Clifford Holliday, did the planning and layout of the university complex while Mr. Shirley D’Alwis attached to the Public Works Department assisted in designing work. The first phase of the project was to be entirely on the right bank of the River Mahaweli and the construction work was entrusted to the Public Works Department. The second phase was to be the building of a bridge across the River Mahaweli and the development of its left bank. However, the unprecedented floods in 1947 threw the scheme into disarray, with major changes in the layout plans becoming necessary. The extensive use of manual labour also contributed to the slow pace of construction. \n\n The multitude of challenges faced by Dr. Jennings in establishing the university at Peradeniya included the difficulties created by the escalating WWII of 1939-1945, floods in 1947, frustrating delays, bureaucratic hassles and construction problems. However, with unflagging energy, enthusiasm and resourcefulness, Dr. Jennings carried out his responsibilities and saw that the transfer of the first batch of students from Colombo to Peradeniya took place in 1952. These were students from the Departments of Law and Agriculture and the third and fourth year students of the Department of Veterinary Science, which was at that time attached to the Faculty of Medicine, Colombo. The major move took place in 1952 when the staff and students of the Faculties of Arts and Oriental Studies, together with the Main Library and the University Administration, were transferred to Peradeniya. The completion of this major move on 6 October 1952 marked the formal establishment of the University of Ceylon, Peradeniya. \n\n his important event of the university becoming fully operative at Peradeniya was celebrated in a subdued fashion, with the Vice-Chancellor planting a tree opposite the entrance to the Lodge, as the government was keen to postpone the ceremonial opening arranged for 1952, owing to the death of King George VI and until Queen Elizabeth II could participate in the opening ceremony. The postponed opening ceremony was held on 20th April 1954 with the participation of Queen Elizabeth II and the Duke of Edinburgh, who while declaring open the university stated that “You have remarked Mr. Chancellor, that it is not easy to open a university, because once established it is always open. However, like the shopkeepers of London during the bombing, I can declare this place to be “more open than usual….”",
  },
  {
    title: "University of Ceylon, Peradeniya: 1952-1972",
    content:
      "The first experiment in university education that commenced in Colombo in 1942 and continued in Peradeniya from 1952 proved to be an enormous success. The demand for higher education increased rapidly in the succeeding years. Vidyodaya and Vidyalankara Universities were established in 1958, but this did not satisfy the increased demand for university education. Therefore, in 1962, out of over 1000 students admitted to the Faculty of Arts, University of Ceylon, Peradeniya, 692 were admitted as external students, as they could not be provided residential and library facilities.\n\n Following serious student unrest in Peradeniya in 1965, the government announced its plans for a reorganization of the university system. The proposals were outlined in the Higher Education Act No. 20 of 1966, the aim of which was to introduce a measure of state control and to curb academic self-government. Several structural changes were introduced in order to achieve this objective. The University Courts were abolished and the Councils were replaced by Boards of Regents. A National Council for Higher Education (NCHE) was set up in Colombo to supervise and regulate the universities. Under the new Act, the Vice-Chancellors would be selected rather than elected. \n\n The University of Ceylon continued to function as University of Ceylon, Peradeniya, while those sections of the university operating in Colombo continued as the Colombo campus of the university until 1967, when they were split into two separate and independent universities. Thereafter, the University in Peradeniya continued to function as the University of Ceylon, Peradeniya, while the Colombo campus obtained a new identity as University of Ceylon, Colombo.",
  },
  {
    title: "University of Sri Lanka – Peradeniya Campus: 1972-1978",
    content:
    "When a new government took office in 1970, winds of change were felt in the academic groves. Details of the new order were spelt out in the University Act No.1 of 1972 by which the four universities (Peradeniya, Colombo, Vidyodaya and Vidyalankara) and the Ceylon College of Technology at Katubedda, Moratuwa, became five constituent campuses of a single university structure, the University of Sri Lanka, having a central administration in Colombo. The Heads of campuses were designated as Campus Presidents and the Minister of Education appointed the Vice-Chancellor of the single University of Sri Lanka. \n\n Under this system of centralized control, the NCHE was abolished, the Boards of Regents were swept away, and the Senates of the Campuses were given diminished roles as advisory bodies. This radical change brought about a further change in the identity of the University of Ceylon, Peradeniya, which now became University of Sri Lanka, Peradeniya Campus. These changes have had far-reaching consequences. A great many changes were also introduced under a process of “rationalization” that affected institutions as well as individuals. The academic regrouping involved the closure (or transfer) of certain departments, merger of faculties, and the transfer of personnel to new “centres of excellence”. However, these measures could not find lasting solutions to the continuing problems in higher education, until the change of government in 1977.",
  },
  {
    title: "University of Peradeniya under the Universities Act No. 16 of 1978",
    content:
    "The new government that came into power in 1977 drew up new legislation to replace the University Act No.1 of 1972, which could not be implemented in full for over 5 years. The Universities Act No.16 of 1978 based on the new Universities Bill came into effect on 1st January 1979. This Act brought back some of the central features of the Ceylon University Ordinance of 1942 with a difference: the powers of the Senates were restored, the Councils and Courts were re-established and elections for the posts of Vice-Chancellor re-introduced. The independence of the universities was restored but the creation of a University Grants Commission (UGC) with wider powers than those traditionally associated with such bodies, brought in a new measure of control over the finances, student admissions, and scheme of recruitment and promotions in universities.\n\n The most significant change that the Universities Act No.16 of 1978 brought to Peradeniya was the restoration of the university’s autonomy under the new identity “University of Peradeniya”. Although this identity has been maintained for over 34 years until the present day (2012), the full history of the university extends for 70 years from 1942. Therefore, a very brief summary of academic activities during this period is necessary.",
  },
];

export default function HistoryPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-15">
      <div className="px-4 mt-10 text-center">
      <h1 className="mt-8 mb-4 text-4xl font-bold text-blue-900">History & Heritage</h1>
      </div>
      {/* Slider Section */}
      <div className="w-full max-w-6xl mt-8">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          className="overflow-hidden shadow-lg rounded-2xl"
        >

          <div>
            <img src="../src/assets/history1.jpg" alt="History 1" className="object-cover h-[500px] w-full" />
          </div>
          <div>
            <img src="../src/assets/history3.jpg" alt="History 3" className="object-cover h-[600px] w-full" />
          </div>
          <div>
            <img src="../src/assets/13.jpg" alt="History 2" className="object-cover h-[500px] w-full" />
          </div>
          <div>
            <img src="../src/assets/history2.jpg" alt="History 3" className="object-cover h-[500px] w-full" />
          </div>

        </Carousel>
      </div>

      {/* Title Section */}
      <div className="px-4 mt-10 text-center">
        <p className="max-w-6xl mx-auto text-justify text-black-600">
        History & Heritage

The University of Peradeniya is the heir to a seventy year old University tradition which commenced with the inception of the University of Ceylon, the first institution of its kind established in Colombo on 1 July 1942. It moved to the banks of Mahaweli River, the longest in the Country, in 1952. However the history of its evolution as the oldest and the largest University in the country pass through the following stages.

    1942 to 1952 University of Ceylon
    1952 to 1972 University of Ceylon Peradeniya
    1972 to 1978 Peradeniya Campus, University of Sri Lanka
    Since 1978 University of Peradeniya

Sir Ivor Jennings the first Vice-Chancellor, on his first visit to the campus site in 1944 with the site plan of the architect Sir Patrick Abercrombie’s, has written,

“No University in the world would have such a setting”.
<br />
<br />
The University is located in Peradeniya in the Central Province, which bares lush greenery vegetation and mist-clad mountains, approximately 6 km from the City of Kandy, the historic Capital of the last independent Kingdom and 110 km from Colombo, Capital of Sri Lanka, and can be reached within two to three hours by public road or by railway.

The access to the University premises is through Galaha Road from the turn off near the historic Royal Botanical Gardens of Peradeniya, a popular tourist and lovers’ attraction, famous for its rare tropical plants and orchids

The University covers about 700 hectares of land and the developed area covering approximately 130 hectares is occupied by buildings of the Faculties, Halls of Residence, Staff bungalows etc.

Throughout the campus most trees begin to bear flowers in early March signaling the coming of spring. Lovers’ Lane, Kissing Bend, open-air theater and the lower Hantana Road display a rare aesthetic beauty through the rich foliage.
        </p>
        
      </div>

      {/* Expandable Sections */}
      <div className="w-full max-w-6xl px-4 mt-10 space-y-4 text-justify">
        {sections.map((section, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-xl">
            <button
              onClick={() => toggleSection(index)}
              className="flex items-center justify-between w-full text-lg font-semibold text-left"
            >
              {section.title}
              {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-base text-gray-600 whitespace-pre-line">{section.content}</p>
            )}
          </div>
        ))}
      </div>

      <div className="h-20"></div> {/* Spacer at bottom */}
    </div>
  );
}


import React, { useRef, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const sections = [
  {
    title: "History of the University of Peradeniya",
    content: "The University of Peradeniya is the heir to a seventy year old University tradition which commenced with the inception of the University of Ceylon, the first institution of its kind established in Colombo on 1 July 1942. It moved to the banks of Mahaweli River, the longest in the Country, in 1952. However the history of its evolution as the oldest and the largest University in the country pass through the following stages. \n\n *1942 to 1952 University of Ceylon\n\n *1952 to 1972 University of Ceylon Peradeniya \n\n *1972 to 1978 Peradeniya Campus, University of Sri Lanka \n\n *Since 1978 University of Peradeniya \n\n Sir Ivor Jennings the first Vice-Chancellor, on his first visit to the campus site in 1944 with the site plan of the architect Sir Patrick Abercrombie’s, has written, \n\n “No University in the world would have such a setting”. \n\n The University is located in Peradeniya in the Central Province, which bares lush greenery vegetation and mist-clad mountains, approximately 6 km from the City of Kandy, the historic Capital of the last independent Kingdom and 110 km from Colombo, Capital of Sri Lanka, and can be reached within two to three hours by public road or by railway. \n\n The access to the University premises is through Galaha Road from the turn off near the historic Royal Botanical Gardens of Peradeniya, a popular tourist and lovers’ attraction, famous for its rare tropical plants and orchids \n\n The University covers about 700 hectares of land and the developed area covering approximately 130 hectares is occupied by buildings of the Faculties, Halls of Residence, Staff bungalows etc. \n\n Throughout the campus most trees begin to bear flowers in early March signaling the coming of spring. Lovers’ Lane, Kissing Bend, open-air theater and the lower Hanthana Road display a rare aesthetic beauty through the rich foliage.",
        
    image: "../src/assets/history1.jpg",
  },
  {
    title: "History of the University of Peradeniya",
    content: "The University of Peradeniya is the heir to a seventy-year-old university tradition...",
    image: "../src/assets/history2.jpg",
  },
  {
    title: "Establishment of the Ceylon University College",
    content: "A significant development came in the early years of the 20th century...",
    image: "../src/assets/history3.jpg",
  },
  {
    title: "The Battle of Sites",
    content: "The College Council of the Ceylon University College appointed various committees...",
    image: "../src/assets/13.jpg",
  },
  {
    title: "Establishment of the University of Ceylon",
    content: "The Ceylon University Ordinance No. 20 of 1942, enacted by the State Council...",
    image: "/images/peradeniya4.jpg",
  },
  {
    title: "Moving the University to Peradeniya",
    content: "The Second World War (WWII), which had spread to the East by December 1941...",
    image: "/images/peradeniya5.jpg",
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
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-gray-100 to-gray-300">
      <HTMLFlipBook
        width={600}
        height={400}
        size="stretch"
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={false}  // Important: false, we control cover manually
        mobileScrollSupport={true}
        ref={book}
        className="shadow-2xl"
      >
        {/* Cover Page */}
<div className="flex items-center justify-center w-full h-full bg-white shadow-md">
  <div className="text-center"> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <h1 className="text-5xl font-bold text-[#800000]">
              History and Heritage
    </h1>
  </div>
</div>

        {/* Regular Section Pages */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col w-full h-full overflow-hidden bg-white shadow-md"
          >
            <div className="flex flex-row flex-1">
              {/* Left side: Image */}
              <div className="flex items-center justify-center w-1/2 p-3">
                <img
                  src={section.image}
                  alt={`History ${index}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Right side: Content */}
              <div className="flex flex-col justify-center w-1/2 p-5">
                <h2 className="mb-3 text-xl font-bold text-gray-800">{section.title}</h2>
                <p className="text-sm leading-relaxed text-justify text-gray-600">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default HistoryBook;
