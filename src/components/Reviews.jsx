import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import kayh from "../assets/kayh.jpg";
import russ from "../assets/russ.jpg";
import pao from "../assets/gep.jpg";
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
      {/* <Container className="container text-center mt-5">
        <Row className="row">
          <Carousel fade>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={kayh} />
                </div>
                <div className={styles.imgText}>
                  <h2>Kayh</h2>
                  <p>
                    Their punctual service, friendly staff, and well-maintained
                    buses ensure a comfortable and stress-free travel
                    experience.
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={russ} />
                </div>
                <div className={styles.imgText}>
                  <h2>Russ</h2>
                  <p>
                    Driver was outstanding! Professional and friendly as he
                    ensured a smooth and safe journey.
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={pao} />
                </div>
                <div className={styles.imgText}>
                  <h2>Pao</h2>
                  <p>
                    Ticket price is reasonable. A remarkable choice for
                    cost-conscious travelers seeking peace of mind on the road.
                  </p>
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={pao} />
                </div>
                <div className={styles.imgText}>
                  <h2>Apollo</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, consectetur!
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={kayh} />
                </div>
                <div className={styles.imgText}>
                  <h2>Schye</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, mollitia!
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}></div>
                <div className={styles.imgArea}>
                  <img src={russ} />
                </div>
                <div className={styles.imgText}>
                  <h2>Ike</h2>
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
      </Container> */}

      {/* ** DUPLICATE FOR TESTING** */}

      <Container className="container text-center mt-5">
        <Row className="row">
          <Carousel fade>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                  <h2>Kayh</h2>
                  <p>
                    Their punctual service, friendly staff, and well-maintained
                    buses ensure a comfortable and stress-free travel
                    experience.
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                  <h2>Russ</h2>
                  <p>
                    Driver was outstanding! Professional and friendly as he
                    ensured a smooth and safe journey.
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                  <h2>Pao</h2>
                  <p>
                    Ticket price is reasonable. A remarkable choice for
                    cost-conscious travelers seeking peace of mind on the road.
                  </p>
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                  <h2>Apollo</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, consectetur!
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                  <h2>Schye</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, mollitia!
                  </p>
                </div>
              </Col>
              <Col>
                <div className={styles.imgText}>
                  <div className={styles.singleBox}></div>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                  <h2>Ike</h2>
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
