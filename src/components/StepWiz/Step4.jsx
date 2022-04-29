import { Field, Form, Formik } from "formik";
import React from "react";
import {
  GiBroccoli,
  GiMushroomGills,
  GiOrange,
  GiOrangeSlice,
  GiPeach,
} from "react-icons/gi";
import { SiCucumber } from "react-icons/si";
import BellPepper from "../Icons/BellPepper";
import Spinach from "../Icons/Spinach";

const Step4 = ({ nextStep, previousStep, setStep }) => {
  const handleSubmit = (values) => {
    setStep(values);
  };

  return (
    <Formik
      initialValues={{
        vegs: [],
        fruits: [],
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="flex flex-col space-y-10 justify-center items-start">
          <div>
            <h2>Овощи</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Кабачки"
                name="vegs"
                type="checkbox"
                className="css-checkbox"
                value="Кабачки"
              />
              <label
                htmlFor="Кабачки"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <SiCucumber size={36} /> <span>Кабачки</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Грибы"
                name="vegs"
                type="checkbox"
                className="css-checkbox"
                value="Грибы (шампиньоны)"
              />
              <label
                htmlFor="Грибы"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <GiMushroomGills size={36} /> <span>Грибы (шампиньоны)</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Цветная капуста"
                name="vegs"
                type="checkbox"
                className="css-checkbox"
                value="Цветная капуста/брокколи"
              />
              <label
                htmlFor="Цветная капуста"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <GiBroccoli size={36} /> <span>Цветная капуста/брокколи</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="Болгарский перец"
                name="vegs"
                type="checkbox"
                className="css-checkbox"
                value="Болгарский перец"
              />
              <label
                htmlFor="Болгарский перец"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <BellPepper size={36} /> <span>Болгарский перец</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="Шпинат"
                name="vegs"
                type="checkbox"
                className="css-checkbox"
                value="Шпинат"
              />
              <label
                htmlFor="Шпинат"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <Spinach size={36} /> <span>Шпинат</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Фрукты</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 lg:gap-10 items-stretch w-full sm:w-auto">
            <div className="min-h-full">
              <Field
                id="Персик"
                name="fruits"
                type="checkbox"
                className="css-checkbox"
                value="Персик"
              />
              <label
                htmlFor="Персик"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <GiPeach size={36} /> <span>Персик</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Апельсин"
                name="fruits"
                type="checkbox"
                className="css-checkbox"
                value="Апельсин"
              />
              <label
                htmlFor="Апельсин"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <GiOrange size={36} /> <span>Апельсин</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Мандарин"
                name="fruits"
                type="checkbox"
                className="css-checkbox"
                value="Мандарин"
              />
              <label
                htmlFor="Мандарин"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <GiOrangeSlice size={36} /> <span>Мандарин</span>
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
              disabled={values.vegs.length <= 0 || values.fruits.length <= 0}
            >
              Продолжить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step4;
