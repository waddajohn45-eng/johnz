
import React, { useEffect, useState, useRef } from 'react';
import Section from '../Section';

interface SkillBarProps {
  skill: string;
  percentage: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, inView }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [inView, percentage]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-medium text-[#0B3D91]">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#FF8A00] h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const skills = [
    { name: 'HTML, CSS, JS', level: 95 },
    { name: 'PHP & Bootstrap', level: 90 },
    { name: 'Dart/Flutter', level: 85 },
    { name: 'Graphic Design', level: 92 },
    { name: 'Video Editing', level: 88 },
    { name: 'IT Support', level: 98 },
  ];
  
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91]">About Me</h2>
        <p className="text-lg text-gray-600 mt-2">A passionate creator at the intersection of technology and design.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-center">
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Biography</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            I'm Wadda John, a 25-year-old multi-disciplinary tech professional from Uganda, widely known as Johnz Empire. My journey in the digital world is fueled by a passion for solving problems and creating impactful experiences. From developing robust software to crafting stunning visuals, I thrive on turning complex ideas into reality.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            My educational background from St. Mary's Primary Mukono, St. Joseph's SS Kakindu, and St. Peter's University laid a strong foundation, which I've built upon with hands-on experience at companies like Cyber Computer Solution, Sigmac Motors Uganda, and Ugahits Media.
          </p>
          <a href="#cv" className="bg-[#0B3D91] text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform transform hover:scale-105 inline-block">
            <i className="fas fa-download mr-2"></i> Download CV
          </a>
        </div>
        <div className="md:col-span-2" ref={sectionRef}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Skills</h3>
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} percentage={skill.level} inView={isInView} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
