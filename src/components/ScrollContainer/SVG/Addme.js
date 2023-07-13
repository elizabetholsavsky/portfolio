import React from 'react';
import "./SVG.css"

const SvgAddme = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm6.506 3.565a5 5 0 1 0-7.007.005C3.75 12.537 2 14.626 2 17a1 1 0 1 0 2 0c0-1.73 1.93-4 6-4 1.954 0 3.455.545 4.458 1.3a1 1 0 0 0 1.202-1.6 7.966 7.966 0 0 0-2.154-1.135ZM19 14.5a1 1 0 0 1 1 1V18h2.5a1 1 0 1 1 0 2H20v2.5a1 1 0 1 1-2 0V20h-2.5a1 1 0 1 1 0-2H18v-2.5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddme;
