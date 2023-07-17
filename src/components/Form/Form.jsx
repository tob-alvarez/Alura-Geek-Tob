import "./Form.css";
const Form = () => {
  return (
    <>
      <div className="w-100 d-flex pb-5 pt-5 justify-content-around col-xl-12 contenedor-Form">
        <div className="d-flex col-xl-3 col-md-1">
          <div className="d-flex justify-content-between col-xl-12 contenedorInfo">
            <div className="divLogo">
              <img
                src="../../src/assets/sports_esports_black_24dp 1.svg"
                alt=""
              />
              <img src="../../src/assets/Texto.svg" alt="" />
            </div>
            <ul className="itemsInfo">
              <li>Quienes somos</li>
              <li> Politica de privacidad</li>
              <li>Programa de fidelidad</li>
              <li>Nuestras tiendas</li>
              <li>Quiero ser franquiciado</li>
              <li>Anuncie aqui</li>
            </ul>
          </div>
        </div>
        <form className="col-xl-6 col-md-6 col-sm-8">
          <div className="mb-3 col-xl-12 d-flex flex-column">
            <label className="mb-3">
              <strong>Hable con nosotros</strong>
            </label>
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3 col-xl-12">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Escribe tu mensaje..."
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
