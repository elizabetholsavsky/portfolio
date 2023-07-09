import React from 'react';

const SvgUp = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.707 4.293a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L12 6.414l6.293 6.293a1 1 0 0 0 1.414-1.414l-7-7Zm0 7a1 1 0 0 0-1.414 0l-7 7a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414l-7-7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgUp;