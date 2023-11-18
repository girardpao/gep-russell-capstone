import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../assets/bus-logo.png";

const PageNav = () => {
  return (
    <Navbar expand="lg" id={styles.navbar}>
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
        <Navbar.Collapse id="navbarScroll" className="text-center">
          <Nav className="ms-auto my-2">
            <Nav.Link as={Link} to="/schedule" className={styles.navLinks}>
              Schedule
            </Nav.Link>
            <Nav.Link as={Link} to="/contactUs" className={styles.navLinks}>
              Contact Us
            </Nav.Link>
            <Button
              className={styles.bookNow}
              as={Link}
              to="/booking"
              variant="primary"
            >
              Book Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PageNav;
