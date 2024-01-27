// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// global scss
import "./global.scss";
// react router
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
