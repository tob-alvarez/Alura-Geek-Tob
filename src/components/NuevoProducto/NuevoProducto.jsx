import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./NuevoProducto.css";

const NuevoProducto = () => {
  return (
    <>
      <Header></Header>
      <section className="sectionLogin col-sm-12">
        <div className="d-flex flex-column justify-content-center contenedor-InicioSesion gap-4 col-sm-12 col-md-12">
          <h2>Agregar nuevo producto</h2>
          <input
            type="form-control"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            placeholder="URL de la imagen"
          />
          <input
            type="text"
            placeholder="Categoria"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <input
            type="text"
            placeholder="Nombre de producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <input
            type="text"
            placeholder="Precio del producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <input
            type="text"
            placeholder="Descripcion del producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <button className="col-sm-4 col-md-4 col-xl-4 buttonEntrar">
            Agregar producto
          </button>
        </div>
      </section>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default NuevoProducto;
