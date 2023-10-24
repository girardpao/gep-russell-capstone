import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="d-flex align-items-center" id={styles.about}>
      <Container fluid="md text-center">
        <Row>
          <Col>
            <h3 className="mb-3">Your Travel Companion</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We are dedicated to serve and rise to prominence as one of the
              leading provincial transportation operators in the country. We
              will eventually be expanding our reach in Central, Eastern, and
              Western Luzon, serving pivotal destinations like Pangasinan and
              Cagayan Valley.
            </p>
            <p>
              Pare Bus Lines remains steadfast in its commitment to excellence,
              safety, and delivering a top-quality transportation experience. We
              are proud of the role our services play in contributing to the
              development of our nation.
            </p>
            <p>
              Our core passion lies in creating memorable and fulfilling
              journeys for our employees, passengers, and the communities we
              serve. We take great pride in the institution we have evolved into
              over the years, guided by our unwavering values.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
