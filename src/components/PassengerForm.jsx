import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import styles from "./PassengerForm.module.css";

const PassengerForm = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center">Passenger Information</h1>
      <Row className="my-5">
        <Col>
          <Form.Label htmlFor="basic-url">First Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Last Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label htmlFor="basic-url">Email</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Form.Label htmlFor="basic-url">Mobile Number</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </Col>
      </Row>
      <div className="text-center">
        <Button id={styles.submit} className="px-5">
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default PassengerForm;
