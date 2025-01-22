import React from 'react';

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  padding?: string;
  radius?: string;
  fontSize?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  children,
  bgColor = 'bg-blue-500',
  hoverBgColor = 'hover:bg-blue-600',
  textColor = 'text-white',
  padding = 'py-2 px-4',
  radius = 'rounded',
  fontSize = 'font-semibold',
}) => {
  return (
    <button
      className={`${bgColor} ${hoverBgColor} ${textColor} ${fontSize} ${padding} ${radius} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
