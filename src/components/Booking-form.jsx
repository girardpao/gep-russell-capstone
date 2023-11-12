import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./Booking-form.module.css";

const bookingForm = () => {
  return (
    <div>
      <Container className={styles.bookingContainer}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                From
              </InputGroup.Text>
              <Form.Select>
                <option>-- Choose --</option>
                <option>Baguio</option>
                <option>Cubao</option>
                <option>Pasay</option>
                <option>Tuguegaro</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                To
              </InputGroup.Text>
              <Form.Select>
                <option>-- Choose --</option>
                <option>Baguio</option>
                <option>Cubao</option>
                <option>Pasay</option>
                <option>Tuguegaro</option>
              </Form.Select>
            </InputGroup>
          </Col>
          {/* <Col>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>-- Choose --</option>
                <option>Baguio</option>
                <option>Cubao</option>
                <option>Pasay</option>
                <option>Tuguegaro</option>
              </Form.Select>
            </Form.Group>
          </Col> */}
          {/* <Col>
            <Form.Group className="mb-3">
              <Form.Select>
                <option>-- Choose --</option>
                <option>Baguio</option>
                <option>Cubao</option>
                <option>Pasay</option>
                <option>Tuguegaro</option>
              </Form.Select>
            </Form.Group>
          </Col> */}
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Date
              </InputGroup.Text>
              <Form.Control
                type="date"
                aria-label="Date"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Passengers
              </InputGroup.Text>
              <Form.Control
                type="number"
                min={1}
                max={10}
                aria-label="Date"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button className={styles.search}>Search</Button>
        </div>
      </Container>
    </div>
  );
};

export default bookingForm;
