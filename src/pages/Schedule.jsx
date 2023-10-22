import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Schedule = () => {
  return (
    <div>
      <Container>
        <Row xs={1} md={2}>
          <Col className="border ">1 of 3</Col>
          <Col className="border ">2 of 3</Col>
          <Col className="border ">3 of 3</Col>
          <Col className="border ">2 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
