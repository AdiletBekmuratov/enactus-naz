import React from "react";

const Donate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div className="grid grid-cols-1 justify-center items-center justify-items-center gap-16">
        <div className="text-center">
          <h2>Поддержите наш проект</h2>
          <h4>Вы не обязаны, просто могли бы :)</h4>
        </div>
        <div
          id="card"
          className="relative w-96 h-60 rounded-2xl text-white overflow-hidden hover:scale-105 transition-all duration-300"
        >
          {/* Front content */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-tr from-gray-900 to-gray-700">
            <div className="flex justify-between items-center">
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                alt="Smart card"
                className="w-12"
              />
              <img
                src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
                alt="Visa image"
                className="w-12"
              />
            </div>
            {/* CardNumber */}
            <div className="mt-10">
              <label className="hidden">Card Number</label>
              <p className="outline-none w-full bg-transparent text-center text-2xl">
                5104 4559 0561 9441
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_udTJtk.json"
          background="transparent"
          speed="0.75"
          style={{ width: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Donate;
