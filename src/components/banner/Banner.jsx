import "./banner.scss";

import { Carousel, Image } from "react-bootstrap";
import bannerOne from "../../assets/bannerOne.jpg";
import bannerTwo from "../../assets/bannerTwo.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <Carousel
          nextIcon={<FaChevronRight className="text-black" />}
          prevIcon={<FaChevronLeft className="text-black" />}
        >
          <Carousel.Item>
            <Image src={bannerOne} alt="slider" />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={bannerTwo} alt="slider" />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
