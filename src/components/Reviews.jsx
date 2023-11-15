import { Container, Row, Col, Card /*Carousel*/ } from "react-bootstrap";
import kayh from "../assets/kayh.jpg";
import russ from "../assets/russ.jpg";
import pao from "../assets/gep.jpg";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div>
      <Container className="mt-5 mb-5 text">
        <h3 className="text-center mb-3">Reviews</h3>
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.imgContainer}>
                  <div className={styles.imgHold}>
                    <img src={pao} />
                  </div>
                </div>
                <div className={styles.cardText}>
                  <h4 className="text-center mt-3">APOLLO</h4>
                  <p>
                    Ticket price is reasonable. A remarkable choice for
                    cost-conscious travelers seeking peace of mind on the road.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.imgContainer}>
                  <div className={styles.imgHold}>
                    <img src={kayh} />
                  </div>
                </div>
                <div className={styles.cardText}>
                  <h4 className="text-center mt-3">SCHYE</h4>
                  <p>
                    Their punctual service, friendly staff, and well-maintained
                    buses ensure a comfortable and stress-free travel
                    experience.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Card className={styles.card}>
              <Card.Body>
                <div className={styles.imgContainer}>
                  <div className={styles.imgHold}>
                    <img src={russ} />
                  </div>
                </div>
                <div className={styles.cardText}>
                  <h4 className="text-center mt-3">IKE</h4>
                  <p>
                    Driver was outstanding! Professional and friendly as he
                    ensured a smooth and safe journey.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* ** carousel v2 not responsive** */}

      {/* <Container className="container text-center mt-5">
        <Row className="row">
          <Carousel fade>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Apollo</h2>
                    <p>
                      Ticket price is reasonable. A remarkable choice for
                      cost-conscious travelers seeking peace of mind on the
                      road.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Schye</h2>
                    <p>
                      Their punctual service, friendly staff, and
                      well-maintained buses ensure a comfortable and stress-free
                      travel experience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Ike</h2>
                    <p>
                      Driver was outstanding! Professional and friendly as he
                      ensured a smooth and safe journey.
                    </p>
                  </div>
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="d-flex gap-2">
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Kayh</h2>
                    <p>
                      Ticket price is reasonable. A remarkable choice for
                      cost-conscious travelers seeking peace of mind on the
                      road.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Russ</h2>
                    <p>
                      Their punctual service, friendly staff, and
                      well-maintained buses ensure a comfortable and stress-free
                      travel experience.
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className={styles.singleBox}>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                  <div className={styles.imgText}>
                    <h2>Pao</h2>
                    <p>
                      Driver was outstanding! Professional and friendly as he
                      ensured a smooth and safe journey.
                    </p>
                  </div>
                </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container> */}

      {/* duplicate */}

      {/* <Container className="container text-center mt-5">
        <Row className="row">
          <Carousel fade>
            <Carousel.Item className="">
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                </div>
                <h2>APOLLO</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                </div>
                <h2>SCHYE</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                </div>
                <h2>IKE</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
            </Carousel.Item>
            <Carousel.Item className="">
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={kayh} />
                  </div>
                </div>
                <h2>Apollo</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={russ} />
                  </div>
                </div>
                <h2>Apollo</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
              <Col className={styles.colContainer} xs={12} md={4}>
                <div className={styles.imgHolder}>
                  <div className={styles.imgArea}>
                    <img src={pao} />
                  </div>
                </div>
                <h2>Apollo</h2>
                <p>
                  Ticket price is reasonable. A remarkable choice for
                  cost-conscious travelers seeking peace of mind on the road.
                </p>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container> */}
    </div>
  );
};

export default Reviews;
