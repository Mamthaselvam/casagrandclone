import Section from "../components/section/Section"
import Banner from "../components/banner/Banner"
import Login from "../components/login/Login"
import Banner from "../components/banner/Banner";
import HomeSearchWidget from "../components/homeSearchWidget/HomeSearchWidget";

const Home = () => {
  return (
    <>
    
    <Banner />
    <Login/>
    <Section/>
      <Banner />
      <HomeSearchWidget />
    </>
  );
};

export default Home;
