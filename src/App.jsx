// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// global scss
import "./global.scss";
// react router
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";  
import AboutUs from "./pages/aboutUs/AboutUs";

const App = () => {
  return (
    <>
    <Topbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
