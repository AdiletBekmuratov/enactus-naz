import { Field, Form, Formik } from "formik";
import React from "react";
import { GiPeanut } from "react-icons/gi";
import Almond from "../Icons/Almond";
import Apricot from "../Icons/Apricot";
import Cashew from "../Icons/Cashew";
import Dates from "../Icons/Dates";
import Pranes from "../Icons/Pranes";
import Raisin from "../Icons/Raisin";
import Walnut from "../Icons/Walnut";

const Step5 = ({ nextStep, previousStep, setStep }) => {
  const handleSubmit = (values) => {
    console.log(values);
    setStep(values)
  };

  return (
    <Formik
      initialValues={{
        nuts: [],
        driedFruits: [],
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="flex flex-col space-y-10 justify-center items-start">
          <h2>Орехи</h2>
          <div className="flex space-x-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Грецкий"
                name="nuts"
                type="checkbox"
                className="css-checkbox"
                value="Грецкий"
              />
              <label
                for="Грецкий"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Walnut size={36} /> <span>Грецкий</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Миндаль"
                name="nuts"
                type="checkbox"
                className="css-checkbox"
                value="Миндаль"
              />
              <label
                for="Миндаль"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Almond size={36} /> <span>Миндаль</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Кешью"
                name="nuts"
                type="checkbox"
                className="css-checkbox"
                value="Кешью"
              />
              <label
                for="Кешью"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Cashew size={36} /> <span>Кешью</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="Арахис"
                name="nuts"
                type="checkbox"
                className="css-checkbox"
                value="Арахис"
              />
              <label
                for="Арахис"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <GiPeanut size={36} /> <span>Арахис</span>
              </label>
            </div>
          </div>

          <h2>Сухофрукты</h2>

          <div className="flex space-x-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Курага"
                name="driedFruits"
                type="checkbox"
                className="css-checkbox"
                value="Курага"
              />
              <label
                for="Курага"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Apricot size={36} /> <span>Курага</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Чернослив"
                name="driedFruits"
                type="checkbox"
                className="css-checkbox"
                value="Чернослив"
              />
              <label
                for="Чернослив"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Pranes size={36} /> <span>Чернослив</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Изюм"
                name="driedFruits"
                type="checkbox"
                className="css-checkbox"
                value="Изюм"
              />
              <label
                for="Изюм"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Raisin size={36} /> <span>Изюм</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="Финики"
                name="driedFruits"
                type="checkbox"
                className="css-checkbox"
                value="Финики"
              />
              <label
                for="Финики"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px] h-full text-center"
              >
                <Dates size={36} /> <span>Финики</span>
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
              disabled={
                values.nuts.length <= 0 || values.driedFruits.length <= 0
              }
            >
              Продолжить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step5;
