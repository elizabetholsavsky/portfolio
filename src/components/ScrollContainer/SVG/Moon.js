import React from 'react';
import "./SVG.css"

const SvgMoon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40px"
    height="40px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.576 14.576A8 8 0 0 1 9.424 4.423a8 8 0 1 0 10.152 10.153Z"
    />
  </svg>
);
export default SvgMoon;
