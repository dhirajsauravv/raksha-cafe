import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mx-auto py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
