import { Container, Row, Col, Card } from "react-bootstrap";
import Wheelchair from "../assets/wheelchair-solid.svg";
import Reader from "../assets/book-open-reader-solid.svg";
import Cane from "../assets/person-cane-solid.svg";
import styles from "./Policy.module.css";

const Policy = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Discount Policy</h1>
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
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the content.
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
