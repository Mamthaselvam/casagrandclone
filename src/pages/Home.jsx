import Lifestyle from "../components/lifestyle/Lifestyle"
import Banner from "../components/banner/Banner"
import HomeSearchWidget from "../components/homeSearchWidget/HomeSearchWidget";
import ProjectCards from "../components/projectcards/ProjectCards";

const Home = () => {
  return (
    <>
    
    <Banner />
    <HomeSearchWidget />
    <Lifestyle/>
    <ProjectCards/>
    </>
  );
};

export default Home;
