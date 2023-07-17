import { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../NuevoProducto/NuevoProducto.css";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

import {
  validateCategorias,
  validateDescripcion,
  validatePrecio,
  validateProductName,
  validateUrl,
} from "../helpers/validaciones";

const EditarProducto = ({ getData }) => {
  const [product, setProducto] = useState({});
  const { id } = useParams();
  const productNameRef = useRef("");
  const precioRef = useRef("");
  const urlRef = useRef("");
  const descripcionRef = useRef("");
  const categoriaRef = useRef("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/productos/${id}`);
        const productApi = await res.json();
        setProducto(productApi);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validacion de datos
    if (
      !validateProductName(productNameRef.current.value) ||
      !validateUrl(urlRef.current.value) ||
      !validatePrecio(precioRef.current.value) ||
      !validateDescripcion(descripcionRef.current.value) ||
      !validateCategorias(product.categoria)
    ) {
      if (!validateProductName(productNameRef.current.value)) {
        alert("El nombre del producto no es válido");
      }
      if (!validateUrl(urlRef.current.value)) {
        alert("La URL de la imagen no es válida");
      }
      if (!validatePrecio(precioRef.current.value)) {
        alert("El precio del producto no es válido");
      }
      if (!validateDescripcion(descripcionRef.current.value)) {
        alert("La descripción del producto no es válida");
      }
      if (!validateCategorias(categoriaRef.current.value)) {
        alert("La categoría del producto no es válida");
      }
      return;
    }
    // Guardo el objeto y lo enviamos

    const productoEditado = {
      productName: productNameRef.current.value,
      url: urlRef.current.value,
      precio: precioRef.current.value,
      descripcion: descripcionRef.current.value,
      categoria: categoriaRef.current.value,
    };
    try {
      const res = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productoEditado),
      });
      if (res.status == 200) {
        alert("Producto Editado");
        getData();
        navigate("/productos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <section className="sectionLogin d-flex flex-column">
        <h2>Editar Producto</h2>
        <form
          className="d-flex flex-column justify-content-center contenedor-InicioSesion gap-4 col-sm-12 col-md-12"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            ref={productNameRef}
            defaultValue={product.productName}
            placeholder="Nombre de producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            onChange={(e) => e.target.value}
          />
          <input
            type="form-control"
            ref={urlRef}
            defaultValue={product.url}
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            placeholder="URL de la imagen"
            onChange={(e) => e.target.value}
          />
          <input
            type="number"
            ref={precioRef}
            defaultValue={product.precio}
            placeholder="Precio del producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            onChange={(e) => e.target.value}
          />
          <input
            type="text"
            ref={descripcionRef}
            defaultValue={product.descripcion}
            placeholder="Descripcion del producto"
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            onChange={(e) => e.target.value}
          />
          <select
            className="col-sm-4 col-md-4 col-xl-4 inputLogin"
            ref={categoriaRef}
            onChange={({ target }) =>
              setProducto({ ...product, categoria: target.value })
            }
            value={product.categoria}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Star Wars">Star Wars</option>
            <option value="Consolas">Consolas</option>
            <option value="Varios">Varios</option>
          </select>
          <button
            type="submit"
            className="col-sm-4 col-md-4 col-xl-4 buttonEntrar"
          >
            Editar Producto
          </button>
        </form>
      </section>
      <Footer></Footer>
    </>
  );
};

EditarProducto.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default EditarProducto;
