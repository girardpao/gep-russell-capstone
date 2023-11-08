import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./Booking-form.module.css";

const bookingForm = () => {
  return (
    <div>
      <Container className="mt-5">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
          <Form.Control
            type="date"
            aria-label="Date"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Passengers
          </InputGroup.Text>
          <Form.Control
            type="number"
            min={1}
            max={30}
            aria-label="Date"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Row className="mb-2">
          <Form.Group className="mb-3">
            <Form.Label>From:</Form.Label>
            <Form.Select>
              <option>-- Choose --</option>
              <option>Baguio</option>
              <option>Cubao</option>
              <option>Pasay</option>
              <option>Tuguegaro</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group className="mb-3">
            <Form.Label>To:</Form.Label>
            <Form.Select>
              <option>-- Choose --</option>
              <option>Baguio</option>
              <option>Cubao</option>
              <option>Pasay</option>
              <option>Tuguegaro</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="text-center">
          <Button className={styles.search}>Search</Button>
        </div>
      </Container>
    </div>
  );
};

export default bookingForm;
