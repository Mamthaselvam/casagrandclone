import { useState } from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { Slider, Select } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchWidget.scss";

const HomeSearchWidget = () => {
  const [selectedProjectType, setSelectedProjectType] = useState("");

  const handleProjectTypeChange = (value) => {
    setSelectedProjectType(value);
  };

  return (
    <>
      <section id="homeSearchWidget">
        <h1 className="widgetTitle text-center mb-4">Project Search</h1>

        <Container>
          <Form>
            <Row className="mb-3">
              <Col xl={4} className="my-2">
                <Form.Select>
                  <option>Location</option>
                  <option value="1">Chennai</option>
                  <option value="2">Bengaluru</option>
                  <option value="3">Coimbatore</option>
                  <option value="4">Hyderabad</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <Form.Select onChange={(e) => handleProjectTypeChange(e.target.value)}>
                  <option>Project Type</option>
                  <option value="1">Apartments</option>
                  <option value="2">Plots</option>
                  <option value="3">Villas</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                {selectedProjectType !== "2" && (
                  <Select mode="multiple" style={{ width: "100%" }} placeholder="Project Status">
                    <Select.Option value="new_launch">New Launch</Select.Option>
                    <Select.Option value="under_construction">Under Construction</Select.Option>
                    <Select.Option value="ready_to_occupy">Ready to Occupy</Select.Option>
                    <Select.Option value="nearing_completion">Nearing Completion</Select.Option>
                  </Select>
                )}
              </Col>
            </Row>
          </Form>
        </Container>

        <div className="text-center">
          <Button className="custom-button">
            Enquire Now
            <span className="mx-2">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomeSearchWidget;
