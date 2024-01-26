/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slider, Select } from 'antd';
import './searchWidget.scss'

const HomeSearchWidget = () => {
  const [location, setLocation] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectStatus, setProjectStatus] = useState([]);
  const [propertyType, setPropertyType] = useState('');
  const [moneyRange, setMoneyRange] = useState([25, 800]);

  const handleLocationChange = (value) => {
    setLocation(value);
  };

  const handleProjectTypeChange = (value) => {
    setProjectType(value);
  };

  const handleProjectStatusChange = (value) => {
    setProjectStatus(value);
  };

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };

  const handleMoneyRangeChange = (value) => {
    console.log(`Selected Money Range: ₹${value[0]}L to ₹${value[1]}Cr`);
    setMoneyRange(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    console.log('Form submitted:', {
      location,
      projectType,
      projectStatus,
      propertyType,
      moneyRange,
    });
  };

  return (
    <>
      <section id="homeSearchWidget">
        <h1 className="open-sans-500">A PLACE THAT YOU CALL HOME </h1>

        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col xl={4} className="my-2">
                <Form.Select
                  aria-label="Location"
                  value={location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                >
                  <option>Location</option>
                  <option value="1">Chennai</option>
                  <option value="2">Bengaluru</option>
                  <option value="3">Coimbatore</option>
                  <option value="4">Hyderabad</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <Form.Select
                  aria-label="Project Type"
                  value={projectType}
                  onChange={(e) => handleProjectTypeChange(e.target.value)}
                >
                  <option>Project Type</option>
                  <option value="1">Apartments</option>
                  <option value="2">Plots</option>
                  <option value="3">Villas</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Project Status"
                  value={projectStatus}
                  onChange={handleProjectStatusChange}
                >
                  <Select.Option value="new_launch">New Launch</Select.Option>
                  <Select.Option value="under_construction">Under Construction</Select.Option>
                  <Select.Option value="ready_to_occupy">Ready to Occupy</Select.Option>
                  <Select.Option value="nearing_completion">Nearing Completion</Select.Option>
                </Select>
              </Col>

              <Col xl={4} className="my-2">
                <Form.Select
                  aria-label="Type"
                  value={propertyType}
                  onChange={(e) => handlePropertyTypeChange(e.target.value)}
                >
                  <option>Type</option>
                  <option value="1">1BHK</option>
                  <option value="2">2BHK</option>
                  <option value="3">3BHK</option>
                  <option value="4">4BHK</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
 
  <Slider
    marks={{ 0: '₹25L', 100: '₹8Cr' }}
    range
    step={.10}
    defaultValue={[.25, 8]}
    value={moneyRange}
    onChange={handleMoneyRangeChange}
  />
  <p>Selected Range: ₹{moneyRange[0]}L to ₹{moneyRange[.5]}Cr</p>
</Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          

        </Container>
        <div className='text-center'>
            <p>Most Searched Areas : <span style={{ color: 'grey', fontSize:'14px' }}>Omr | Tambaram | Moggapair | Pallikaranai </span></p>
            <p>Closer to IT corridors in Sholinganallur :  <span style={{ color: 'grey', fontSize:'14px' }}>First City | Cloud9 | Flagship </span></p>
            <p>Ready to move in :   <span style={{ color: 'grey' , fontSize:'14px'}}>Cresendo | Supremus | Smart Town | Esquire </span></p>
            <Button className="custom-button">Enquire Now</Button>
          </div>
      </section>
    </>
  );
};

export default HomeSearchWidget;
