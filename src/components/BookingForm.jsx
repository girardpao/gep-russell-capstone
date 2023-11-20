import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Booking-form.module.css";
import { useState, useEffect } from "react";
import http from "../lib/http";

const BookingForm = () => {
  const [places, setPlaces] = useState([]);
  // const [destination, setDestination] = useState([]);

  useEffect(() => {
    getPlaces();
    return () => {};
  }, []);

  async function getPlaces() {
    const api = http();
    const response = await api.get("/places");
    // console.log(response.data.data);
    setPlaces(response.data.data);
  }

  // function selectPlace(e) {
  //   console.log(e.currentTarget.value);
  // }

  return (
    <div>
      <Container className={styles.bookingContainer}>
        <Row className="">
          <Col xs={12} lg={3}>
            <InputGroup className="mb-3" id="destination">
              <InputGroup.Text id="destination">From</InputGroup.Text>
              <Form.Select
                id="destination"
                name="destination"
                aria-label="destination"
                // onChange={(e) => setPlaces(e.currentTarget.value)}
              >
                <option>-- Choose --</option>
                {places.map((destination, index) => {
                  return (
                    <option
                      key={index}
                      value={destination.id}
                      label={destination.place}
                    ></option>
                  );
                })}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col xs={12} lg={3}>
            <InputGroup
              className="mb-3"
              id="destination"
              // onChange={(e) => setPlaces(e.currentTarget.value)}
            >
              <InputGroup.Text id="inputGroup-sizing-default">
                To
              </InputGroup.Text>
              <Form.Select>
                <option>-- Choose --</option>
                {places.map((destination, index) => {
                  return (
                    <option
                      key={index}
                      value={destination.id}
                      label={destination.place}
                    ></option>
                  );
                })}
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
