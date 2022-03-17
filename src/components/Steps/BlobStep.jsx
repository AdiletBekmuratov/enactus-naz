import React from "react";

const BlobStep = ({ text, blob, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative hover:brightness-110 transition duration-100 ease-in-out">
				{blob}
        {icon}
      </div>
      <p className="text-base md:text-xl">{text}</p>
    </div>
  );
};

export default BlobStep;
