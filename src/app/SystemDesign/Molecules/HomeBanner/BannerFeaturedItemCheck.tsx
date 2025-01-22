'use client';

import React from 'react';
import Paragraph from '@/app/SystemDesign/Atoms/commons/Paragraph';
import Check from '@/app/SystemDesign/Icons/Check';

interface FeaturedItemCheck {
  title: string;
}

interface BannerFeaturedItemCheckProps {
  featureItemChecks: FeaturedItemCheck[];
}

const BannerFeaturedItemCheck: React.FC<BannerFeaturedItemCheckProps> = ({ featureItemChecks }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        {featureItemChecks.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="relative flex items-center">
              <div className="h-7 w-7 md:h-10 md:w-10 rounded-md md:rounded-lg flex items-center justify-center bg-gray-200 shadow-md">
                {' '}
                <Check />
              </div>
            </div>
            <Paragraph className="font-bold text-white text-sm md:text-lg ml-2">{item.title}</Paragraph>
          </div>
        ))}
      </div>
      <Paragraph className={`w-full lg:hidden block font-bold text-lg text-left underline text-yellow-300 mt-8`}>
        개발자가 필요하신가요?
      </Paragraph>
    </div>
  );
};

export default BannerFeaturedItemCheck;
