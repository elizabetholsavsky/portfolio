import React from 'react';
import "./SVG.css"

const SvgWork = (props) => (
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
      d="M11 4a1 1 0 0 0-1 1v1h4V5a1 1 0 0 0-1-1h-2Zm5 2V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4ZM9 8H4v11h16V8H9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWork;
