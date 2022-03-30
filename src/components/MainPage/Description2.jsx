import React from "react";
import { BsEmojiSmile, BsMouse } from "react-icons/bs";
import { MdDone } from "react-icons/md";

const Description2 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-center mb-20">
          В каких целях разработан наш сайт?
        </h2>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-200 text-pink-500 mb-4 flex-shrink-0">
              <MdDone className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">
                1. Полезно
              </h2>
              <p className="leading-relaxed text-base">
                Наш сайт - это путеводитель для людей, с помощью которого они
                смогут определять какая еда поможет им в решении их проблем со
                здоровьем из рода нарушения пищеварения, диареи, запоров, акне и
                многих других.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-200 text-pink-500 mb-4 flex-shrink-0">
              <BsEmojiSmile className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">2. Удобно</h2>
              <p className="leading-relaxed text-base">
                Добиваться желаемых результатов теперь невероятно легко - ведь
                сервис NutriPro делает всю тяжёлую работу за вас!
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-200 text-pink-500 mb-4 flex-shrink-0">
              <BsMouse className="w-6 h-6" />
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">
                3. Интерактивно
              </h2>
              <p className="leading-relaxed text-base">
                Также, сайт позволит вам принять участие в составлении вашей
                диеты предоставляя вам перечень продуктов, среди которых вы
                сможете сами выбрать предпочитаемые вами ингредиенты.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description2;
