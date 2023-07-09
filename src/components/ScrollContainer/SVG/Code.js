import React from 'react';
import "./SVG.css"

const SvgCode = ({fill}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm6.707 3.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L8.414 12l2.293-2.293Zm4-1.414a1 1 0 1 0-1.414 1.414L15.586 12l-2.293 2.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCode;
