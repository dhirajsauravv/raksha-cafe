function CartItem({ item }) {
  return (
    <div className="pb-5 w-200">
      <div className="flex items-center justify-between bg-amber-50 rounded-3xl pr-4 shadow-lg">
        <div className="flex items-center">
          <img
            className="w-30 h-30 rounded-3xl object-cover p-2 "
            src={item.image}
            alt=""
          />
          <div className="font-bold text-amber-700 ">
            <h1 className="text-xl pb-1">{item.name}</h1>
            <h2 className="text-me pt-1">Price: {item.price}</h2>
          </div>
        </div>

        <h1 className="font-bold text-amber-700 text-lg ">
          {item.quantity * item.price}
        </h1>

        <div className="flex justify-between items-center shadow bg-amber-300 rounded-l-3xl rounded-r-3xl h-10 w-28p pl-1 pr-1">
          <button className="bg-amber-200 h-8 w-8 flex items-center justify-center rounded-full hover:bg-amber-500/50 hover:scale-125  ease-in-out duration-500 font-bold text-amber-700 text-lg">
            -
          </button>
          <span className="px-4 font-extrabold text-amber-700 text-mme">
            {item.quantity}
          </span>
          <button className="bg-amber-200 h-8 w-8 flex items-center justify-center rounded-full hover:bg-amber-500/50 hover:scale-125  ease-in-out duration-500 font-bold text-amber-700 text-lg">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
