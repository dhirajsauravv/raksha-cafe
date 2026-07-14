import useOrders from "../services/useOrders";

function Orders() {
  const { orders } = useOrders();

  return (
    <div>
      {orders.map((order) => (
        <div>
          <h2>Order #{order.orderNumber}</h2>
          <p>Total: ₹{order.totalPrice}</p>
          <p>Time: {new Date(order.orderTime).toLocaleString()}</p>
          <hr />
          {order.items.map((item) => (
            <div>
              {item.name} x {item.quantity}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
