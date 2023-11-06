import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import kayh from "../assets/kayh.jpg";
import kayh2 from "../assets/kayh2.jpg";
import kayh3 from "../assets/kayh3.jpg";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div>
      {/* <Container className="mt-5 mb-5 text">
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
      </Container> */}
      <Container className="container text-center mt-5">
        <Row className="row">
          <Carousel fade>
            <Carousel.Item className="d-flex">
              <Col md={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh} className={styles.kayh1} />
                </div>
                <div className="img-text">
                  <h2>Person One</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quasi corrupti neque consequuntur, excepturi
                    enim.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh2} className={styles.kayh2} />
                </div>
                <div className="img-text">
                  <h2>Person Two</h2>
                  <p>
                    ipsum dolor sit amet consectetur adipisicing elit. Rem
                    voluptate culpa eaque commodi animi voluptas corporis.
                  </p>
                </div>
              </Col>
              <Col cmd={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh3} className={styles.kayh3} />
                </div>
                <div className="img-text">
                  <h2>Person Three</h2>
                  <p>
                    dolor sit amet consectetur adipisicing elit. Quos eveniet
                    dolor natus sunt, eaque vitae voluptatem. Modi.
                  </p>
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="d-flex">
              <Col md={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh3} className={styles.kayh1} />
                </div>
                <div className="img-text">
                  <h2>Person four</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quasi corrupti neque consequuntur, excepturi
                    enim.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh} className={styles.kayh2} />
                </div>
                <div className="img-text">
                  <h2>Person five</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quasi corrupti neque consequuntur, excepturi
                    enim.
                  </p>
                </div>
              </Col>
              <Col cmd={4}>
                <div className="single-box"></div>
                <div className="img-area">
                  <img src={kayh2} className={styles.kayh3} />
                </div>
                <div className="img-text">
                  <h2>Person six</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates quasi corrupti neque consequuntur, excepturi
                    enim.
                  </p>
                </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
