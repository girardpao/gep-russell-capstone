import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../pages/Homepage.module.css";
import About from "../components/About";

const Homepage = () => {
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
          <Row>{/* <button className="btn">Book Now</button> */}</Row>
          <Button variant="success">Book Now</Button>
        </Container>
      </section>
      <About />
    </div>
  );
};

export default Homepage;
