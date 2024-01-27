import "./lifeStyle.scss";
import { Carousel, Image } from "react-bootstrap";
import bannerOne from "../../assets/bannerOne.jpg";
import bannerTwo from "../../assets/bannerTwo.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section id="lifeStyle">
        <Carousel
          nextIcon={<FaArrowRightLong className="text-warning" />}
          prevIcon={<FaArrowLeftLong className="text-warning" />}
        >
          <Carousel.Item>
            <Image src={bannerOne} alt="slider" />
            <div className="sliderContent">
              <h3 className="fw-bold">LIFESTYLE AT CASAGRAND</h3>
              <p>
                Over 40,000 happy families have found their dream home at
                Casagrand properties.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={bannerTwo} alt="slider" />

            <div className="sliderContent">
              <h3>LIFESTYLE AT CASAGRAND</h3>
              <p>
                Over 40,000 happy families have found their dream home at
                Casagrand properties.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
