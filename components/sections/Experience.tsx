
import React from 'react';
import Section from '../Section';

const experienceData = [
  {
    company: 'Ugahits Media',
    role: 'Lead Developer & Media Manager',
    period: '2020 - Present',
    description: 'Managed web infrastructure, led development projects, and oversaw digital media content strategy and production.'
  },
  {
    company: 'Sigmac Motors Uganda',
    role: 'IT Consultant',
    period: '2018 - 2020',
    description: 'Provided comprehensive IT support, managed network systems, and implemented new software solutions to improve business efficiency.'
  },
  {
    company: 'Cyber Computer Solution',
    role: 'Technician & Designer',
    period: '2016 - 2018',
    description: 'Specialized in computer repair, software installation, and graphic design services for a diverse range of clients.'
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">Work Experience</h2>
        <p className="text-lg text-gray-600 mt-2">My professional journey and key roles.</p>
      </div>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="mb-8 flex justify-between items-center w-full">
            <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}></div>
            <div className="z-20 flex items-center order-2 bg-[#FF8A00] shadow-xl w-8 h-8 rounded-full">
              <i className="fas fa-briefcase mx-auto text-white text-sm"></i>
            </div>
            <div className={`order-3 md:order-${index % 2 === 0 ? 3 : 1} bg-white rounded-lg shadow-xl w-5/12 px-6 py-4`}>
              <p className="text-sm font-semibold text-[#FF8A00] mb-1">{item.period}</p>
              <h3 className="mb-2 font-bold text-[#0B3D91] text-lg">{item.company}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
