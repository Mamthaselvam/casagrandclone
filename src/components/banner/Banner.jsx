import "./banner.scss";

import Carousel from "react-bootstrap/Carousel";
import bannerOne from "../../assets/bannerOne.jpg";
import bannerTwo from "../../assets/bannerTwo.jpg";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <Carousel>
          <Carousel.Item>
            <img src={bannerOne} alt="slider" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={bannerTwo} alt="slider" />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
