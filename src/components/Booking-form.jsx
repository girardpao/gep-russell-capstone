import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const bookingForm = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="mb-2">
          <Form.Group className="mb-3">
            <Form.Label>Departing:</Form.Label>
            <Form.Select>
              <option>-- Choose --</option>
            </Form.Select>
          </Form.Group>
        </Row>
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
          <Button variant="success">Book Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default bookingForm;
