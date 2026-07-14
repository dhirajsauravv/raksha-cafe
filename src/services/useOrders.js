import { useContext } from "react";

import OrdersContext from "./OrdersContext.js";

function useOrders() {
  return useContext(OrdersContext);
}

export default useOrders;
