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
        <Container fluid>
          <Row>
            <Col>
              <h1 className="aboutTitle">PARE Bus Lines</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="aboutDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                repellat!
              </p>
            </Col>
          </Row>
          <Button variant="success" as={Link} to="/booking">
            Book Now
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
