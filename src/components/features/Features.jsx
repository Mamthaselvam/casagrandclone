import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./features.scss";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
const Features = () => {
  return (
    <>
      <section className="main">
        {/* First Row */}
        <Container>
        <Row>
          <Col>
            <img src={icon1} />
          </Col>
          <Col>
          <img src={icon2} />
          </Col>
          <Col>
          <img src={icon3} />
          </Col>
          <Col>
          <img src={icon4} />
          </Col>
        </Row>

        {/* Second Row */}
        <Row >
          <Col>
          <img src={icon5} />
          </Col>
          <Col>
          <img src={icon6} />
          </Col>
          <Col>
          <img src={icon7} />
          </Col>
        </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
