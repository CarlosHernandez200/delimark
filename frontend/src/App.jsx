import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FastFood from "./pages/FastFood";
import { Contact } from "./pages/Contact";
import ShoppingCarts from "./components/ShoppingCarts";
import { Register } from './pages/Register'
const App = () => {
  return (
    <div className="overflow-hidden bg-white">
      <BrowserRouter>
        <Header />
        <ShoppingCarts/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/food" element={<FastFood />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
