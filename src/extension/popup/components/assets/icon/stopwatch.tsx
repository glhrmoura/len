import React from 'react';

export const Stopwatch = ({ color = '#051A2A', ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25px" height="24px" viewBox="0 0 25 24" fill="none" {...props}>
      <path d="M12.25 5C7.839 5 4.25 8.589 4.25 13C4.25 17.411 7.839 21 12.25 21C16.661 21 20.25 17.411 20.25 13C20.25 8.589 16.661 5 12.25 5ZM12.25 19C8.941 19 6.25 16.309 6.25 13C6.25 9.691 8.941 7 12.25 7C15.559 7 18.25 9.691 18.25 13C18.25 16.309 15.559 19 12.25 19Z" fill={color}/>
      <path d="M11.25 9H13.25V14H11.25V9ZM9.25 2H15.25V4H9.25V2ZM19.543 7.707L17.543 5.707L18.957 4.293L20.957 6.293L19.543 7.707Z" fill={color} />
    </svg>
  );
};
