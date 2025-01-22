import React from 'react';

interface CardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  rounded?: string;
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  width = 'w-auto',
  height = 'h-auto',
  className = '',
  id = '',
  style = {},
  rounded = 'lg',
  shadow = 'lg',
}) => {
  // Determine the shadow class based on the prop value
  const shadowClass = shadow === 'none' ? 'shadow-none' : `shadow-${shadow}`;

  return (
    <div
      id={id}
      className={`bg-white rounded-${rounded} ${shadowClass} p-4 ${width} ${height} ${className}`}
      style={style}>
      {children}
    </div>
  );
};

export default Card;
