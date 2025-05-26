import React from "react";

const Crest = () => {
  return (
    <div className="flex flex-col items-center max-w-4xl px-6 xl:py-56 py-28 mx-auto bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-[#800000] mb-10 tracking-wide drop-shadow-md">
        University Crest
      </h1>

      {/* Central Image */}
      <div className="mb-12">
        <img
          src="../src/assets/logo1.png" // Confirm this path is correct
          alt="University Crest Lion"
          className="w-64 h-64 mx-auto object-contain rounded-full border-4 border-[#800000] shadow-lg animate-pulse"
        />
      </div>

      {/* Paragraph Section */}
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl text-gray-700 prose prose-indigo prose-lg leading-relaxed text-justify">
        <p>
          In establishing its identity at its inception in 1942, the then
          University of Ceylon decided that a coat-of-arms would not be in
          keeping with the traditions of an oriental country. Instead, it chose
          a seal with a lion motif that has remained the university’s logo
          since then though small changes were made during the University’s
          transformation into the University of Peradeniya. The original Logo of
          the university consisted of a lion – the lion being the symbol of
          nation – surrounded by a circle containing the Sanskrit motto{" "}
          <em>Sarvasya Locanam Sastram</em> (knowledge is the eye unto all) and
          the words ‘University of Ceylon’ in English. Outside the circle was a
          design of ‘Pala Pethi’, a symbol of purity and wisdom in indigenous
          art, represented here by the stylized lotus petals of the Kandyan
          Period. The colours of the Logo are gold on maroon.
        </p>
        <p>
          In 1978, when the University of Peradeniya became an independent
          entity, the Council adopted the Logo of the University of Ceylon
          without the Sanskrit motto, but with the words ‘University of
          Peradeniya’ in Sinhala, Tamil and English. The annual reports from
          1979 came to carry the Sanskrit aphorism from ‘Hitopadesha’,{" "}
          <em>Vidya Dadati Vinayam</em> (Knowledge gives discipline). In 1991,
          the Council of the University decided to restore the original
          Sanskrit Motto to the University Logo.
        </p>
        <p>
          As it was observed that the shape of the ‘Pala Pethi’ and the original
          colour combinations have changed over the years, in 2011, the Council
          decided to restore all the features of the Logo in accordance with
          its original design, which is currently in use as the Logo of the
          University of Peradeniya.
        </p>
      </div>
    </div>
  );
};

export default Crest;
