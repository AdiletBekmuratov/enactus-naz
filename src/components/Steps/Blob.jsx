import React from "react";

const Blob = (props) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
			{...props}
    >
      <path
        fill="currentColor"
        d="M45.7,-16.7C52.9,7.4,48.1,33.5,29.2,49.4C10.4,65.2,-22.6,70.8,-39.7,57.7C-56.8,44.5,-58.1,12.6,-48.8,-14.2C-39.6,-41.1,-19.8,-62.9,-0.3,-62.8C19.2,-62.7,38.5,-40.7,45.7,-16.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
