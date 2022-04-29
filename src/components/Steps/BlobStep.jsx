import React from "react";

const BlobStep = ({ text, blob, icon }) => {
  return (
    <div className="flex flex-col justify-start items-center w-full flex-1">
      <div className="relative hover:opacity-95 hover:scale-110 transition duration-300 ease-in-out hover:drop-shadow-md">
        {blob}
        {icon}
      </div>
      <p className="hidden md:block first-letter:font-semibold text-center">
        {text}
      </p>
    </div>
  );
};

export default BlobStep;
