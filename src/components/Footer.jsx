import { Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3" id={styles.footer}>
      <Row className="text-center border-bottom pb-3" id={styles.footerContent}>
        <Col>
          <h5>Reach Us</h5>
        </Col>
        <Col>
          <p className="fw-bold">Guidelines</p>
          <p>Discount Policy</p>
          <p>Terms and conditions</p>
        </Col>
        <Col>
          <h5>Support</h5>
          <Link to="/contactUs" className="nav-link px-2 text-body-secondary">
            Contact Us
          </Link>
        </Col>
      </Row>
      {/* <ul className="nav justify-content-center border-bottom">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/schedule" className="nav-link px-2 text-body-secondary">
            Schedule
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactUs" className="nav-link px-2 text-body-secondary">
            Contact Us
          </Link>
        </li>
      </ul> */}
      <p className="text-center text-body-secondary mt-3" id={styles.copyright}>
        Copyright © 2023 Pare Bus Lines
      </p>
    </footer>
  );
};

export default Footer;
