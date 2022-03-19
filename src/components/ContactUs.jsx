import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useContactUsMutation } from "@/redux/services/public.service";
import toast from "react-hot-toast";
import ContactUsAnim from "@/assets/lottie/contact-us.json";
import Lottie from "lottie-react";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неправильный формат")
    .required("Обязательное поле для заполнения"),
  name: Yup.string().required("Обязательное поле для заполнения"),
  message: Yup.string(),
});

const ContactUs = () => {
  const [
    contactUs,
    { isLoading, isSuccess, data: responseData, isError, error },
  ] = useContactUsMutation();

  const handleSubmit = async (data, { resetForm }) => {
    const res = await contactUs(data)
      .unwrap()
      .finally((result) => {
        resetForm();
        toast.success("Запрос отправлен!");
      });
  };

  return (
    <section className="text-gray-600 body-font  relative">
      <div className="container px-5 py-24 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div>
          <Lottie
            animationData={ContactUsAnim}
            loop={true}
            className="w-full"
            autoplay={true}
          />
        </div>
        <div>
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Связаться с нами
            </h1>
            <p className="mx-auto leading-relaxed text-base">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Formik
            validationSchema={ContactSchema}
            initialValues={{
              email: "",
              name: "",
              message: "",
            }}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Имя<span className="text-customLightPink">*</span>
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ErrorMessage
                        component={"div"}
                        name="name"
                        className="text-xs text-customLightPink mt-1"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email<span className="text-customLightPink">*</span>
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ErrorMessage
                        component={"div"}
                        name="email"
                        className="text-xs text-customLightPink mt-1"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Сообщение
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className={`flex mx-auto bg-customLightPink text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out disabled:bg-gray-200 disabled:text-customLightPink`}
                      disabled={isLoading}
                    >
                      Отправить
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
