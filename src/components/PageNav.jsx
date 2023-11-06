import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../assets/bus-logo.png";

const PageNav = () => {
  return (
    <Navbar expand="lg" className="bg-gradient" id={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.logoText}>
          <img src={Logo} className={styles.parelogo} alt="Pare-logo" />
          PARE BUS LINES
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className={styles.nav}
          id={styles.mobileNav}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2">
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
  );
};

export default PageNav;
