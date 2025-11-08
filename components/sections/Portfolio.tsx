
import React, { useState, useMemo } from 'react';
import Section from '../Section';
import { projects } from '../../data/portfolioData';

type Category = 'All' | 'Websites' | 'Mobile Apps' | 'Graphics' | 'Videos';
const categories: Category[] = ['All', 'Websites', 'Mobile Apps', 'Graphics', 'Videos'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section id="portfolio" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">My Portfolio</h2>
        <p className="text-lg text-gray-600 mt-2">A selection of my recent work.</p>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors text-sm md:text-base ${
              activeFilter === category
                ? 'bg-[#0B3D91] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="group rounded-lg overflow-hidden shadow-lg relative cursor-pointer">
            <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
