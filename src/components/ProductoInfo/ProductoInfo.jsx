import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./ProductoInfo.css";

const Producto = () => {
  return (
    <>
      <Header></Header>
      <div className="mt-5 pb-5 contenedor-producto w-100 d-flex flex-column container-fluid">
        <div className="w-75 d-flex justify-content-around contenedor-producto-responsive">
          <img
            src="images\imgProductos\unsplash_4OHkK555s1A.png"
            alt=""
            className="fotoProducto"
          />
          <div className="d-flex flex-column justify-content-around w-100 descripcion-producto">
            <h2>Producto XYZ</h2>
            <p className="precio">
              <strong>$60.00</strong>
            </p>
            <p className="">
              Voluptas voluptatum quibusdam similique, class debitis alias
              maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis,
              minima malesuada habitasse distinctio sequi aliqua malesuada.
              Quisque deleniti proin expedita, aliquid litora. Iste recusandae?
              Commodo, quia ridiculus doloribus vero dictum? Penatibus donec
              placeat faucibus, dolorum do. Animi porta anim magnam
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 pb-5 contenedor-productos w-100 d-flex flex-column container-fluid">
        <div className="d-flex w-75 justify-content-between mb-3 container">
          <h3>Productos Similares</h3>
        </div>
        <div className="d-flex justify-content-between w-75 row">
          <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2">
            <img src="images/imgProductos/unsplash_1VV1MRafd7A.png" alt="" />
            <p>Producto XYC</p>
            <strong>
              <p>$60,00</p>
            </strong>
            <Link to="/producto1">Ver producto</Link>
          </div>
        </div>
      </div>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default Producto;
