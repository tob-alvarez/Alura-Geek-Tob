import { Link } from "react-router-dom";
import "./Productos.css";
const Productos = () => {
  return (
    <>
      <div className="mt-5 contenedor-productos w-100 d-flex flex-column container-fluid">
        <div className="d-flex w-75 justify-content-between mb-3 container">
          <h3>Star Wars</h3>
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
            <img
              src="../../src/assets/imgProductos/unsplash_1VV1MRafd7A.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img
              src="../../src/assets/imgProductos/unsplash_4OHkK555s1A.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img
              src="../../src/assets/imgProductos/unsplash_6FDXGY9J6y4.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img
              src="../../src/assets/imgProductos/unsplash_epRFE_hBNjo.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img
              src="../../src/assets/imgProductos/unsplash_KeGToDVN0l4.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img
              src="../../src/assets/imgProductos/unsplash_R8L1l9RN198.png"
              alt=""
            />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
