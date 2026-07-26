import React from 'react';

interface IconProps {
  className?: string;
}

const HamburgerIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
