import "./projectCards.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaShareAlt } from "react-icons/fa";
import { BsArrowRightCircle, BsArrowDownCircle } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import {
  maincontent,
  hyderabad,
  coimbatore,
  bengaluru,
} from "../../data/data.jsx";
import { Container, Card, Row, Col } from "react-bootstrap";

const ProjectCards = () => {
  return (
    <>
      <section id="projectCard">
        <Container>
          <div>
            <p className="text-center fs-1">PROJECTS ACROSS SOUTH INDIA</p>
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-4 justify-content-center custom-tab"
            >
              <Tab eventKey="home" title="CHENNAI">
                <p className="text-center">Apartments | Villa | Plots</p>

                <Row className="center-row ">
                  {maincontent.map((item) => {
                    return (
                      <Col xl={4} key={item.id} className="column">
                        <div className="boxes shadow">
                          <Card className="card mb-4">
                            <Card.Img className="photo" src={item.imgsrc} />
                            <Card.Title className="tittle">
                              {item.title}
                            </Card.Title>
                            <Card.Text>
                              <div className="loc">
                                <span className="venue">
                                  <SlLocationPin />
                                </span>
                                <span className="location ">{item.place}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div>
                                <span className="room">
                                  <IoBedOutline />
                                </span>
                                <span className="space">{item.bhk}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div className="end">
                                <span className="amount">
                                  <HiOutlineCurrencyRupee />
                                </span>
                                <span className="rupees">{item.price}</span>
                              </div>
                              <div className="extra">
                                <div>
                                  <button className="view">
                                    View More <BsArrowRightCircle />
                                  </button>
                                </div>
                                <div>
                                  <button className="down">
                                    Bronchure <BsArrowDownCircle />
                                  </button>
                                </div>
                              </div>
                            </Card.Text>
                            <button className="share">
                              <span className="sharp">
                                <FaShareAlt/>
                              </span>
                            </button>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="profile" title="COIMBATORE">
                <p className="text-center">Apartments | Villa </p>
                <Row className="row ">
                  {coimbatore.map((item) => {
                    return (
                      <Col xl={4} key={item.id}>
                        <div className="boxes shadow">
                          <Card className="mb-5">
                            <Card.Img className="photo" src={item.imgsrc} />
                            <Card.Title className="tittle">
                              {item.title}
                            </Card.Title>
                            <Card.Text>
                              <div className="ml-2">
                                <span className="venue">
                                  <SlLocationPin />
                                </span>
                                <span className="location">{item.place}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div>
                                <span className="room">
                                  <IoBedOutline />
                                </span>
                                <span className="space">{item.bhk}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div className="end">
                                <span className="amount">
                                  <HiOutlineCurrencyRupee />
                                </span>
                                <span className="rupees">{item.price}</span>
                              </div>

                              <div className="extra">
                                <button className="view">
                                  View More <BsArrowRightCircle />
                                </button>
                                <button className="down">
                                  Bronchure <BsArrowDownCircle />
                                </button>
                              </div>
                            </Card.Text>
                            <button className="share">
                              <span className="sharp">
                                <FaShareAlt />
                              </span>
                            </button>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="longer-tab" title="BENGALURU">
                <p className="text-center">Apartments</p>
                <Row className="row ">
                  {bengaluru.map((item) => {
                    return (
                      <Col xl={4} key={item.id}>
                        <div className="boxes shadow">
                          <Card className="mb-5">
                            <Card.Img className="photo" src={item.imgsrc} />
                            <Card.Title className="tittle">
                              {item.title}
                            </Card.Title>
                            <Card.Text>
                              <div className="ml-2">
                                <span className="venue">
                                  <SlLocationPin />
                                </span>
                                <span className="location">{item.place}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div>
                                <span className="room">
                                  <IoBedOutline />
                                </span>
                                <span className="space">{item.bhk}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div className="end">
                                <span className="amount">
                                  <HiOutlineCurrencyRupee />
                                </span>
                                <span className="rupees">{item.price}</span>
                              </div>
                              <div className="extra">
                                <button className="view">
                                  View More <BsArrowRightCircle />
                                </button>
                                <button className="down">
                                  Bronchure <BsArrowDownCircle />
                                </button>
                              </div>
                            </Card.Text>
                            <button className="share">
                              <span className="sharp">
                                <FaShareAlt />
                              </span>
                            </button>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
              <Tab eventKey="contact" title="HYDERABAD">
                <p className="text-center">Villa</p>
                <Row className="row ">
                  {hyderabad.map((item) => {
                    return (
                      <Col xl={4} key={item.id}>
                        <div className="boxes shadow">
                          <Card className="mb-5">
                            <Card.Img className="photo" src={item.imgsrc} />
                            <Card.Title className="tittle">
                              {item.title}
                            </Card.Title>
                            <Card.Text>
                              <div className="ml-2">
                                <span className="venue">
                                  <SlLocationPin />
                                </span>
                                <span className="location">{item.place}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div>
                                <span className="room">
                                  <IoBedOutline />
                                </span>
                                <span className="space">{item.bhk}</span>
                              </div>
                            </Card.Text>
                            <Card.Text>
                              <div className="end">
                                <span className="amount">
                                  <HiOutlineCurrencyRupee />
                                </span>
                                <span className="rupees">{item.price}</span>
                              </div>
                              <div className="extra">
                                <button className="view">
                                  View More <BsArrowRightCircle />
                                </button>
                                <button className="down">
                                  Bronchure <BsArrowDownCircle />
                                </button>
                              </div>
                            </Card.Text>
                            <button className="share">
                              <span className="sharp">
                                <FaShareAlt />
                              </span>
                            </button>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectCards;
