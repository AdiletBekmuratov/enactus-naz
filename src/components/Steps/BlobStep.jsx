import React from "react";

const BlobStep = ({ text, blob, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative hover:opacity-90 transition duration-100 ease-in-out cursor-pointer">
        {blob}
        {icon}
      </div>
      <p className="text-base md:text-xl">{text}</p>
    </div>
  );
};

export default BlobStep;
