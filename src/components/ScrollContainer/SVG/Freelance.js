import React from 'react';
import "./SVG.css"

const SvgFreelance = (props) => (
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
      d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h1v2a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h1V6Zm18 0v10H4V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM4 19a1 1 0 0 1-1-1h18a1 1 0 0 1-1 1H4ZM5.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-13Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFreelance;
