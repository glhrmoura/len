import React from 'react';

export const Play = ({ color = '#FFFFFF', ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="17px" height="20px" viewBox="0 0 17 20" fill="none" {...props}>
      <path d="M0.166748 0V20L16.8334 10L0.166748 0Z" fill={color} />
    </svg>
  );
};
