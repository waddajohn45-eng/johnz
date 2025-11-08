
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onHireMeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHireMeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#0B3D91]' : 'text-white'}`}>
            Johnz Empire
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#FF8A00]' : 'text-gray-200 hover:text-white'}`}>
                {link.label}
              </a>
            ))}
            <button
              onClick={onHireMeClick}
              className="bg-[#FF8A00] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
            >
              Hire Me
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none ${isScrolled ? 'text-[#0B3D91]' : 'text-white'}`}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF8A00] hover:bg-gray-50">
              {link.label}
            </a>
          ))}
          <button
              onClick={() => {
                onHireMeClick();
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-[#FF8A00] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105"
            >
              Hire Me
            </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
