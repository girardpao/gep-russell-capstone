import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Reviews = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
