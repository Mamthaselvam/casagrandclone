import Section from "../components/section/Section";
import Banner from "../components/banner/Banner";
import HomeSearchWidget from "../components/homeSearchWidget/HomeSearchWidget";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeSearchWidget />
      <Section />
      <Banner />
    </>
  );
};

export default Home;
