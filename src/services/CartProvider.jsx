import CartContext from "./CartContext.js";
import { useEffect, useState } from "react";
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

        localStorage.setItem("cartData", JSON.stringify(newCart));

        return newCart;
      });
    } else {
      const cartItem = { ...item, quantity: 1 };
      setCart((prev) => {
        const newCart = [...prev, cartItem];
        localStorage.setItem("cartData", JSON.stringify(newCart));
        return newCart;
      });
    }
  }

  function handleRemoveFromCart(item) {
    const itemFound = cart.findIndex((cartItem) => cartItem._id == item._id);

    if (itemFound != -1) {
      const cartItem = cart[itemFound];
      const newItem = {
        _id: cartItem._id,
        name: cartItem.name,
        price: cartItem.price,
        description: cartItem.description,
        image: cartItem.image,
        quantity: cartItem.quantity - 1,
      };
      setCart((prev) => {
        const newCart = [...prev];

        if (newItem.quantity < 1) {
          newCart.splice(itemFound, 1);
        } else newCart.splice(itemFound, 1, newItem);

        localStorage.setItem("cartData", JSON.stringify(newCart));

        return newCart;
      });
    }
  }

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    setCart(cartData ? JSON.parse(cartData) : []);
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
