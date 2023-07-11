import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login/Login";
import Todos from "./components/Todos/Todos";
import NuevoProducto from "./components/NuevoProducto/NuevoProducto";
import Producto from "./components/Producto/Producto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/productos" element={<Todos></Todos>} />
        <Route
          path="/nuevo-producto"
          element={<NuevoProducto></NuevoProducto>}
        />
        <Route path="/producto1" element={<Producto></Producto>} />
      </Routes>
    </Router>
  );
}

export default App;
