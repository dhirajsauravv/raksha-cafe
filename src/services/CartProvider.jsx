import CartContext from "./CartContext.js";
import { useState } from "react";
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    const itemFound = cart.findIndex((cartItem) => cartItem._id == item._id);

    if (itemFound != -1) {
      const cartItem = cart[itemFound];
      const newItem = {
        _id: cartItem._id,
        name: cartItem.name,
        price: cartItem.price,
        description: cartItem.description,
        image: cartItem.image,
        quantity: cartItem.quantity + 1,
      };
      setCart((prev) => {
        const newCart = [...prev];
        newCart.splice(itemFound, 1, newItem);

        return newCart;
      });
    } else {
      const cartItem = { ...item, quantity: 1 };
      setCart((prev) => [...prev, cartItem]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
