import { Link } from "react-router-dom";
import "./Productos.css";

const ProductosConsola = () => {
  return (
    <>
      <div className="mt-5 contenedor-productos w-100 d-flex flex-column container-fluid">
        <div className="d-flex w-75 justify-content-between mb-3 container">
          <h3>Consolas</h3>
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
            <img src="https://i.imgur.com/gvDNcte.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/wOLzl1P.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/c1f4MZM.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/GM6oLMT.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/OSNjDFM.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/3AsAY5r.png" alt="" />
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

export default ProductosConsola;
