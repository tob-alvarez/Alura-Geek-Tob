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
            <img src="https://i.imgur.com/p1HboHE.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/5rCc9em.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/hm5c7yL.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/rn0fmpK.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/hUV97DF.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/UOVSGbo.png" alt="" />
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
