import { Formik, Field, Form } from "formik";
import React from "react";
import {
  IoBarbellOutline,
  IoBarbellSharp,
  IoFootstepsSharp,
} from "react-icons/io5";
import { GiWeightLiftingUp, GiWeight } from "react-icons/gi";
import { BsTrophyFill } from "react-icons/bs";
import { SiStreamlit } from "react-icons/si";

const StepPhys = ({ nextStep, previousStep, setStep }) => {
  const handleSubmit = (values) => {
    setStep(values);
  };

  return (
    <Formik
      initialValues={{
        activity: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="flex flex-col space-y-10 justify-center items-start">
          <h2>Физическая активность</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-10 items-stretch w-full">
            <div className="min-h-full">
              <Field
                id="activity1"
                type="radio"
                className="css-checkbox"
                value="1.2"
                name="activity"
              />
              <label
                htmlFor="activity1"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <IoFootstepsSharp size={36} />{" "}
                <span>Физическая нагрузка отсутствует или минимальная</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="activity2"
                type="radio"
                className="css-checkbox"
                value={"1.38"}
                name="activity"
              />
              <label
                htmlFor="activity2"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <IoBarbellOutline size={36} />{" "}
                <span>Тренировки средней тяжести 3 раза в неделю</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="activity3"
                type="radio"
                className="css-checkbox"
                value={"1.46"}
                name="activity"
              />
              <label
                htmlFor="activity3"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <IoBarbellSharp size={36} />{" "}
                <span>Тренировки средней тяжести 5 раз в неделю</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="activity4"
                type="radio"
                className="css-checkbox"
                value={"1.55"}
                name="activity"
              />
              <label
                htmlFor="activity4"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <BsTrophyFill size={36} />{" "}
                <span>Интенсивные тренировки 5 раз в неделю</span>
              </label>
            </div>
            <div className="min-h-full">
              <Field
                id="activity5"
                type="radio"
                className="css-checkbox"
                value={"1.64"}
                name="activity"
              />
              <label
                htmlFor="activity5"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <SiStreamlit size={36} /> <span>Тренировки каждый день</span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="activity6"
                type="radio"
                className="css-checkbox"
                value={"1.73"}
                name="activity"
              />
              <label
                htmlFor="activity6"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <GiWeight size={36} />{" "}
                <span>
                  Интенсивные тренировки каждый день или 2 раза в день
                </span>
              </label>
            </div>

            <div className="min-h-full">
              <Field
                id="activity7"
                type="radio"
                className="css-checkbox"
                value={"1.9"}
                name="activity"
              />
              <label
                htmlFor="activity7"
                className="css-label flex flex-col space-y-4 justify-start items-center p-2 md:p-5 bg-white shadow-md rounded-lg text-xs sm:text-xl w-full sm:w-[160px] h-full text-center"
              >
                <GiWeightLiftingUp size={36} />{" "}
                <span>Ежедневная физическая нагрузка + физическая работа</span>
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
              type="submit"
              className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed"
              onClick={nextStep}
              disabled={values.activity.length <= 0}
            >
              Продолжить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepPhys;
