import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../assets/bus-logo.jpg";

const PageNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-success bg-gradient" id={styles.navbar}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className={styles.logoText}>
            <img src={Logo} className={styles.parelogo} alt="Pare-logo" />
            Pare Bus Lines
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className={styles.nav} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/schedule">
                Schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs">
                Contact Us
              </Nav.Link>
              <Button variant="dark" as={Link} to="/booking">
                Book Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default PageNav;
