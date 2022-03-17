import React from "react";
import BlobStep from "./BlobStep";
import StepStroke from "./StepStroke";
import { FaBeer } from "react-icons/fa";
import Blob from "./Blob";

const Steps = () => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <BlobStep
        text={"1 step"}
        icon={
          <FaBeer className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        }
        blob={<Blob className="w-48 text-purple-400" />}
      />
      <StepStroke />
      <BlobStep
        text={"2 step"}
        icon={
          <FaBeer className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        }
        blob={<Blob className="w-48 text-purple-400" />}
      />
      <StepStroke />
      <BlobStep
        text={"3 step"}
        icon={
          <FaBeer className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        }
        blob={<Blob className="w-48 text-purple-400" />}
      />
      <StepStroke />
      <BlobStep
        text={"4 step"}
        icon={
          <FaBeer className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        }
        blob={<Blob className="w-48 text-purple-400" />}
      />
      <StepStroke />
      <BlobStep
        text={"5 step"}
        icon={
          <FaBeer className="text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        }
        blob={<Blob className="w-48 text-purple-400" />}
      />
    </div>
  );
};

export default Steps;
