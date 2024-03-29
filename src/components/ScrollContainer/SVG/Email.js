import React from 'react';
import "./SVG.css"

const SvgEmail = (props) => (
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
      d="M2.544 5.168A2.777 2.777 0 0 1 4.8 4h14.4c.936 0 1.753.47 2.256 1.168.343.478.544 1.067.544 1.699v10.266C22 18.682 20.78 20 19.2 20H4.8C3.22 20 2 18.682 2 17.133V6.867c0-.632.2-1.221.544-1.7ZM4.933 6l6.327 6.965a1 1 0 0 0 1.48 0L19.067 6H4.933ZM20 7.948l-5.78 6.362a3 3 0 0 1-4.44 0L4 7.948v9.185c0 .514.392.867.8.867h14.4c.408 0 .8-.353.8-.867V7.948Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEmail;
