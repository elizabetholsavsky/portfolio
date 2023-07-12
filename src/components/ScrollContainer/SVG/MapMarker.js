import React from 'react';
import "./SVG.css"

const SvgMapMarker = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25px"
    height="25px"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7z"
    />
    <circle
      cx={12}
      cy={10}
      r={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
export default SvgMapMarker;
