import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Productos from "./components/Productos/Productos";
import ProductosConsola from "./components/Productos/ProductosConsola";
import "./App.css";
import ProductosDiversos from "./components/Productos/ProductosDiversos";
import Form from "./components/Form/Form";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Productos></Productos>
      <ProductosConsola></ProductosConsola>
      <ProductosDiversos></ProductosDiversos>
      <Form></Form>
      <Footer></Footer>
    </>
  );
};

export default Home;
