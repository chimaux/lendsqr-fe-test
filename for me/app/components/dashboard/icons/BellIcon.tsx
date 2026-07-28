import React from 'react';

interface IconProps {
  className?: string;
}

const BellIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 2.5C7.23858 2.5 5 4.73858 5 7.5V10.8333L3.33334 12.5V13.3333H16.6667V12.5L15 10.8333V7.5C15 4.73858 12.7614 2.5 10 2.5Z"
      fill="#E4E4E4"
      stroke="#213F7D"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M8.33334 16.6667C8.33334 17.5871 9.07953 18.3333 10 18.3333C10.9205 18.3333 11.6667 17.5871 11.6667 16.6667H8.33334Z"
      fill="#213F7D"
    />
    <circle cx="15" cy="5" r="3" fill="#E4033B" stroke="white" strokeWidth="1.5"/>
  </svg>
);

export default BellIcon;