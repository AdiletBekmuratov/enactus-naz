import React from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

const Navigation = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
  step,
  total,
}) => {
  console.log(step, total);

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-4">
        {step > 1 && (
          <button
            className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={previousStep}
          >
            <BiCaretLeft /> Назад
          </button>
        )}
        {step < total && (
          <button
            className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={nextStep}
          >
            Продолжить <BiCaretRight />
          </button>
        )}
      </div>

      <hr />
      <div>
        <h4>
          Прогресс: {step}/{total}
        </h4>
      </div>
    </div>
  );
};

export default Navigation;
