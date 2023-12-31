import { Container, Form, Row, Col, Button, Stack } from "react-bootstrap";
import styles from "../pages/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6}>
            <Stack gap={3}>
              <div>
                <h1>Contact Us</h1>
              </div>
              <div>
                <h4>PARE Bus Lines</h4>
              </div>
              <div>
                <p>Address: 674 Edsa E. Rodriguez Quezon City</p>
              </div>
              <div>Tel: +63 2 911 7359</div>
              <div>(Globe) +63 927 712 4349</div>
              <div>(Sun) +63 943 706 5083</div>
              <div>
                <a href="https://www.facebook.com/" target="blank">
                  <i
                    className="fa-brands fa-square-facebook mx-2"
                    id={styles.facebook}
                  ></i>
                </a>
                <a href="https://www.instagram.com/" target="blank">
                  <i
                    className="fa-brands fa-square-instagram mx-2"
                    id={styles.instagram}
                  ></i>
                </a>
              </div>
            </Stack>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message*</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button className={styles.contactSubmit}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
