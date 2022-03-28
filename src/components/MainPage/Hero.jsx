import React from "react";

const Hero = () => {
  return (
    <div className="gradient text-white">
      <div className="container px-5 mx-auto py-16 md:py-0 flex flex-wrap flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <h1 className="my-4 text-2xl md:text-4xl font-bold leading-tight">
            Получите индивидуальный план правильного питания
          </h1>
          <p className="leading-normal text-lg md:text-2xl mb-2">
            Пройдите легкий тест и получите план диетного питания абсолютно
            бесплатно!
          </p>
          <button className="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Начать
          </button>
        </div>
        <div className="w-full md:w-3/5 py-6 text-center flex justify-center">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_tll0j4bb.json"
            background="transparent"
            speed="1"
            style={{ width: "80%" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
