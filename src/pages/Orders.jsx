import { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";

import axiosClient from "../services/axiosClient";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axiosClient.get("/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {orders.map((order) => (
        <OrderCard key={order._id} order={order}></OrderCard>
      ))}
    </div>
  );
}

export default Orders;
