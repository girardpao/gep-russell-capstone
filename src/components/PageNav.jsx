import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

const PageNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-success bg-gradient" id={styles.navbar}>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Pare Bus Lines
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/schedule">
                Schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/contactUs">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default PageNav;
