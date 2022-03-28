import ContactUs from "@/components/ContactUs";
import MagnetButton from "@/components/MagnetButton";
import PageLoaderMenu from "@/components/PageLoaderMenu";
import PDFMenu from "@/components/PDF/PDFMenu";
import pdf from "@react-pdf/renderer";
import React from "react";
import { useLocation } from "react-router-dom";
const { usePDF } = pdf;
import { ImStatsDots, ImStatsBars } from "react-icons/im";
import { GiWaterDrop } from "react-icons/gi";
import { MdTransferWithinAStation } from "react-icons/md";
import CardWave from "@/components/CardWave";
import { getIMTConclusion, getRandomFloat } from "@/helpers/formulas";

const PDF = () => {
  const { state } = useLocation();
  const { data } = state;

  if (!state) {
    return (
      <section className="container mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-2 justify-center items-center text-gray-600">
        <h2 className="text-center md:text-left">
          Пожалуйста, сперва пройдите тест для составления индивидуального плана
        </h2>
        <lottie-player
          src="https://assets1.lottiefiles.com/private_files/lf30_bcbd2axv.json"
          background="transparent"
          speed="1"
          style={{ width: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </section>
    );
  }

  const [instance, updateInstance] = usePDF({
    document: <PDFMenu data={state.data} />,
  });

  if (instance.loading) return <PageLoaderMenu />;
  if (instance.error)
    return (
      <div className="flex flex-grow justify-center items-center">
        Что-то пошло не так: {instance.error}
      </div>
    );

  return (
    <>
      <section className="container mx-auto px-5 py-16 text-gray-600">
        <div className="grid grid-cols-1 justify-center items-center gap-6">
          <h2>Резюме вашего профиля</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="min-h-full">
              <CardWave
                title={"ИМТ"}
                tooltip={
                  "Индекс массы тела (ИМТ) — величина, позволяющая оценить, насколько ваш вес соответствует вашему росту. Она говорит о том, является ли ваш вес недостаточным, нормальным или избыточным."
                }
                icon={<ImStatsDots size={100} />}
                calc={(
                  data.weight /
                  ((data.height / 100) * (data.height / 100))
                ).toFixed(1)}
                cardFunction={getIMTConclusion}
              />
            </div>

            <div className="min-h-full">
              <CardWave
                title={"BMR"}
                tooltip={
                  "Базальный уровень метаболизма (BMR) — количество энергии, расходуемой в состоянии покоя в нейтрально-умеренной среде и в состоянии после абсорбции (это означает, что пищеварительная система неактивна, что требует около 12 часов голодания)."
                }
                icon={<ImStatsBars size={100} />}
                calc={parseInt(
                  data.weight * 10 +
                    6.25 * data.height -
                    5 * data.age +
                    (data.gender === "Женщина" ? -161 : 5)
                )}
                cardFunction={() => "калорий/день"}
              />
            </div>

            <div className="min-h-full">
              <CardWave
                title={"DCI (AMR)"}
                tooltip={
                  "Степень активного метаболизма (AMR) — это фактическое количество калорий, которые вы сжигаете каждый день из-за физической активности, такой как посещение тренажерного зала, аэробика, приготовление пищи, работа в саду, йога и так далее. Знать свой AMR необходимо, если вы хотите похудеть, оставаться в форме и быть здоровым или набрать вес."
                }
                icon={<MdTransferWithinAStation size={100} />}
                calc={parseInt(
                  (data.weight * 10 +
                    6.25 * data.height -
                    5 * data.age +
                    (data.gender === "Женщина" ? -161 : 5)) *
                    parseFloat(data.activity)
                )}
                cardFunction={() => "калорий/день"}
              />
            </div>

            <div className="min-h-full">
              <CardWave
                title={"Рекомендуемое количество воды"}
                tooltip={
                  "Если пить достаточное количество воды, это помогает нашему организму легко выполнять различные функции. Витамины, углеводы и белки должным образом растворяются, реакции ферментации проходят легче, питательные вещества проникают в клетки, а токсины выводятся из организма. Мы укрепляем иммунную систему, улучшаем состояние кожи и самочувствие в целом. Даже способность нашего тела регулировать температуру, наращивать мышцы и сжигать жир связана с потреблением воды."
                }
                icon={<GiWaterDrop size={100} />}
                calc={"≈ " + getRandomFloat(2.0, 2.5, 1)}
                cardFunction={() => "литр/день"}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-16">
              <div className="text-center">
                <h2>Индивидуальный план питания готов</h2>
                <h4>Спасибо, что выбираете нас!</h4>
              </div>
              <MagnetButton>
                <a
                  className=" bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-md"
                  href={instance.url}
                  download="nutri-pro.pdf"
                >
                  Скачать
                </a>
              </MagnetButton>
              <p>Нажмите на кнопку чтобы скачать файл</p>
            </div>
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_1vfd6t8p.json"
              className="hidden md:block"
              background="transparent"
              speed="1"
              style={{ width: "100%" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default PDF;
