import React from "react";
import { GiCoveredJar, GiCow, GiMilkCarton, GiCubes } from "react-icons/gi";
import { FaDashcube } from "react-icons/fa";
import { SiRoundcube } from "react-icons/si";
import { BiDish } from "react-icons/bi";

const Step2 = ({
  nextStep,
  previousStep,
  milk1,
  setMilk1,
  setMilk2,
  milk2,
}) => {
  const onMilk1Change = (event) => {
    setMilk1(event.target.value);
  };

  const onMilk2Change = (event) => {
    setMilk2(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-10 justify-center items-start">
      <h2>Молочные продукты</h2>
      <div className="flex space-x-10 items-stretch">
        <div className="min-h-full">
          <input
            id="milk"
            type="radio"
            className="css-checkbox"
            value="Молоко 2,5%"
            checked={milk1 === "Молоко 2,5%"}
            onChange={onMilk1Change}
          />
          <label
            for="milk"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <GiCow size={36} /> <span>Молоко 2,5%</span>
          </label>
        </div>
        <div className="min-h-full">
          <input
            id="slivki"
            type="radio"
            className="css-checkbox"
            value="Сливки"
            checked={milk1 === "Сливки"}
            onChange={onMilk1Change}
          />
          <label
            for="slivki"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <GiMilkCarton size={36} /> <span>Сливки</span>
          </label>
        </div>
        <div className="min-h-full">
          <input
            id="sgushenka"
            type="radio"
            className="css-checkbox"
            value="Сгущенка"
            checked={milk1 === "Сгущенка"}
            onChange={onMilk1Change}
          />
          <label
            for="sgushenka"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <GiCoveredJar size={36} /> <span>Сгущенка</span>
          </label>
        </div>
      </div>

      <div className="flex space-x-10 items-stretch">
        <div className="min-h-full">
          <input
            id="tvorog"
            type="radio"
            className="css-checkbox"
            value="Творог 5%"
            checked={milk2 === "Творог 5%"}
            onChange={onMilk2Change}
          />
          <label
            for="tvorog"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <BiDish size={36} /> <span>Творог 5%</span>
          </label>
        </div>
        <div className="min-h-full">
          <input
            id="tofu"
            type="radio"
            className="css-checkbox"
            value="Тофу"
            checked={milk2 === "Тофу"}
            onChange={onMilk2Change}
          />
          <label
            for="tofu"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <GiCubes size={36} /> <span>Тофу</span>
          </label>
        </div>
        <div className="min-h-full">
          <input
            id="rikottu"
            type="radio"
            className="css-checkbox"
            value="Рикотту"
            checked={milk2 === "Рикотту"}
            onChange={onMilk2Change}
          />
          <label
            for="rikottu"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <FaDashcube size={36} /> <span>Рикотту</span>
          </label>
        </div>
        <div className="min-h-full">
          <input
            id="maskrapone"
            type="radio"
            className="css-checkbox"
            value="Маскарпоне"
            checked={milk2 === "Маскарпоне"}
            onChange={onMilk2Change}
          />
          <label
            for="maskrapone"
            className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
          >
            <SiRoundcube size={36} /> <span>Маскарпоне</span>
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
          disabled={!milk1 || !milk2}
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Step2;
