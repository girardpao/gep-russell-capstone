import Bus from "../assets/red-bus.png";
import Bus2 from "../assets/bus-interior.jpg";
import Bus3 from "../assets/bus-logo-1.webp";

const Login = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Bus} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={Bus2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item ">
            <img src={Bus3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
