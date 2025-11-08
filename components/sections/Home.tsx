
import React from 'react';

interface HomeProps {
  onHireMeClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onHireMeClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center px-4">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://picsum.photos/seed/banner/1920/1080')` }}></div>
      <div className="absolute inset-0 bg-[#0B3D91] opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="https://picsum.photos/seed/wadda/200/200" alt="Wadda John" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">Wadda John</h1>
        <p className="text-lg md:text-2xl font-light text-gray-200 mb-8">
          Software Developer | IT Consultant | Digital Media Specialist
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onHireMeClick}
            className="bg-[#FF8A00] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Hire Me
          </button>
          <a
            href="#portfolio"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-[#0B3D91] transition-all"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
