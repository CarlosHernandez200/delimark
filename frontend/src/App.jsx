import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import FastFood from "./pages/FastFood";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ShoppingCarts from "./components/ShoppingCarts";
import CreateProduct from "./pages/CreateProduct"
import NotFound from "./pages/NotFound";
import Order from './pages/Order';
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <ShoppingCarts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/food" element={<FastFood />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
