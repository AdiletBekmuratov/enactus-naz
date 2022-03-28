import React from "react";

const Description = () => {
  return (
    <section className="text-gray-600  body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="mb-4">В каких целях разработан наш сайт?</h2>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p> */}
        </div>
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
              1.
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Наш сайт основательно отличается от похожих программ своим
              персонализированным подходом к каждому пользователю. Это сайт для
              получение индивидуального плана правильного питания. Здесь вы
              можете пройти лёгкий тест и получить план диеты подстроенной
              именно под вас. Также наш сайт - это путеводитель для людей, с
              помощью которого они смогут определять какая еда поможет им в
              решении их проблем со здоровьем из рода нарушения пищеварения,
              диареи, запоров, акне и многих других.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
            <h2 className="text-lg sm:text-xl font-medium title-font mb-2">
              2.
            </h2>
            <p className="leading-relaxed text-base mb-4">
              После завершения теста, вам остаётся просто следовать вашему
              персонализированному плану питания. Также, сайт позволит вам
              принять участие в составлении вашей диеты предоставляя вам
              перечень продуктов, среди которых вы сможете сами выбрать
              предпочитаемые вами ингредиенты. Добиваться желаемых результатов
              теперь невероятно легко - ведь сервис NutriPro делает всю тяжёлую
              работу за вас!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
