import CartItem from "../components/CartItem";
import useCart from "../services/useCart";

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Your Order Cart</h1>
      <div className="border">
        <div className="p-10">
          {cart.map((item) => (
            <CartItem key={"cartItem" + item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="border">
        <h1>Order Summary</h1>
        <h2 className="">Total:</h2>
        <div className="flex justify-center">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
