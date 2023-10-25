import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Schedule-hero.module.css";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="schedTitle text-center" id={styles.sched}>
                Daily Bus Schedule
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
