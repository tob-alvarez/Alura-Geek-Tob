import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\assets\249ec3bb3cddfb099af8d5d3dac01246.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Febrero Promocional</h2>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\249ec3bb3cddfb099af8d5d3dac01246.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Febrero Promocional</h2>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\assets\249ec3bb3cddfb099af8d5d3dac01246.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Third slide label</h2>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
};

export default Banner;
