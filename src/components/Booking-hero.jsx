import { Container, Row, Col } from "react-bootstrap";
import styles from "./Booking-hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="aboutTitle text-center" id={styles.heroText}>
              PARE Bus Lines
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
