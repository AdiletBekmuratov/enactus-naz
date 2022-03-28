import { Field, Form, Formik } from "formik";
import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";

const Step1 = ({ nextStep, gender, setStep }) => {
  const handleSubmit = (values) => {
    console.log(values);
		setStep(values)
  };

  return (
    <Formik
      initialValues={{
        gender: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="flex flex-col space-y-10 justify-center items-start">
          <h2>Пол</h2>
          <div className="flex space-x-10 justify-center items-center">
            <div>
              <Field
                id="maleRadio"
                type="radio"
                className="css-checkbox"
                value="Мужчина"
                name="gender"
              />
              <label
                for="maleRadio"
                className="css-label flex flex-col space-y-4 justify-center items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px]"
              >
                <FaMale size={36} /> <span>Мужчина</span>
              </label>
            </div>

            <div>
              <Field
                id="femaleRadio"
                type="radio"
                className="css-checkbox"
                value="Женщина"
                name="gender"
              />
              <label
                for="femaleRadio"
                className="css-label flex flex-col space-y-4 justify-center items-center p-5 bg-white shadow-md rounded-lg text-2xl w-[160px]"
              >
                <FaFemale size={36} /> <span>Женщина</span>
              </label>
            </div>
          </div>

          <div>
            <button
              className="flex justify-between items-center bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-md focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed"
              type="submit"
              onClick={nextStep}
              disabled={!values.gender}
            >
              Продолжить
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Step1;
