import useCart from "../services/useCart";

function MenuCard({ item }) {
  const { handleAddToCart } = useCart();

  return (
    <div className="shadow h-75 bg-amber-100 rounded-3xl overflow-hidden">
      <div className="h-1/2">
        <img src={item.image} className="h-full object-cover w-full" />
      </div>
      <div className="p-4 flex flex-col h-1/2">
        <div className="flex flex-none justify-between h-max text-xl font-bold text-amber-700">
          <h1>{item.name}</h1>
          <h1 className="text-amber-700 font-bold">₹ {item.price}</h1>
        </div>
        <div className="flex-1 overflow-hidden min-h-0">
          <p className="text-ellipsis">{item.description}</p>
        </div>
        <div className="flex-none h-10">
          <button
            className="w-full h-full rounded-3xl bg-amber-400 hover:bg-amber-400/75 hover:scale-105 ease-in-out duration-300"
            onClick={() => handleAddToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
