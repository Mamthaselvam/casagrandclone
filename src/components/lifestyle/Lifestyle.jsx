import React from "react";
import { Carousel } from "react-bootstrap";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import "./lifestyle.scss";
import lifestyle1 from "../../assets/lifestyle1.webp";
import life2 from "../../assets/life2.jpg";
import life3 from "../../assets/life3.jpg";

const Lifestyle = () => {
  return (
    <div>
      <Carousel
        nextIcon={<HiArrowLongRight className="carousel-icon right-icon" />}
        prevIcon={<HiArrowLongLeft className="carousel-icon left-icon" />}
        className="custom-carousel"
      >
        <Carousel.Item>
          {/* Slide 1 */}
          <div className="position-relative">
            <img
              className="d-block w-100"
              src={life2}
              alt="Lifestyle Slide 1"
            />
            <div className="position-absolute bottom-0 start-0 ms-5 mt-5">
              <div className="custom-overlay">
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
          {/* Slide 2 */}
          <div className="position-relative">
            <img
              className="d-block w-100"
              src={lifestyle1}
              alt="Lifestyle Slide 2"
            />
            {/* Similar content structure as Slide 1 */}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          {/* Slide 3 */}
          <div className="position-relative">
            <img
              className="d-block w-100"
              src={life3}
              alt="Lifestyle Slide 3"
            />
            {/* Similar content structure as Slide 1 */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Lifestyle;
