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
            <img src="src\assets\imgConsolas\unsplash_0POwK6iAiRQ.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgConsolas\unsplash_caNzzoxls8Q.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgConsolas\unsplash_k-xYhI3-gJM.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgConsolas\unsplash_wa5z9o9fgjw.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgConsolas\unsplash_Zjn4dT993-g.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <a href="#">Ver Producto</a>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="src\assets\imgConsolas\unsplash_ZV7lnfyQLmA.png" alt="" />
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
