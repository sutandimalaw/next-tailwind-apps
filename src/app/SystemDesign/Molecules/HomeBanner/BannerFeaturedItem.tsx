'use client';

import { useEffect, useRef, useState } from 'react';
import Card from '@/app/SystemDesign/Atoms/commons/Card';
import Paragraph from '@/app/SystemDesign/Atoms/commons/Paragraph';
import ImageComponent from '@/app/SystemDesign/Atoms/commons/ImageComponent';

interface FeaturedItem {
  image: string;
  title: string;
}

interface BannerFeaturedItemProps {
  featuredItems: FeaturedItem[];
}

const FeaturedCard = ({ item }: { item: FeaturedItem }) => (
  <Card
    shadow="none"
    className="min-w-[300px] h-[80px] bg-blue-500 bg-opacity-30 text-white flex items-center justify-start rounded-lg animate-fadeIn">
    <div className="flex gap-4 items-center">
      <ImageComponent src={item.image} alt={item.title} width={56} height={56} className="mr-2" />
      <Paragraph className="opacity-100 font-bold text-lg">{item.title}</Paragraph>
    </div>
  </Card>
);

const useScroll = (ref: React.RefObject<HTMLDivElement>, itemCount: number, itemWidth: number, interval: number) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (ref.current) {
      setIsDragging(true);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
      document.body.classList.add('no-select');
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return;
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
    document.body.classList.remove('no-select');
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (ref.current) {
        const nextCard = (currentCard + 1) % itemCount;
        setCurrentCard(nextCard);
        ref.current.scrollTo({
          left: nextCard * itemWidth,
          behavior: 'smooth',
        });
      }
    }, interval);

    return () => clearInterval(autoScroll);
  }, [currentCard, itemCount, itemWidth, interval, ref]);

  return {
    handleMouseDown,
    handleMouseMove,
    stopDragging,
  };
};

const BannerFeaturedItem = ({ featuredItems }: BannerFeaturedItemProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 300 + 16;
  const scrollInterval = 5000;

  const { handleMouseDown, handleMouseMove, stopDragging } = useScroll(
    scrollRef,
    featuredItems.length,
    cardWidth,
    scrollInterval,
  );

  return (
    <div
      className="w-full overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={handleMouseMove}>
      <div
        ref={scrollRef}
        className="flex gap-4 cursor-grab"
        style={{
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        {featuredItems.map((item, index) => (
          <FeaturedCard key={index} item={item} />
        ))}
      </div>
      <style>{`
        .flex::-webkit-scrollbar {
          display: none; /* Hide scrollbar */
        }
        .no-select {
          user-select: none; /* Disable text selection */
        }
      `}</style>
    </div>
  );
};

export default BannerFeaturedItem;
