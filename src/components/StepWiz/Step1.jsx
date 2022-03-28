import { Field, Form, Formik } from "formik";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import * as Yup from "yup";

const Step1Schema = Yup.object().shape({
  gender: Yup.string().required(),
  age: Yup.number().integer().required().min(0),
  height: Yup.number().integer().required().min(0),
  weight: Yup.number().integer().required().min(0),
});

const Step1 = ({ nextStep, setStep }) => {
  const handleSubmit = (values) => {
    // console.log(values);
    setStep(values);
  };

  return (
    <Formik
      initialValues={{
        gender: "",
        age: "",
        weight: "",
        height: "",
      }}
      validationSchema={Step1Schema}
      onSubmit={handleSubmit}
    >
      {({ values, isValid }) => (
        <Form className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
          <div className="flex flex-col space-y-10 justify-center items-start">
            <h2>Пол</h2>
            <div className="flex space-x-10 justify-center items-center">
              <div className="min-h-full">
                <Field
                  id="maleRadio"
                  type="radio"
                  className="css-checkbox"
                  value="Мужчина"
                  name="gender"
                />
                <label
                  htmlFor="maleRadio"
                  className="css-label flex flex-col space-y-4 justify-center items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px]"
                >
                  <FaMale size={36} /> <span>Мужчина</span>
                </label>
              </div>

              <div className="min-h-full">
                <Field
                  id="femaleRadio"
                  type="radio"
                  className="css-checkbox"
                  value="Женщина"
                  name="gender"
                />
                <label
                  htmlFor="femaleRadio"
                  className="css-label flex flex-col space-y-4 justify-center items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px]"
                >
                  <FaFemale size={36} /> <span>Женщина</span>
                </label>
              </div>
            </div>

            <h2>Параметры</h2>
            <div className="flex flex-col space-y-5 justify-center items-center">
              <div className="min-h-full">
                <Field
                  type="number"
                  min="0"
                  placeholder="Ваш возраст"
                  name="age"
                  className="rounded-full border-customLightPink border py-2 px-4 text-xl focus:ring-2 focus:ring-pink-200 focus:border-customDarkPink focus:bg-white"
                />
              </div>

              <div className="min-h-full">
                <Field
                  type="number"
                  min="0"
                  placeholder="Ваш рост, см"
                  name="height"
                  className="rounded-full border-customLightPink border py-2 px-4 text-xl focus:ring-2 focus:ring-pink-200 focus:border-customDarkPink focus:bg-white"
                />
              </div>

              <div className="min-h-full">
                <Field
                  type="number"
                  min="0"
                  placeholder="Ваш вес, кг"
                  name="weight"
                  className="rounded-full border-customLightPink border py-2 px-4 text-xl focus:ring-2 focus:ring-pink-200 focus:border-customDarkPink focus:bg-white"
                />
              </div>
            </div>

            <div>
              <button
                className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-md focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed"
                type="submit"
                onClick={nextStep}
                disabled={!isValid}
              >
                Продолжить
              </button>
            </div>
          </div>
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_xyadoh9h.json"
            background="transparent"
            speed="1"
            style={{width: '80%'}}
            loop
            autoplay
          ></lottie-player>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
