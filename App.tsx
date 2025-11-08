
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import HireMeModal from './components/HireMeModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#F6F7F9] text-gray-800">
      <Header onHireMeClick={openModal} />
      <main>
        <Home onHireMeClick={openModal} />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {isModalOpen && <HireMeModal onClose={closeModal} />}
    </div>
  );
}

export default App;
