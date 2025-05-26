import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Images (adjust path as needed)
import img1 from '../../assets/rank1.jpg';
import img2 from '../../assets/rank2.jpeg';
import img3 from '../../assets/rank3.jpg';
import img4 from '../../assets/rank4.jpg';

// Register Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const rankingsData = {
  title: 'University Rankings',
  description:
    'The University of Peradeniya, the oldest, largest and most comprehensive university in Sri Lanka, has been ranked number one in the country by the Times Higher Education Rankings for four consecutive years.',
  tableData: [
    { type: 'Times Higher Education University Rankings', islandRank: 2, asiaRank: 'NA', worldRank: '1001-1200' },
    { type: 'Times Higher Education Impact Rankings', islandRank: 1, asiaRank: 93, worldRank: '601-800' },
    { type: 'U.S. News & World Report University Rankings', islandRank: 1, asiaRank: 360, worldRank: 1121 },
    { type: 'QS University Rankings', islandRank: 2, asiaRank: 350, worldRank: '1201-1400' },
    { type: 'Webometrics Ranking of World Universities', islandRank: 2, asiaRank: 696, worldRank: 2016 },
    { type: 'UI GreenMetric World University Rankings', islandRank: 1, asiaRank: 101, worldRank: 192 },
  ],
  highlights: [
    { text: 'Secured #1 in Normalized Citation Impact.' },
    { text: 'Ranked #2 in Sri Lanka by Webometrics 2023.' },
    { text: 'Gold Award for Best Annual Report 2020 (University Category).' },
  ],
  sliderImages: [img1, img2, img3],
};

const RankingsPage = () => {
  return (
    <div className="container max-w-6xl px-4 xl:py-48 py-24 mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-blue-600 drop-shadow-md font-serif">
          {rankingsData.title}
        </h1>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
          {rankingsData.description}
        </p>
      </div>

      {/* Table as Modern Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {rankingsData.tableData.map((row, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">{row.type}</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Island Rank:</strong> {row.islandRank}</li>
              <li><strong>Asia Rank:</strong> {row.asiaRank}</li>
              <li><strong>World Rank:</strong> {row.worldRank}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center text-indigo-800">Ranking Highlights</h2>
        <ul className="mt-6 space-y-5 max-w-3xl mx-auto text-lg text-gray-700">
          {rankingsData.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-600 text-2xl mt-1">✔</span>
              <p>{highlight.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Swiper Slider */}
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-center text-indigo-800 mb-6">Research Highlights</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{ delay: 4000 }}
          className="max-w-xl mx-auto"
        >
          {rankingsData.sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300">
                <img
                  src={image}
                  alt={`Research Highlight ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RankingsPage;
