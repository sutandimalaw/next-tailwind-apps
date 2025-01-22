import React from 'react';

interface DollarIconProps {
  width?: string;
  height?: string;
  className?: string;
}

const DollarIcon: React.FC<DollarIconProps> = ({ width = '100', height = '100', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className={className}
    fill="none">
    <circle cx="50" cy="50" r="48" fill="#E6FAE7" stroke="none" />

    <path
      d="M50 30C45.582 30 42 33.582 42 38H47C47 36.343 48.343 35 50 35C51.657 35 53 36.343 53 38C53 40.5 50 41 47.5 42C44.5 43 41 44.5 41 48C41 52.418 45.582 55 50 55C54.418 55 58 51.418 58 47H53C53 48.657 51.657 50 50 50C48.343 50 47 48.657 47 47C47 44.5 50 44 52.5 43C55.5 42 59 40.5 59 38C59 33.582 54.418 30 50 30Z"
      fill="#00C58E"
    />
  </svg>
);

export default DollarIcon;
