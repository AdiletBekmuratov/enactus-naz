import Hero from "@/components/MainPage/Hero";
import Steps from "@/components/Steps/Steps";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative gradient">
        <img
          src="/images/hero-wave.svg"
          alt="hero-img"
          className="object-fit"
        />
      </div>
      <section className="bg-white">
        <div className="container mx-auto px-5 py-8">
          <Steps />
        </div>
      </section>
    </>
  );
};

export default Home;
