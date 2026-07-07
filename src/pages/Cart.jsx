import CartItem from "../components/CartItem";
import useCart from "../services/useCart";
import { useNavigate } from "react-router";
import useAuth from "../services/useAuth";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  function handleCheckout() {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/order");
    }
    return;
  }

  return (
    <div>
      <h1 className="text-center text-5xl text-amber-700 pb-7 font-bold">
        Order Cart
      </h1>
      <div className="flex justify-between">
        <div className="">
          <div className="p-10">
            {cart.map((item) => (
              <CartItem key={"cartItem" + item._id} item={item} />
            ))}
          </div>
        </div>
        <div className="bg-amber-100 rounded-3xl w-100 h-150 flex flex-col gap-4">
          <h1 className="text-center text-amber-700 font-bold text-2xl py-4">
            Order Summary
          </h1>
          <h1 className="font-bold text-xl pl-4">Subtotal: ₹{subtotal}</h1>

          <h1 className="font-bold text-xl pl-4">GST(5%): ₹{gst}</h1>
          <hr />
          <h2 className="font-bold text-xl pl-4">Total: ₹{total}</h2>
          <div className="flex justify-center">
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
