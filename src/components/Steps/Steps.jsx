import React from "react";
import BlobStep from "./BlobStep";
import StepStroke from "./StepStroke";
import { FaBeer } from "react-icons/fa";
import Blob from "./Blob";
import StepStroke2 from "./StepStroke2";
import { BsFillPersonFill } from "react-icons/bs";
import Blob2 from "./Blob2";
import Blob3 from "./Blob3";

const iconClasses =
  "text-xs sm:text-xl lg:text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white";

const Steps = ({ step }) => {
  return (
    <div className="flex justify-evenly flex-nowrap items-center space-x-4">
      <BlobStep
        text={"Пол"}
        icon={<BsFillPersonFill className={iconClasses} />}
        blob={
          <Blob
            className={`w-full transition duration-200 ease-in-out ${
              step >= 1 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke
        className={`w-full transition duration-200 ease-in-out ${
          step >= 2 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"2 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={
          <Blob2
            className={`w-full transition duration-200 ease-in-out ${
              step >= 2 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke2
        className={`w-full transition duration-200 ease-in-out ${
          step >= 3 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"3 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={
          <Blob3
            className={`w-full transition duration-200 ease-in-out ${
              step >= 3 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke
        className={`w-full transition duration-200 ease-in-out ${
          step >= 4 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"4 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={
          <Blob
            className={`w-full transition duration-200 ease-in-out ${
              step >= 4 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
      <StepStroke2
        className={`w-full transition duration-200 ease-in-out ${
          step >= 5 ? "text-customLightPink" : "text-gray-200"
        }`}
      />
      <BlobStep
        text={"5 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={
          <Blob2
            className={`w-full transition duration-200 ease-in-out ${
              step >= 5 ? "text-customLightPink" : "text-gray-200"
            }`}
          />
        }
      />
    </div>
  );
};

export default Steps;
