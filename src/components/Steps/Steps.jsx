import React from "react";
import BlobStep from "./BlobStep";
import StepStroke from "./StepStroke";
import { FaBeer } from "react-icons/fa";
import Blob from "./Blob";

const iconClasses =
  "text-xs sm:text-xl lg:text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white";

const Steps = () => {
  return (
    <div className="flex justify-evenly flex-nowrap items-center space-x-4">
      <BlobStep
        text={"1 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={<Blob className="w-full text-customLightPink" />}
      />
      <StepStroke />
      <BlobStep
        text={"2 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={<Blob className="w-full text-customLightPink" />}
      />
      <StepStroke />
      <BlobStep
        text={"3 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={<Blob className="w-full text-customLightPink" />}
      />
      <StepStroke />
      <BlobStep
        text={"4 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={<Blob className="w-full text-customLightPink" />}
      />
      <StepStroke />
      <BlobStep
        text={"5 step"}
        icon={<FaBeer className={iconClasses} />}
        blob={<Blob className="w-full text-customLightPink" />}
      />
    </div>
  );
};

export default Steps;
