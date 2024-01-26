import { Carousel } from "react-bootstrap";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import lifestyle1 from "../../assets/lifestyle1.webp";
import life2 from "../../assets/life2.jpg";
import life3 from "../../assets/life3.jpg";
import "./lifestyle.scss";

const Lifestyle = () => {
  return (
    <section id="lifeStyle">
      <Carousel className="position-relative">
        <Carousel.Item>
          <div className="position-relative">
            <img className="d-block w-100" src={life2} alt="First slide" />
            <div className="position-absolute bottom-0 start-0 ms-5 mt-5">
              <div className=" click h-1/5 w-3/5 bg-white  mt-4">
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home and
                  Casagrand properties.
                </p>
                {/* <div className="buttons">
                  <button className="left ">
                    <span>
                      <HiArrowLongLeft />
                    </span>
                  </button>

                  <button className="leftarrow ">
                    <span>
                      <HiArrowLongRight />
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <img
              className="d-block h-100"
              src={lifestyle1}
              alt="Second slide"
            />
            <div className="position-absolute bottom-0 start-0 ms-5 mt-5">
              <div className=" click h-1/5 w-3/5 bg-white  mt-4">
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home and
                  Casagrand properties.
                </p>
                {/* <div className="buttons">
                  <button className="left ">
                    <span>
                      <HiArrowLongLeft />
                    </span>
                  </button>

                  <button className="leftarrow ">
                    <span>
                      <HiArrowLongRight />
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="position-relative">
            <img className="d-block w-100" src={life3} alt="third slide" />
            <div className="position-absolute bottom-0 start-0 ms-5 mt-5 border-r-4 shadow-slate-400   ">
              <div className=" click h-1/5 w-3/5 bg-white  mt-4">
                <p className="fs-2">LIFESTYLE AT CASAGRAND</p>
                <p className="fs-7">
                  Over 40,000 happy families have found their dream home and
                  Casagrand properties.
                </p>
                {/* <div className="buttons">
                  <button className="left ">
                    <span>
                      <HiArrowLongLeft />
                    </span>
                  </button>

                  <button className="leftarrow ">
                    <span>
                      <HiArrowLongRight />
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Lifestyle;
