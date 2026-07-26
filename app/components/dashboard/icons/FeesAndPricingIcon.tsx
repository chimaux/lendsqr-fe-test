import React from 'react';

interface IconProps {
  active?: boolean;
  className?: string;
}

const FeesAndPricingIcon: React.FC<IconProps> = ({ className }) => {
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
        opacity="0.4"
        d="M10 1.66667L12.5833 6.91667L18.3333 7.725L14.1667 11.825L15.15 17.5667L10 14.8083L4.85001 17.5667L5.83334 11.825L1.66667 7.725L7.41667 6.91667L10 1.66667Z"
        fill="currentColor"
      />
      <path
        d="M10 4.16667L11.8083 7.80833L15.8333 8.44167L12.9167 11.3083L13.6167 15.3167L10 13.4583L6.38334 15.3167L7.08334 11.3083L4.16667 8.44167L8.19167 7.80833L10 4.16667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FeesAndPricingIcon;
