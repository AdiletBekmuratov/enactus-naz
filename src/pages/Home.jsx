import ContactUs from "@/components/ContactUs";
import Description from "@/components/MainPage/Description";
import Description2 from "@/components/MainPage/Description2";
import Hero from "@/components/MainPage/Hero";
import HeroWave from "@/components/MainPage/HeroWave";
import LatestPosts from "@/components/MainPage/LatestPosts";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroWave className="text-gray-50 gradient wave-up" />
      <Description2 />
      <LatestPosts />
      <ContactUs />
    </>
  );
};

export default Home;
