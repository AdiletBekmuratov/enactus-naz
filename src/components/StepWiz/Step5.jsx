import { Field, Form, Formik } from "formik";
import React from "react";
import { GiPeanut, GiBreadSlice } from "react-icons/gi";
import { FaBreadSlice } from "react-icons/fa";
import Almond from "../Icons/Almond";
import Apricot from "../Icons/Apricot";
import Cashew from "../Icons/Cashew";
import Dates from "../Icons/Dates";
import Dill from "../Icons/Dill";
import Lettuce from "../Icons/Lettuce";
import Parsley from "../Icons/Parsley";
import Pranes from "../Icons/Pranes";
import Raisin from "../Icons/Raisin";
import Walnut from "../Icons/Walnut";
import Cracker from "../Icons/Cracker";

const Step5 = ({ nextStep, previousStep, onFinish }) => {
  return (
    <Formik
      initialValues={{
        nuts: [],
        driedFruits: [],
        zelen: [],
        breads: [],
      }}
      onSubmit={onFinish}
    >
      {({ values }) => (
        <Form className="flex flex-col space-y-10 justify-center items-start">
          <div>
            <h2>Орехи</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:gap-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Грецкий"
                name="nuts"
                type="checkbox"
                className="css-checkbox"
                value="Грецкий"
              />
              <label
                htmlFor="Грецкий"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Миндаль"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Кешью"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Арахис"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <GiPeanut size={36} /> <span>Арахис</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Сухофрукты</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:gap-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Курага"
                name="driedFruits"
                type="checkbox"
                className="css-checkbox"
                value="Курага"
              />
              <label
                htmlFor="Курага"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Чернослив"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Изюм"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
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
                htmlFor="Финики"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <Dates size={36} /> <span>Финики</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Зелень</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Укроп"
                name="zelen"
                type="checkbox"
                className="css-checkbox"
                value="Укроп"
              />
              <label
                htmlFor="Укроп"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <Dill size={36} /> <span>Укроп</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Петрушка"
                name="zelen"
                type="checkbox"
                className="css-checkbox"
                value="Петрушка"
              />
              <label
                htmlFor="Петрушка"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <Parsley size={36} /> <span>Петрушка</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Листья салата"
                name="zelen"
                type="checkbox"
                className="css-checkbox"
                value="Листья салата"
              />
              <label
                htmlFor="Листья салата"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <Lettuce size={36} /> <span>Листья салата</span>
              </label>
            </div>
          </div>

          <div>
            <h2>Хлеб</h2>
            <p>
              <span className="text-red-500">*</span> Можно выбрать несколько
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-10 items-stretch">
            <div className="min-h-full">
              <Field
                id="Цельнозерновой хлеб"
                name="breads"
                type="checkbox"
                className="css-checkbox"
                value="Цельнозерновой хлеб"
              />
              <label
                htmlFor="Цельнозерновой хлеб"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-[1.025rem] w-full sm:w-[160px] h-full text-center"
              >
                <FaBreadSlice size={36} /> <span>Цельнозерновой хлеб</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Хлебцы"
                name="breads"
                type="checkbox"
                className="css-checkbox"
                value="Хлебцы"
              />
              <label
                htmlFor="Хлебцы"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <GiBreadSlice size={36} /> <span>Хлебцы</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="Крекеры"
                name="breads"
                type="checkbox"
                className="css-checkbox"
                value="Крекеры"
              />
              <label
                htmlFor="Крекеры"
                className="css-label flex flex-col space-y-4 justify-between items-center p-5 bg-white shadow-md rounded-lg text-xs sm:text-2xl w-full sm:w-[160px] h-full text-center"
              >
                <Cracker size={36} /> <span>Крекеры</span>
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
              type="submit"
              disabled={
                values.nuts.length <= 0 ||
                values.driedFruits.length <= 0 ||
                values.zelen.length <= 0 ||
                values.breads.length <= 0
              }
            >
              Завершить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step5;
