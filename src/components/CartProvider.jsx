import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.product_id === item.product_id)) {
      setCart([...cart, item]);
    }
  };

  const addToWishlist = (item) => {
    if (!wishlist.some((wish) => wish.product_id === item.product_id)) {
      setWishlist([...wishlist, item]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.product_id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
