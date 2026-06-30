import { Link } from "react-router";
import { Coffee, ShoppingCart, Menu, LogIn } from "lucide-react";

import useCart from "../services/useCart";

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="sticky top-0 z-50 bg-amber-50/85 backdrop-blur-md border-b border-amber-900/10 shadow-md h-20 flex items-center">
      <div className="container flex justify-between items-center w-full">
        <Link to="/" className="flex pl-8">
          <Coffee className="size{24} pr-1"></Coffee>
          <span className="text-lg font-bold text-amber-700">Raksha Cafe</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/menu" className="flex">
            <Menu className="size{24} pr-1" />
            Menu
          </Link>
          <Link to="/cart" className="flex">
            <ShoppingCart className="size{24} pr-1" />
            Cart {cart.reduce((acc, cur) => acc + cur.quantity, 0)}
          </Link>
          <Link to="/login" className="flex">
            <LogIn className="size{24} pr-1" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
