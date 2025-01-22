'use client';

import React, { useEffect, useState } from 'react';
import Heading from '@/app/SystemDesign/Atoms/commons/Heading';
import Paragraph from '@/app/SystemDesign/Atoms/commons/Paragraph';
import BadgeArrow from '@/app/SystemDesign/Atoms/commons/BadgeArrow';

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    description: false,
    badge: false,
  });

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, title: true }));
    }, 0);

    const timer2 = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, description: true }));
    }, 500);

    const timer3 = setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, badge: true }));
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="flex mb-3">
        <BadgeArrow
          position="start"
          className={`transition-opacity delay-300 ${isVisible.badge ? 'opacity-100' : 'opacity-0'}`}
          textClassName={`text-cyan-400 font-bold duration-500 delay-300`}>
          풀타임, 파트타임
        </BadgeArrow>
      </div>
      <Heading
        level={1}
        className={`font-bold text-white transform transition-all duration-500 ${isVisible.title ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        {title}
      </Heading>
      <Heading
        level={2}
        className={`font-bold text-white transform transition-all duration-500 delay-300 ${isVisible.description ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        {description}
      </Heading>
      <Paragraph
        className={`hidden md:block font-bold text-lg text-left underline text-white transition-all duration-500 delay-300 ${isVisible.description ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        개발자가 필요하신가요?
      </Paragraph>
    </div>
  );
};

export default Hero;
