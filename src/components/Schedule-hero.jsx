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
              <h1 className="aboutTitle text-center">Daily Bus Schedule</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
