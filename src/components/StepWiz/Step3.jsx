import React from "react";
import { GiRoastChicken, GiChickenOven } from "react-icons/gi";
import Ostrich from "../Icons/Ostrich";

const Step3 = ({ nextStep, previousStep, meat, setMeat }) => {
  const onStateChange = (event) => {
    setMeat(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-10 justify-center items-start">
      <h2>Мясо</h2>
      <div className="grid grid-cols-3 gap-4 lg:gap-10 items-stretch">
        <div className="min-h-full">
          <input
            id="Куриная грудка"
            type="radio"
            className="css-checkbox"
            value="Куриная грудка"
            checked={meat === "Куриная грудка"}
            onChange={onStateChange}
          />
          <label
            htmlFor="Куриная грудка"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
          >
            <GiRoastChicken size={36} /> <span>Куриная грудка</span>
          </label>
        </div>

        <div className="min-h-full">
          <input
            id="Индейка"
            type="radio"
            className="css-checkbox"
            value="Индейка"
            checked={meat === "Индейка"}
            onChange={onStateChange}
          />
          <label
            htmlFor="Индейка"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
          >
            <GiChickenOven size={36} /> <span>Индейка</span>
          </label>
        </div>

        <div className="min-h-full">
          <input
            id="Страус"
            type="radio"
            className="css-checkbox"
            value="Страус"
            checked={meat === "Страус"}
            onChange={onStateChange}
          />
          <label
            htmlFor="Страус"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
          >
            <Ostrich size={36} /> <span>Страус</span>
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-10">
        <button
          className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={previousStep}
        >
          Назад
        </button>
        <button
          className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed"
          onClick={nextStep}
          type="submit"
          disabled={!meat}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Step3;
