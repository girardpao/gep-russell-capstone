import { Container, Row, Col, Card } from "react-bootstrap";
import Wheelchair from "../assets/wheelchair-solid.svg";
import Reader from "../assets/book-open-reader-solid.svg";
import Cane from "../assets/person-cane-solid.svg";
import styles from "./Policy.module.css";

const Policy = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Discount Policy</h1>
        </Col>
        <Row className="my-5">
          <Col className="d-flex justify-content-center ">
            <Card className="border-0" style={{ width: "25rem" }}>
              <Card.Img
                className={styles.cardImage}
                variant="top"
                src={Wheelchair}
              />
              <Card.Body>
                <Card.Title>Person with disability</Card.Title>
                <Card.Text>
                  <p>
                    Provide your PWD ID when buying tickets. No ID, no discount.
                  </p>
                  <p>
                    Exception: PWD ID is not necessary if the disability is
                    evident, such as when the passenger is an amputee.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="border-0" style={{ width: "25rem" }}>
              <Card.Img className={styles.cardImage} variant="top" src={Cane} />
              <Card.Body>
                <Card.Title>Senior Citizen</Card.Title>
                <Card.Text>
                  Show a Senior Citizen ID, passport, or any other official
                  document that verifies the holder&apos;s age as being sixty
                  (60) years or older.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card className="border-0" style={{ width: "25rem" }}>
              <Card.Img
                className={styles.cardImage}
                variant="top"
                src={Reader}
              />
              <Card.Body>
                <Card.Title>Student</Card.Title>
                <Card.Text>
                  <p>
                    Discount can be availed throughout the year including summer
                    breaks, legal and special legal holidays.
                  </p>
                  <p>
                    Present valid student ID or school registration card with
                    student name, photo and name of school. No ID, no discount.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Policy;
