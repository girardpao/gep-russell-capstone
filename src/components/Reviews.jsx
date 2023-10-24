import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Reviews = () => {
  return (
    <div>
      <Container className="mt-5 mb-5 text">
        <h3 className="text-center mb-3">Reviews</h3>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                Pare Bus Lines is exceptional! Their punctual service, friendly
                staff, and well-maintained buses ensure a comfortable and
                stress-free travel experience. I highly recommend them for safe
                and reliable journeys.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                Driver was outstanding. Their expertise and professionalism
                ensured a smooth and safe journey. Their friendly demeanor and
                knowledge of the route made the trip truly enjoyable.
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                Impressively combines safety and affordability. We felt secure
                throughout the journey, and their ticket prices are
                budget-friendly. A remarkable choice for cost-conscious
                travelers seeking peace of mind on the road.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
