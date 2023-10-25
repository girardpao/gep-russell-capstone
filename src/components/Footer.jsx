import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 mt-5" id={styles.footer}>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
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
        </ul>
        <p className="text-center text-body-secondary">
          Copyright © 2023 Pare Bus Lines
        </p>
      </footer>
    </div>
  );
};

export default Footer;
