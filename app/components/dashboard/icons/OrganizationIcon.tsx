import React from 'react';

interface IconProps {
  active?: boolean;
  className?: string;
}

const OrganizationIcon: React.FC<IconProps> = ({ className }) => {
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
        d="M2.5 15.8333V7.5C2.5 6.57953 3.24619 5.83333 4.16667 5.83333H6.66667C7.58714 5.83333 8.33333 6.57953 8.33333 7.5V15.8333"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M8.33333 15.8333V4.16667C8.33333 3.24619 9.07953 2.5 10 2.5H12.5C13.4205 2.5 14.1667 3.24619 14.1667 4.16667V15.8333"
        fill="currentColor"
      />
      <path
        d="M14.1667 15.8333V9.16667C14.1667 8.24619 14.9129 7.5 15.8333 7.5H17.5C18.4205 7.5 19.1667 8.24619 19.1667 9.16667V15.8333C19.1667 16.7538 18.4205 17.5 17.5 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333H14.1667Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default OrganizationIcon;
