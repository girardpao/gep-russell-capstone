import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Container fluid className="text-center">
          <Row>
            <Col>
              <h1 className="aboutTitle mb-4">Safe Travel Always</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="aboutDescription">YOUR BUDDY GOING NORTH</p>
            </Col>
          </Row>
          <Button as={Link} to="/booking" className={styles.bookNow}>
            Book Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
