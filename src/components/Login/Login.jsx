import "./Login.css";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";

const Login = () => {
  return (
    <>
      <Header></Header>
      <section className="sectionLogin col-sm-12">
        <div className="d-flex flex-column justify-content-center contenedor-InicioSesion gap-4 col-sm-12 col-md-12">
          <h2>Iniciar Sesion</h2>
          <input
            type="text"
            placeholder="Escriba su correo electrónico"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <input
            type="password"
            placeholder="Escriba su contraseña"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
          />
          <button className="col-sm-4 col-md-4 col-xl-4 buttonEntrar">
            Entrar
          </button>
        </div>
      </section>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default Login;
