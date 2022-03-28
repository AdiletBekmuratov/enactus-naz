import React from "react";
import Tooltip from "./Tooltip";

const CardWave = ({ icon, title, calc, cardFunction, tooltip = "" }) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-xl border-4 border-customLightPink text-2xl w-full relative h-full">
      {tooltip.length > 0 && <Tooltip text={tooltip} />}

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute w-full top-0 right-0 text-customLightPink rounded-lg"
      >
        <path
          fill="currentColor"
          fill-opacity="1"
          d="M0,288L48,282.7C96,277,192,267,288,240C384,213,480,171,576,144C672,117,768,107,864,96C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg> */}
      <div className="flex flex-col space-y-6 justify-center items-center">
        <h2 className="z-10">{title}</h2>
        {icon}
        <h3>{calc}</h3>
        <h2 className="text-center">{cardFunction(calc)}</h2>
      </div>
    </div>
  );
};

export default CardWave;
