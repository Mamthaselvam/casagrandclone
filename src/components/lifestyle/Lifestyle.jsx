import "./lifeStyle.scss";
import { Carousel, Image } from "react-bootstrap";
import lifeOne from "../../images/lifeOne.jpg";
import lifeTwo from "../../images/lifeTwo.png";
import lifeThree from "../../images/lifeThree.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section id="lifeStyle">
        <Carousel
          fade
          nextIcon={<FaArrowRightLong className="text-warning" />}
          prevIcon={<FaArrowLeftLong className="text-warning" />}
        >
          <Carousel.Item>
            <Image src={lifeOne} alt="slider" />

            <div className="sliderContent shadow-lg">
              <h3 className="fw-bold">LIFESTYLE AT CASAGRAND</h3>
              <p className="mb-4">
                Over 40,000 happy families have found their dream home at
                Casagrand properties.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={lifeTwo} alt="slider" />

            <div className="sliderContent">
              <h3 className="fw-bold">LIFESTYLE AT CASAGRAND</h3>
              <p className="mb-4">
                Have found their dream home at Casagrand properties.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={lifeThree} alt="slider" />

            <div className="sliderContent">
              <h3 className="fw-bold">LIFESTYLE AT CASAGRAND</h3>
              <p className="mb-4">
                Found their dream home at Casagrand properties.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
