import { Link } from "react-router-dom";
import "./Productos.css";
const ProductosDiversos = () => {
  return (
    <>
      <div className="mt-5 contenedor-productos w-100 d-flex flex-column container-fluid">
        <div className="d-flex w-75 justify-content-between mb-3 container">
          <h3>Diversos</h3>
          <Link to="/productos">
            Ver Todo
            <img
              src="../../src/assets/arrow_back_black_24dp 1 (1).svg"
              alt=""
            />
          </Link>
        </div>
        <div className="d-flex justify-content-between w-75 row">
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_bUgaIaZysH0.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_fMP-oCze3AY.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_jMT6BrgBuXU.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_MxVkWPiJALs.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_r27umXAelDc.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgDiversos\unsplash_sYVY_ZKwaxU.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductosDiversos;
