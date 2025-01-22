import React from 'react';

interface CheckProps {
  size?: number;
}

const Check: React.FC<CheckProps> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={size} height={size} id="check">
    <rect width="128" height="128" fill="none"></rect>
    <polyline
      fill="none"
      stroke="#2C599B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      points="108 36 52 92 24 64"></polyline>
  </svg>
);

export default Check;
