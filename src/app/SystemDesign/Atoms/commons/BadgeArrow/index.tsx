import React from 'react';

interface BadgeArrowProps {
  position?: 'start' | 'center' | 'end';
  textClassName?: string;
  className?: string;
  children: React.ReactNode;
}

const BadgeArrow: React.FC<BadgeArrowProps> = ({
  children,
  position = 'center',
  className = '',
  textClassName = 'text-teal-500',
}) => {
  const bubblePosition = {
    start: 'left-3',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-3',
  };

  return (
    <div className={`relative p-2 bg-white border rounded-lg inline-block ${className}`}>
      <div
        className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[12px] border-t-white ${bubblePosition[position]} top-full`}
      />
      <span className={textClassName}>{children}</span>
    </div>
  );
};

export default BadgeArrow;
