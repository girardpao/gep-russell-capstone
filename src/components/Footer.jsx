import { Row, Col, Modal } from "react-bootstrap";
import { useState } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="py-3" id={styles.footer}>
      <Row className="text-center border-bottom pb-3" id={styles.footerContent}>
        <Col>
          <h5>Reach Us</h5>
        </Col>
        <Col>
          <h5 className="fw-bold">Guidelines</h5>
          <div>
            <Link className={styles.guidelines} to="/discountPolicy">
              Discount Policy
            </Link>
          </div>
          <Link
            className={styles.guidelines}
            variant="primary"
            onClick={handleShow}
          >
            Terms and Conditions
          </Link>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header className={styles.modalHeader} closeButton>
              <Modal.Title>Terms and Conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                PARE Bus Lines shall not be held accountable for any loss or
                damage to passengers&apos; effects, luggage, or personal
                belongings, unless such items are declared, presented, and a
                detailed list provided. Freight charges must be paid to the
                shipping clerk or conductor, and passengers must adhere to the
                instructions of the shipping clerk or conductor regarding the
                care and safekeeping of their belongings.
              </p>

              <p>
                The company will not return or replace lost passenger tickets
                for any reason. In such cases, passengers will be obligated to
                purchase a new ticket and pay the applicable fare.
              </p>

              <p>
                Any modification of the information provided on the reverse side
                of this reservation ticket will result in rendering it null and
                void.
              </p>
            </Modal.Body>
          </Modal>
        </Col>
        <Col>
          <h5 className="fw-bold">Support</h5>
          <Link to="/contactUs" className="nav-link">
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
