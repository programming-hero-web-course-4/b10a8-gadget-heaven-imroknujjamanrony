import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartProvider";
import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const { cart, wishlist, removeFromCart, removeFromWishlist } =
    useContext(CartContext);

  // State for active tab: cart or wishlist
  const [activeTab, setActiveTab] = useState("cart");

  // State to keep track of sorted cart
  const [sortedCart, setSortedCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Sync cart with sortedCart
  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  // Sort by price
  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  // Handle purchase button click
  const handlePurchase = () => {
    setShowModal(true);
  };

  // Calculate total cart price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="mt-8 mx-auto max-w-4xl bg-purple-600">
      <div className="text-center mb-6 pt-8">
        <h1 className="text-3xl font-bold text-white ">Dashboard</h1>
        <p className="text-white py-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Tabs for Cart and Wishlist */}
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

      {/* Cart Items */}
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
                className="px-4 py-2 bg-green-500 text-white rounded-md"
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

      {/* Wishlist Items */}
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
            </div>
            <button
              onClick={() => removeFromWishlist(item.product_id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash size={20} />
            </button>
          </div>
        ))}

      {/* Purchase Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold text-green-500 mb-4">
              Payment Successful!
            </h2>
            <p className="mb-4 text-gray-700">Thank you for your purchase!</p>
            <p className="mb-4 text-gray-800 font-bold">Total: ${totalPrice}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-purple-600 text-white rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
