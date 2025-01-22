'use client';

import React, { useState, useEffect, useRef, FC } from 'react';
import Heading from '@/app/SystemDesign/Atoms/commons/Heading';
import Card from '@/app/SystemDesign/Atoms/commons/Card';
import Button from '@/app/SystemDesign/Atoms/commons/Button';
import ChevronLeftIcon from '@/app/SystemDesign/Icons/ChevronLeft';
import ChevronRightIcon from '@/app/SystemDesign/Icons/ChevronRight';
import '@/app/styles/_banner-slider.scss';
import ImageComponent from '@/app/SystemDesign/Atoms/commons/ImageComponent';
import ColombiaFlag from '@/app/SystemDesign/Icons/ColombiaFlag';
import BadgeArrow from '@/app/SystemDesign/Atoms/commons/BadgeArrow';

interface Slide {
  id: number;
  image: string;
  name: string;
  description: string;
  years: string;
  skillsets: string[];
}

interface SliderProps {
  slides: Slide[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const flexContainerRef = useRef<HTMLDivElement>(null);
  const slidesCount = slides.length;

  const handleNext = () => setSelectedIndex((prev) => (prev + 1) % slidesCount);
  const handlePrevious = () => setSelectedIndex((prev) => (prev - 1 + slidesCount) % slidesCount);
  const handleCheck = (index: number) => setSelectedIndex(index);

  const getSlideClassName = (index: number) => {
    if (index === selectedIndex) return 'is-active';
    if (index === (selectedIndex - 1 + slidesCount) % slidesCount) return 'is-left';
    if (index === (selectedIndex + 1) % slidesCount) return 'is-right';
    return '';
  };

  useEffect(() => {
    const adjustHeight = () => {
      const currentSlide = document.getElementById(`slide${slides[selectedIndex].id}`);
      const badgeHeight = 150;
      if (flexContainerRef.current && currentSlide) {
        const slideHeight = currentSlide.offsetHeight;
        flexContainerRef.current.style.height = `${slideHeight + badgeHeight}px`;
      }
    };

    adjustHeight();

    const resizeObserver = new ResizeObserver(adjustHeight);
    const currentRef = flexContainerRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [selectedIndex, slides]);

  return (
    <div ref={flexContainerRef} className="flex relative animate-fadeIn">
      <Button
        className="-ml-3 md:ml-10"
        bgColor="transparent"
        hoverBgColor="transparent"
        padding="p-0"
        onClick={handlePrevious}>
        <ChevronLeftIcon />
      </Button>

      <section className="slider flex flex-col items-center justify-center w-[60%] md:w-[300px] lg:w-[250px] xl:w-[330px]">
        {slides.map((slide, index) => (
          <input
            key={slide.id}
            type="radio"
            name="slider"
            id={`s${slide.id}`}
            checked={selectedIndex === index}
            onChange={() => handleCheck(index)}
            className="hidden"
          />
        ))}

        {slides.map((slide, index) => (
          <Card
            key={slide.id}
            className={`flex flex-col items-center justify-center slider-item py-10 ${getSlideClassName(index)}`}
            id={`slide${slide.id}`}>
            <div
              className={`absolute -top-20 transition-opacity duration-300 ${index === selectedIndex ? 'opacity-100' : 'opacity-0'}`}>
              <BadgeArrow className="top-0 left-0">
                <div className="flex items-center gap-3">
                  <ImageComponent
                    src="/images/dollar-circle-green-icon.png"
                    alt="dollar-circle-green-icon"
                    width={26}
                    height={26}
                  />
                  <span className="font-bold">월 100만원</span>
                </div>
              </BadgeArrow>
            </div>

            <ImageComponent
              src={slide.image}
              alt={slide.image}
              width={120}
              height={120}
              className="rounded-full"
              badge={<ColombiaFlag />}
              badgePosition="bottom-right"
            />
            <Heading level={2} className="font-bold text-center text-black mt-3">
              {slide.name}
            </Heading>
            <Heading level={3} className="font-medium text-blue-500">
              {slide.description} · <span className="font-bold">{slide.years}</span>
            </Heading>
            <div className="flex flex-wrap gap-1 justify-center mt-4">
              {slide.skillsets.map((skillset) => (
                <span
                  key={skillset}
                  className="text-sm md:text-lg inline-flex items-center rounded-md px-2 py-1 font-bold text-gray-500 ring-1 ring-inset ring-gray-500/50">
                  {skillset}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </section>

      <Button
        className="-mr-3 md:mr-10"
        bgColor="transparent"
        hoverBgColor="transparent"
        padding="p-0"
        onClick={handleNext}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};

export default Slider;
