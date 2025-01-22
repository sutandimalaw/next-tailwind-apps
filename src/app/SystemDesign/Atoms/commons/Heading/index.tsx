import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, className = '', children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const fontSizeMap = {
    1: 'text-xl sm:text-3xl md:text-4xl',
    2: 'text-lg sm:text-2xl md:text-3xl',
    3: 'text-md sm:text-lg md:text-xl',
  };

  return (
    <Tag className={`${fontSizeMap[level]} text-left ${className}`}>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return child.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < child.split('\n').length - 1 && <br />}
            </span>
          ));
        }
        return child;
      })}
    </Tag>
  );
};

export default Heading;
