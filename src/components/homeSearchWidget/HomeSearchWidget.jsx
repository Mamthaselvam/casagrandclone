import { Button, Col, Form, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Slider, Select } from "antd";
import "./searchWidget.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomeSearchWidget = () => {
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
                <Form.Select>
                  <option>Project Type</option>
                  <option value="1">Apartments</option>
                  <option value="2">Plots</option>
                  <option value="3">Villas</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Project Status"
                >
                  <Select.Option value="new_launch">New Launch</Select.Option>
                  <Select.Option value="under_construction">
                    Under Construction
                  </Select.Option>
                  <Select.Option value="ready_to_occupy">
                    Ready to Occupy
                  </Select.Option>
                  <Select.Option value="nearing_completion">
                    Nearing Completion
                  </Select.Option>
                </Select>
              </Col>

              <Col xl={4} className="my-2">
                <Form.Select>
                  <option>Type</option>
                  <option value="1">1BHK</option>
                  <option value="2">2BHK</option>
                  <option value="3">3BHK</option>
                  <option value="4">4BHK</option>
                </Form.Select>
              </Col>

              <Col xl={4} className="my-2">
                <span>25Lac - 8Cr</span>
                <Slider
                  range={{
                    draggableTrack: true,
                  }}
                  defaultValue={[20, 50]}
                />
              </Col>
              <Col xl={4} className="my-2">
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div className="totalCount">41 projects found</div>
                  <div
                    className="text-warning fw-semibold"
                    style={{ cursor: "pointer" }}
                  >
                    Search
                    <span className="mx-2">
                      <FaArrowRightLong />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
        <div className="text-center">
          <p style={{ fontSize: "14px" }}>
            Most Searched Areas :
            <span className="mx-2" style={{ color: "grey" }}>
              <Link to="/"> Omr</Link> | <Link to="/">Tambaram</Link> |
              <Link to="/">Moggapair</Link> | <Link to="/">Pallikaranai</Link>
            </span>
          </p>
          <p style={{ fontSize: "14px" }}>
            Closer to IT corridors in Sholinganallur :
            <span className="mx-2" style={{ color: "grey" }}>
              <Link to="/">First City</Link> | <Link to="/">Cloud9</Link> |
              <Link to="/">Flagship</Link>
            </span>
          </p>
          <p style={{ fontSize: "14px" }}>
            Ready to move in :
            <span className="mx-2" style={{ color: "grey" }}>
              <Link to="/">Cresendo</Link> | <Link to="/">Supremus</Link> |
              <Link to="/"> Smart Town</Link> | <Link to="/">Esquire</Link>
            </span>
          </p>
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
