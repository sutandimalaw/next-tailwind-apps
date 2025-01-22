import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  badge?: React.ReactNode;
  badgePosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  width: number | string;
  height: number | string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className = '',
  badge,
  badgePosition = 'top-right',
  width,
  height,
}) => {
  const positionClasses = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    'bottom-left': 'bottom-0 left-0',
  };

  return (
    <div className="relative inline-block" style={{ width, height }}>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} className={className} />
      {badge && <div className={`absolute ${positionClasses[badgePosition]} p-1`}>{badge}</div>}
    </div>
  );
};

export default ImageComponent;
