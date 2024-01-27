import Lifestyle from "../components/lifestyle/Lifestyle"
import Banner from "../components/banner/Banner"
import HomeSearchWidget from "../components/homeSearchWidget/HomeSearchWidget";
import ProjectCards from "../components/projectcards/ProjectCards";
import About from "../components/about/About";
import Features from "../components/features/Features";

const Home = () => {
  return (
    <>
    
    <Banner />
    <HomeSearchWidget />
    <Lifestyle/>
    <Features />
    <ProjectCards/>
    <About />
    </>
  );
};

export default Home;
