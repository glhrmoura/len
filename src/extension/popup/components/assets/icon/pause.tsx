import React from 'react';

export const Pause = ({ color = '#FFFFFF', ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="16px" height="20px" viewBox="0 0 16 20" fill="none" {...props}>
      <path d="M0 0H6V20H0V0ZM10 0H16V20H10V0Z" fill={color} />
    </svg>
  );
};
