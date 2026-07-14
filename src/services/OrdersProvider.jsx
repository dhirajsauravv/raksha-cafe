import OrdersContext from "./OrdersContext.js";
import { useState, useEffect } from "react";

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function placeOrder(cart, totalPrice) {
    const order = {
      orderNumber: Date.now(),
      items: cart,
      totalPrice,
      orderTime: new Date(),
    };
    setOrders((prev) => {
      const newOrders = [...prev, order];

      localStorage.setItem("ordersData", JSON.stringify(newOrders));
      return newOrders;
    });
  }

  useEffect(() => {
    const ordersData = localStorage.getItem("ordersData");
    setOrders(ordersData ? JSON.parse(ordersData) : []);
  }, []);

  return (
    <OrdersContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export default OrdersProvider;
