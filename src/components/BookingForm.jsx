import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Booking-form.module.css";
import { useState, useEffect } from "react";
import http from "../lib/http";

const BookingForm = () => {
  const [busSched, setBusSched] = useState([]);
  const [destination, setDestination] = useState();

  useEffect(() => {
    getBusSched();
    return () => {};
  }, []);

  async function getBusSched() {
    const api = http();
    const response = await api.get("/buses");
    console.log(response.data.data);
    setBusSched(response.data.data);
  }

  // function search() {}

  return (
    <div>
      <Container className={styles.bookingContainer}>
        <Row className="">
          <Col xs={12} lg={3}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                From
              </InputGroup.Text>
              <Form.Select>
                {busSched.map((destination, index) => {
                  return (
                    <option
                      key={index}
                      value={destination.id}
                      label={destination.destinationFrom}
                    ></option>
                  );
                })}
                {/* <option>-- Choose --</option>
                <option>Baguio</option>
                <option>Cubao</option>
                <option>Pasay</option>
                <option>Tuguegaro</option> */}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col xs={12} lg={3}>
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
          <Col xs={12} lg={3}>
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
          <Col xs={12} lg={3}>
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

export default BookingForm;
