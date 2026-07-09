import CartItem from "../components/CartItem";
import useCart from "../services/useCart";
import { useNavigate } from "react-router";
import useAuth from "../services/useAuth";
import { MdCoffeeMaker } from "react-icons/md";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  console.log("Logged In:", isLoggedIn);

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  function handleCheckout() {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate("/order");

    return;
  }

  if (cart.length > 0) {
    return (
      <div>
        <h1 className="m-10 text-center text-5xl text-amber-700 pb-7 font-bold">
          Order Cart
        </h1>
        <div className="flex justify-center items-center pr-10 w-full">
          <div className="flex flex-1 w-4/6 justify-between">
            <div className="">
              <div className="p-10">
                {cart.map((item) => (
                  <CartItem key={"cartItem" + item._id} item={item} />
                ))}
              </div>
            </div>
            <div className=" bg-amber-100 rounded-3xl w-2/6 h-100 flex flex-col gap-4 m-10">
              <h1 className="text-center text-amber-700 font-bold text-3xl py-4">
                Order Summary
              </h1>
              <h1 className="font-bold text-xl pl-4">Subtotal: ₹{subtotal}</h1>

              <h1 className="font-bold text-xl pl-4">GST(5%): ₹{gst}</h1>
              <hr />
              <h2 className="font-bold text-xl pl-4">Total: ₹{total}</h2>
              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  className="bg-amber-300 text-amber-700 font-bold rounded-4xl p-5 hover:bg-amber-300/90 hover:scale-105"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-8xl  bg-amber-100">
      <div className="flex flex-col justify-center items-center gap-4 bg-amber-200 p-10 rounded-4xl">
        <p className="text-amber-600">Start Brewing</p>
        <MdCoffeeMaker size={150} className="text-amber-600" />
      </div>
    </div>
  );
}

export default Cart;
