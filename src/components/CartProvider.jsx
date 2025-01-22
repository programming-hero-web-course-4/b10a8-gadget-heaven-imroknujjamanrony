import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.product_id === item.product_id)) {
      setCart([...cart, item]);
      Swal.fire({
        title: "Added to Cart!",
        text: `${item.product_title} has been successfully added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
      });
    } else {
      Swal.fire({
        title: "Item Already in Cart!",
        text: `${item.product_title} is already in your cart.`,
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
      });
    }
  };

  const addToWishlist = (item) => {
    if (!wishlist.some((wish) => wish.product_id === item.product_id)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.product_id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.product_id !== id));
  };

  const clearCart = () => {
    setCart([]);
    Swal.fire({
      title: "Cart Cleared!",
      text: "Your cart has been emptied.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#6366f1",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
