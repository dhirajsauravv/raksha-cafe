import { Link } from "react-router";
import { Coffee } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50/85 backdrop-blur-md border-b border-amber-900/10 shadow-md h-20 flex items-center">
      <div className="container flex justify-between items-center w-full">
        <Link to="/">
          <Coffee className="size{24}"></Coffee>
          <span>Raksha Cafe</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
