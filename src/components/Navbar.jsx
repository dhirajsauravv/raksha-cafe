import { Link } from "react-router";
import { Coffee, ShoppingCart, Menu, LogIn } from "lucide-react";

import useCart from "../services/useCart";

function Navbar() {
  const { cart } = useCart();

  let cartQuantityCounter = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  let cartQuantity;
  if (cartQuantityCounter == 0) {
    cartQuantity = null;
  } else {
    cartQuantity = cartQuantityCounter;
  }

  return (
    <nav
      className="sticky top-0 z-50 bg-amber-50 backdrop-blur-md h-20 flex justify-between
    items-center px-30"
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <Coffee className="" size={40} />
          <p className="text-3xl font-bold text-amber-700">Raksha Cafe</p>
        </div>
      </Link>

      <div className="flex items-center gap-10">
        <Link to="/menu">
          <div className="flex items-center gap-2 bg-amber-200 py-1 pl-1 pr-3 rounded-3xl text-amber-800 hover:scale-105 ease-in-out duration-150">
            <div className="bg-amber-300 h-9 w-9 items-center rounded-full flex justify-center">
              <Menu size={25} />
            </div>
            <p className="font-bold text-xl">Menu</p>
          </div>
        </Link>

        <Link to="/cart">
          <div className="flex items-center gap-2 bg-amber-200 py-1 pl-1 pr-3 rounded-3xl text-amber-800 hover:scale-105 ease-in-out duration-150">
            <div className="bg-amber-300 h-9 w-9 items-center rounded-full flex justify-center">
              <ShoppingCart size={25} />
            </div>
            <p className="font-bold text-xl z-10 relative">
              Cart{" "}
              {cartQuantity > 0 && (
                <sup className="absolute -top-3 -right-4 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {" "}
                  {cartQuantity}
                </sup>
              )}
            </p>
          </div>
        </Link>

        <Link to="/login">
          <div className="flex items-center gap-2 bg-amber-200 py-1 pl-1 pr-3 rounded-3xl text-amber-800 hover:scale-105 ease-in-out duration-150">
            <div className="bg-amber-300 h-9 w-9 items-center rounded-full flex justify-center">
              <LogIn size={25} />
            </div>
            <p className="font-bold text-xl">Login</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
