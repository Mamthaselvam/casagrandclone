import { useState } from "react";
import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { Select } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import "./searchWidget.scss";
import { projectData } from "../../data/data";

const HomeSearchWidget = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [selectedProjectStatus, setSelectedProjectStatus] = useState("");
  const [showData, setShowData] = useState([]);

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
  };

  const handleProjectTypeChange = (value) => {
    setSelectedProjectType(value);
  };

  const handleProjectStatusChange = (value) => {
    setSelectedProjectStatus(value);
  };

  const handleEnquireNowClick = () => {
    const filteredProjects = projectData.filter(
      (project) =>
        (!selectedLocation || project.location === selectedLocation) &&
        (!selectedProjectType || project.projectType === selectedProjectType) &&
        (!selectedProjectStatus || project.projectStatus === selectedProjectStatus)
    );

    setShowData(filteredProjects);
  };

  const locationOptions = [
    { value: "Chennai", label: "Chennai" },
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Hyderabad", label: "Hyderabad" },
  ];

  const projectTypeOptions = [
    { value: "Apartments", label: "Apartments" },
    { value: "Plots", label: "Plots" },
    { value: "Villas", label: "Villas" },
  ];

  const projectStatusOptions = [
    { value: "New Launch", label: "New Launch" },
    { value: "Under Construction", label: "Under Construction" },
    { value: "Ready to Occupy", label: "Ready to Occupy" },
    { value: "Nearing Completion", label: "Nearing Completion" },
  ];

  return (
    <>
      <section id="homeSearchWidget">
        <h1 className="widgetTitle text-center mb-4">Project Search</h1>

        <Container>
          <Form>
            <Row className="mb-3">
              <Col xl={4} className="my-2">
                <Form.Select
                  onChange={(e) => handleLocationChange(e.target.value)}
                >
                  <option>Location</option>
                  {locationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <Form.Select
                  onChange={(e) => handleProjectTypeChange(e.target.value)}
                >
                  <option>Project Type</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                {selectedProjectType !== "Plots" && (
                  <Select
                    mode="single"
                    style={{ width: "100%" }}
                    placeholder="Project Status"
                    onChange={(values) => handleProjectStatusChange(values)}
                  >
                    {projectStatusOptions.map((option) => (
                      <Select.Option key={option.value} value={option.value}>
                        {option.label}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Col>
            </Row>
          </Form>
        </Container>

        <div className="text-center">
          <Button className="custom-button" onClick={handleEnquireNowClick}>
            Enquire Now
            <span className="mx-2">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>

        <Container>
          <Row>
            {showData?.map((data) => (
              <>
                <Col xl={4} key={data.id} className="my-2">
                  <Card>
                    <Card.Img variant="top" src={data.imgsrc} height="300" />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        <div className="loc">
                          <span className="venue">
                            <SlLocationPin />
                          </span>
                          <span className="location ">{data.place}</span>
                        </div>
                      </Card.Text>
                      <Card.Text>
                        <div>
                          <span className="room">
                            <IoBedOutline />
                          </span>
                          <span className="space">{data.bhk}</span>
                        </div>
                      </Card.Text>
                      <Card.Text>
                        <div>
                          <span className="amount">
                            <HiOutlineCurrencyRupee />
                          </span>
                          <span className="rupees">{data.price}</span>
                        </div>
                      </Card.Text>
                      <button className="share">
                        <span className="sharp">
                          <FaShareAlt />
                        </span>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSearchWidget;
