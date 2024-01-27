import "./about.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaHome, FaBuilding, FaRegSmile } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { PiBracketsSquareLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import aboutImg from "../../assets/aboutImg.jpg";
import { FaPlay } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section id="about">
        <Container>
          <div className="text-center">
            <h2>ABOUT CASAGRAND</h2>
            <h6 className="my-4">SOUTH INDIA'S LEADING REAL ESTATE COMPANY</h6>
          </div>

          {/* content */}
          <Row>
            <Col xl={7} className="mx-auto text-center">
              <div className="d-flex justify-content-center align-content-center">
                <div>
                  <div>
                    <FaHome />
                  </div>
                  <div>DESIGNING AND INNOVATING GREAT HOMES</div>
                </div>

                <div>
                  <div>
                    <MdGroup />
                  </div>
                  <div>BUILDING ASPIRATIONS WITH OUR HOMES</div>
                </div>
                <div>
                  <div>
                    <SlBadge />
                  </div>
                  <div>DELIVERING ON TIME, EVERY TIME</div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xl={6}>
              <div>
                <p>
                  Casagrand Builder Private Limited is a real estate enterprise
                  committed to building aspirations and delivering value. In the
                  last nineteen years, we have developed over 38 million sqft of
                  prime residential real estate across Chennai, Bengaluru, and
                  Coimbatore. Over 40,000 happy families across 140+ landmark
                  properties stand testimony to our commitment.
                </p>

                <p>
                  In the nineteen years of our journey, we at Casagrand are all
                  set to progress further forward with projects worth over ₹8000
                  crores in the pipeline.
                </p>

                <div className="d-flex align-content-center justify-content-evenly">
                  <div className="d-flex">
                    <span className="mx-3">
                      <FaBuilding />
                    </span>
                    <div>
                      <p className="mb-0">140+</p>
                      <p className="mb-0">LANDMARKS</p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <span className="mx-3">
                      <FaRegSmile />
                    </span>
                    <div>
                      <p className="mb-0">40000+</p>
                      <p className="mb-0">HAPPY CUSTOMERS</p>
                    </div>
                  </div>

                  <div className="d-flex">
                    <span className="mx-3">
                      <PiBracketsSquareLight />
                    </span>
                    <div>
                      <p className="mb-0">38 MILLION+</p>
                      <p className="mb-0">SQ.FEET DEVELOPED</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="aboutRight">
                <Image src={aboutImg} alt="about" />
                <div className="ytPlay">
                  <a href="/" className="text-black">
                    <FaPlay style={{ fontSize: "1.5rem" }} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
