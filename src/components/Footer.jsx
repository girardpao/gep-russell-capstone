import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="p-4 mt-5" id={styles.footer}>
      {/*<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
               <use xlink:href="#bootstrap"></use> 
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                {/* <use xlink:href="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                {/* <use xlink:href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#facebook"></use> 
              </svg>
            </a>
          </li>
        </ul>
      </footer>*/}
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
          </a>
          <p className="text-body-secondary">Copyright © 2023 Pare Bus Lines</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
