import "./Productos.css";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Producto = ({ product }) => {
  return (
    <>
      <div className="d-flex flex-column producto col-md-4 col-6 col-lg-2 col-xl-2 productoCard">
        <img src={product.url} alt="foto del producto" />
        <p>{product.productName}</p>
        <strong>
          <p>${product.precio}</p>
        </strong>
        <Link to="/producto1">Ver producto</Link>
      </div>
    </>
  );
};

Producto.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Producto;
