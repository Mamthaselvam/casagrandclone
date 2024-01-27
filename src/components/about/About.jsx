import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaBuilding,FaRegSmile } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { PiBracketsSquareLight } from "react-icons/pi";

import { SlBadge } from 'react-icons/sl';
import './about.scss';

const About = () => {
  return (
    <Container className="text1">
      <h1 className="casagrand-title">ABOUT CASAGRAND</h1>

     <h2 className="casagrand-subtitle">SOUTH INDIA'S LEADING REAL ESTATE COMPANY</h2>

      <Row>
        <Col>
          <p>
  <span className="casagrand-icon">
     <FaHome size="1rem" /> 
  </span>
  <br />
  <span className="casagrand-text1">DESIGNING AND INNOVATING</span>
  <br />
  <span className="casagrand-text1">GREAT HOMES</span>
</p>
        </Col>
        <Col>
              <p>
  <span className="casagrand-icon">
     <MdGroup size="1rem" /> 
  </span>
  <br />
  <span className="casagrand-text1">BUILDING ASPIRATIONS</span>
  <br />
  <span className="casagrand-text1">WITH OUR HOMES</span>
</p>
        </Col>
        <Col>
        <p>
  <span className="casagrand-icon">
     < SlBadge  size="1rem" /> 
  </span>
  <br />
  <span className="casagrand-text1">DELIVERING ON TIME,</span>
  <br />
  <span className="casagrand-text1">EVERY TIME</span>
</p>
        </Col>
      </Row>
    <Row>
     <Col> <p className="casagrand-paragraph">
        Casagrand Builder Private Limited is a real estate enterprise committed to building aspirations and delivering value. In the last nineteen years, we have developed over 38 million sqft of prime residential real estate across Chennai, Bengaluru, and Coimbatore. Over 40,000 happy families across 140+ landmark properties stand testimony to our commitment.

In the nineteen years of our journey, we at Casagrand are all set to progress further forward with projects worth over ₹8000 crores in the pipeline.
      
      <br/>
      <br/>
      
      In the nineteen years of our journey, we at Casagrand are all set to progress further forward with projects worth over ₹8000 crores in the pipeline.
      </p>
      
      <p className="casagrand-container">
  <span className="casagrand-icon1">
    <FaBuilding size="1rem" />
  </span>
  <span className="casagrand-text1">140+
</span>
  <br />
  <span className="casagrand-text1">LANDMARKS</span>
</p>
<p className="casagrand-container">
  <span className="casagrand-icon1">
    <FaRegSmile size="1rem" />
  </span>
  <span className="casagrand-text1">40000+</span>
  <span className="casagrand-text1">HAPPY CUSTOMERS</span>
</p>
<p className="casagrand-container">
  <span className="casagrand-icon1">
    <PiBracketsSquareLight size="1rem" />
  </span>
  <span className="casagrand-text1">38 MILLION+</span>
  <span className="casagrand-text1">SQ.FEET DEVELOPED</span>
</p>
      </Col>
      <Col>
  
     

      </Col>
    </Row>
    </Container>
  );
};

export default About;
