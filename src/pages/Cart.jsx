import CartItem from "../components/CartItem";
import useCart from "../services/useCart";

function Cart() {
  const { cart } = useCart();

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
        <div className="bg-amber-100 rounded-3xl w-100 h-150 flex flex-col">
          <h1 className="text-center text-amber-700 font-bold text-2xl py-4">
            Cart amount:
          </h1>
          <h1 className="text-center text-amber-700 font-bold text-2xl py-4">
            Order Summary
          </h1>
          <h2 className="font-bold text-xl pl-4">Total:</h2>
          <div className="flex justify-center">
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
