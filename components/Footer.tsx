
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: '#', icon: 'fab fa-youtube' },
    { href: '#', icon: 'fab fa-facebook-f' },
    { href: '#', icon: 'fab fa-linkedin-in' },
    { href: '#', icon: 'fab fa-instagram' },
  ];

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#0B3D91] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Johnz Empire</h3>
        <p className="max-w-md mx-auto mb-6 text-gray-300">
          Crafting digital solutions that empower businesses and individuals.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-xl hover:bg-[#FF8A00] transition-all duration-300"
              aria-label={`Follow on ${link.icon.split('-')[1]}`}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-8">
            {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                </a>
            ))}
        </div>
        <div className="border-t border-white border-opacity-20 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Johnz Empire. All Rights Reserved. Designed by Wadda John.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
