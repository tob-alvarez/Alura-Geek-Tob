import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Todos = () => {
  return (
    <>
      <Header></Header>
      <div className="mt-5 contenedor-productos w-100 d-flex flex-column container-fluid">
        <div className="d-flex w-75 justify-content-between mb-3 container">
          <h3>Todos los productos</h3>
          <Link to="/nuevo-producto">Agregar Producto</Link>
        </div>
        <div className="d-flex justify-content-between w-75 row">
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/p1HboHE.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p className="mb-3">#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/5rCc9em.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/hm5c7yL.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/rn0fmpK.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/hUV97DF.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/UOVSGbo.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
        </div>
        <div className="d-flex justify-content-between w-75 row">
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/CKDxcKY.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/FozJuu4.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p className="mb-3">#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/XYBJIa3.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/kL4Wksw.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/w24fdPr.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/NkmbpSN.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
        </div>
        <div className="d-flex justify-content-between w-75 row">
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/GM6oLMT.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/OSNjDFM.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/gvDNcte.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/wOLzl1P.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/3AsAY5r.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="https://i.imgur.com/c1f4MZM.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <p>#1111</p>
          </div>
        </div>
      </div>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default Todos;
