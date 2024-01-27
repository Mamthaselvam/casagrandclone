import "./features.scss";

import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <section id="features">
        {/* First Row */}
        <Container>
          <Row>
            <Col xl={3}>
              <img src={icon1} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>
            <Col xl={3}>
              <img src={icon2} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>
            <Col xl={3}>
              <img src={icon3} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>
            <Col xl={3}>
              <img src={icon4} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xl={4}>
              <img src={icon4} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>

            <Col xl={4}>
              <img src={icon4} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>

            <Col xl={4}>
              <img src={icon4} className="icon" />
              <div className="mt-3">lorem lorem lorem lorem</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
