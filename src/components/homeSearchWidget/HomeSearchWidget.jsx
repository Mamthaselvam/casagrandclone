import "./searchWidget.scss";
import { Button, Col, Form, Row, Container } from "react-bootstrap";

const HomeSearchWidget = () => {
  return (
    <>
      <section id="homeSearchWidget">
        <Container>
          <Form>
            <Row className="mb-3">
              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Location">
                    <option>Location</option>
                    <option>option 1</option>
                    <option>option 3</option>
                    <option>option 1</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridZip">
             
                  <Form.Control />
                </Form.Group>
              </Col>

              <Col xl={4}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default HomeSearchWidget;
