import ContactUs from "@/components/ContactUs";
import Description from "@/components/MainPage/Description";
import Hero from "@/components/MainPage/Hero";
import HeroWave from "@/components/MainPage/HeroWave";
import LatestPosts from "@/components/MainPage/LatestPosts";
import Steps from "@/components/Steps/Steps";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroWave className="text-gray-50 gradient" />
      <Description />
      <LatestPosts />
      <ContactUs />
    </>
  );
};

export default Home;
