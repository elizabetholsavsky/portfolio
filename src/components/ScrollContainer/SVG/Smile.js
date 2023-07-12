import React from 'react';
import "./SVG.css"

const SvgSmile = (props) => (
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
      d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM9.967 14.744a1 1 0 0 0-1.937.498C8.469 17 10.283 18 12 18c1.785 0 3.452-1.012 3.97-2.76a1 1 0 0 0-1.937-.496C13.773 15.614 12.84 16 12 16c-.84 0-1.772-.385-2.033-1.256ZM10.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm4.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSmile;
