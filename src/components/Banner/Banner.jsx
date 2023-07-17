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
              src="https://i.imgur.com/eHtKXKR.jpg"
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
              src="https://wallpaper.dog/large/978936.jpg"
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
              src="https://www.hdwallpapers.in/download/red_sus_among_us_4k_hd_games-1920x1080.jpg"
              className="d-block w-100 banner"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Easter Egg</h2>
              <p>
                Dejame una estrella en mi{" "}
                <a href="https://github.com/tob-alvarez/Alura-Geek-Tob">
                  repositorio
                </a>
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
