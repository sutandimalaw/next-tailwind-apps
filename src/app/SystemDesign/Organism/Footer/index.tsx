'use client';

import React from 'react';
import ImageComponent from '@/app/SystemDesign/Atoms/commons/ImageComponent';
import Paragraph from '@/app/SystemDesign/Atoms/commons/Paragraph';
import FeatureCard from '@/app/SystemDesign/Molecules/Footer/FeatureCard';
import ContactInfo from '@/app/SystemDesign/Molecules/Footer/ContactInfo';
import CompanyInfo from '@/app/SystemDesign/Molecules/Footer/CompanyInfo';
import { featureList } from '@/constants/footer-data';

const Footer: React.FC = () => {
  return (
    <footer className="footer flex flex-col bg-gray-100 px-5 py-10 md:py-20 md:px-20">
      <div className="flex flex-col gap-14 container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex md:flex-2 flex-col gap-10 w-full md:w-[30%]">
            <div className="flex flex-col gap-2 w-full md:w-[70%]">
              <ImageComponent width={187} height={34} src="/images/logo-horizontal-colored.png" alt="logo" />
              <Paragraph className="font-bold">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</Paragraph>
            </div>
            <ContactInfo phone="010-0000-0000" email="aaaaa@naver.com" />
          </div>

          <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:grid-rows-1 grid grid-cols-2 gap-4 grid-rows-2">
            {featureList.map((feature) => (
              <FeatureCard key={feature.text} image={feature.image} text={feature.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14">
          <CompanyInfo label="상호명" title="하이퍼하이어" description="Hyperhire India Private Limited" />
          <CompanyInfo label="대표 CEO" title="김주현" description="Juhyun Kim" />
          <CompanyInfo label="사업자등록번호 CIN" title="427-86-01187" description="U74110DL2016PTC290812" />
          <CompanyInfo
            label="주소 ADDRESS"
            title="서울특별시 강남대로 479, 지하 1층 238호"
            description="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
          />
        </div>

        <div className="flex">
          <Paragraph className="text-sm">
            ⓒ <span className="font-black text-gray-500">2024 Hyperhire</span>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
