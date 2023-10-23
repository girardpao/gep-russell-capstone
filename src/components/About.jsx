import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Container fluid="md text-center">
        <Row>
          <Col>
            <h3>Hello</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, maiores aut! Doloremque molestiae cupiditate
              exercitationem ducimus quaerat veritatis neque cumque.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
