import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import styles from "../pages/ContactUs.module.css";

const ContactUs = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <Stack gap={3}>
              <div className="p-2">
                <h1>Contact Us</h1>
              </div>
              <div className="p-2">
                <h4>PARE Bus Lines</h4>
              </div>
              <div className="p-2">
                <p>Address: 674 Edsa E. Rodriguez Quezon City</p>
              </div>
              <div>Tel: +63 2 911 7359</div>
              <div>(Globe) +63 927 712 4349</div>
              <div>(Sun) +63 943 706 5083</div>
              <a href="https://www.facebook.com/" target="blank">
                <i
                  className="fa-brands fa-square-facebook"
                  id={styles.facebook}
                ></i>
              </a>
            </Stack>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message*</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="success">Success</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
