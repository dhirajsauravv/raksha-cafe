function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between bg-amber-100 rounded-xl p-4 mb-4">
      <div>
        <img src="" alt="" />
        <div>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
        </div>
      </div>

      <h1>{item.quantity * item.price}</h1>
      <div>
        <button>+</button>
        <span>{item.quantity}</span>
        <button>-</button>
      </div>
    </div>
  );
}

export default CartItem;
