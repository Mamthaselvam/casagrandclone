import "./lifestyle.scss";
import { Carousel } from "react-bootstrap";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import lifestyle1 from "../../assets/lifestyle1.webp";
import life2 from "../../assets/life2.jpg";
import life3 from "../../assets/life3.jpg";

const Lifestyle = () => {
  return (
    <section id="lifeStyle">
      <Carousel
        nextIcon={<HiArrowLongRight className="carousel-icon right-icon" />}
        prevIcon={<HiArrowLongLeft className="carousel-icon left-icon" />}
        className="custom-carousel"
      >
        <Carousel.Item>
          {/* Slide 1 */}
          <div>
            <img src={lifestyle1} alt="Lifestyle Slide 1" />
            <div className="ms-5 mt-5 bg-danger sliderContent">
              <div>
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home at
                  Casagrand properties.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Add other Carousel Items as needed */}

        <Carousel.Item>
          {/* Slide 1 */}
          <div>
            <img src={life2} alt="Lifestyle Slide 1" />
            <div className="ms-5 mt-5 bg-danger sliderContent">
              <div>
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home at
                  Casagrand properties.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Add other Carousel Items as needed */}

        <Carousel.Item>
          {/* Slide 1 */}
          <div>
            <img src={life3} alt="Lifestyle Slide 1" />
            <div className="ms-5 mt-5 bg-danger sliderContent">
              <div>
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home at
                  Casagrand properties.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Add other Carousel Items as needed */}
      </Carousel>
    </section>
  );
};

export default Lifestyle;
