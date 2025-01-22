import React from 'react';

const ColombiaFlag: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      width="25" // You can adjust the size as needed
      height="18"
      style={{ borderRadius: '4px' }}>
      <rect width="640" height="480" fill="#ffce00" />
      <rect width="640" height="240" y="240" fill="#003087" />
      <rect width="640" height="120" y="360" fill="#ce1126" />
    </svg>
  );
};

export default ColombiaFlag;
