import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="w-28">
      <Image src="/logo.png" alt="Logo" width={112} height={40} />
    </div>
  );
};

export default Logo;
