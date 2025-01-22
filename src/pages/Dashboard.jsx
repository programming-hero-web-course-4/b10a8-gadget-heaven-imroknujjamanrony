import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartProvider";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { cart, wishlist, removeFromCart, removeFromWishlist, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("cart");
  const [sortedCart, setSortedCart] = useState([]);

  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const handlePurchase = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: "Cart is Empty!",
        text: "Please add items to your cart before purchasing.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    Swal.fire({
      title: "Payment Successful!",
      text: `Your total purchase cost is $${totalPrice}. Thank you for your purchase!`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#6366f1",
    }).then(() => {
      clearCart();
      navigate("/");
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="mt-8 mx-auto px-8 py-4 max-w-6xl bg-purple-600">
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
      </Helmet>
      <div className="text-center mb-6 pt-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-white py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setActiveTab("cart")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "cart" ? "bg-purple-600 text-white" : "bg-gray-300"
          }`}
        >
          Cart
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "wishlist"
              ? "bg-purple-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Wishlist
        </button>
      </div>

      {activeTab === "cart" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Total cost: ${totalPrice}</h2>
            <div className="flex gap-2">
              <button
                onClick={sortByPrice}
                className="px-4 py-2 bg-purple-500 text-white rounded-md"
              >
                Sort by Price
              </button>
              <button
                onClick={handlePurchase}
                className={`px-4 py-2 bg-green-500 text-white rounded-md ${
                  cart.length === 0 || totalPrice === "0.00"
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={cart.length === 0 || totalPrice === "0.00"}
              >
                Purchase
              </button>
            </div>
          </div>
          {sortedCart.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product_image || "https://via.placeholder.com/80"}
                  alt={item.product_title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold text-lg">{item.product_title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="font-bold text-purple-500">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.product_id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </>
      )}

      {activeTab === "wishlist" &&
        wishlist.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.product_image || "https://via.placeholder.com/80"}
                alt={item.product_title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-bold text-lg">{item.product_title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold text-purple-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromWishlist(item.product_id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
