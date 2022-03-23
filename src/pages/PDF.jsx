import ContactUs from "@/components/ContactUs";
import MagnetButton from "@/components/MagnetButton";
import PageLoaderMenu from "@/components/PageLoaderMenu";
import PDFMenu from "@/components/PDF/PDFMenu";
import pdf from "@react-pdf/renderer";
import React from "react";
const { usePDF } = pdf;

const PDF = () => {
  const [instance, updateInstance] = usePDF({ document: <PDFMenu /> });

  if (instance.loading) return <PageLoaderMenu />;
  if (instance.error)
    return (
      <div className="flex flex-grow justify-center items-center">
        Что-то пошло не так: {instance.error}
      </div>
    );

  return (
    <>
      <section className="container mx-auto px-5 py-16">
        <div className="grid grid-cols-2 justify-center items-center gap-16">
          <div className="flex flex-col justify-center items-center space-y-16">
            <div className="text-center">
              <h2 className="text-gray-900">
                Индивидуальный план питания готов
              </h2>
              <h4>Спасибо, что выбираете нас!</h4>
            </div>
            <MagnetButton>
              <a
                className=" bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                href={instance.url}
                download="nutri-pro.pdf"
              >
                Скачать
              </a>
            </MagnetButton>
            <p>Нажмите на кнопку чтобы скачать файл</p>
          </div>

          <div>
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_1vfd6t8p.json"
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
