function OrderCard({ order }) {
  return (
    <div key={order._id} className="bg-amber-100 mx-10 rounded-4xl">
      <div className="flex justify-between p-5 text-amber-700 font-bold">
        <h2>Order #{order._id.slice(-6)}</h2>
        <p>Ordered At: {new Date(order.createdAt).toLocaleString()}</p>
      </div>

      <div className="p-5 bg-amber-200  font-bold">
        {order.items.map((item) => (
          <div key={item.menuItem._id} className="py-1">
            {item.menuItem.name} x {item.quantity}
          </div>
        ))}
      </div>

      <p className="p-5 text-amber-700 font-bold text-xl">
        Total: ₹{order.totalAmount}
      </p>
    </div>
  );
}
export default OrderCard;
