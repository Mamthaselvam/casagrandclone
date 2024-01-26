import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { SlBadge } from 'react-icons/sl';
import './about.scss';

const About = () => {
  return (
    <Container className="text1">
      <h1>ABOUT CASAGRAND</h1>
      <h2>SOUTH INDIA'S LEADING REAL ESTATE COMPANY</h2>
      <Row>
        <Col>
          <p>
            <span className="icon">
              <FaHome size="1rem" />
            </span>
            <br /> DESIGNING AND INNOVATING <br /> GREAT HOMES
          </p>
        </Col>
        <Col>
          <p>
            <span className="icon">
              <MdGroup size="1rem" />
            </span>
            <br /> BUILDING ASPIRATIONS <br /> WITH OUR HOMES
          </p>
        </Col>
        <Col>
          <p>
            <span className="icon">
              <SlBadge size="1rem" />
            </span>
            <br /> DELIVERING ON TIME, <br /> EVERY TIME
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
