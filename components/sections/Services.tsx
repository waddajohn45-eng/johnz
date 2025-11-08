
import React from 'react';
import Section from '../Section';

const servicesData = [
  {
    icon: 'fas fa-code',
    title: 'Web & Mobile Development',
    description: 'Creating responsive websites and cross-platform mobile apps with modern technologies to elevate your online presence.',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Phone & Computer Repair',
    description: 'Providing expert hardware and software repair services to get your devices running smoothly and efficiently.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphic Design & Video Editing',
    description: 'Designing stunning visuals, from logos to motion graphics, that capture attention and tell your brand\'s story.',
  },
  {
    icon: 'fas fa-users-cog',
    title: 'Social Media & IT Consulting',
    description: 'Offering strategic IT advice and social media management to help your business grow and succeed in the digital landscape.',
  },
];

const ServiceCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="text-4xl text-[#FF8A00] mb-4 inline-block">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-[#0B3D91] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">My Services</h2>
        <p className="text-lg text-gray-600 mt-2">Delivering excellence across the digital spectrum.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
