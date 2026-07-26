import React from 'react';

interface IconProps {
  className?: string;
}

const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 4H14V9H9V20H4V4Z"
      fill="#213F7D"
    />
    <path
      d="M14 9H19V14H14V9Z"
      fill="#39CDCC"
    />
  </svg>
);

export default LogoIcon;