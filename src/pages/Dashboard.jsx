//

// import { useContext, useState, useEffect } from "react";
// import { CartContext } from "../components/CartProvider";
// import { FaTrash } from "react-icons/fa";

// const Dashboard = () => {
//   const { cart, wishlist, removeFromCart, removeFromWishlist } =
//     useContext(CartContext);
//   const [activeTab, setActiveTab] = useState("cart");
//   const [sortedCart, setSortedCart] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     setSortedCart(cart); // Keep the cart in sync with sortedCart
//   }, [cart]);

//   const sortByPrice = () => {
//     const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
//     setSortedCart(sorted);
//   };

//   const totalCartPrice = cart
//     .reduce((acc, item) => acc + item.price, 0)
//     .toFixed(2);

//   return (
//     <div className="mt-8 mx-auto max-w-4xl">
//       <div className="text-center mb-6">
//         <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
//         <p className="text-gray-600">
//           Explore the latest gadgets that will take your experience to the next
//           level. From smart devices to the coolest accessories, we have it all!
//         </p>
//       </div>
//       <div className="flex justify-center gap-4 mb-4">
//         <button
//           onClick={() => setActiveTab("cart")}
//           className={`py-2 px-4 rounded-lg ${
//             activeTab === "cart" ? "bg-purple-600 text-white" : "bg-gray-300"
//           }`}
//         >
//           Cart
//         </button>
//         <button
//           onClick={() => setActiveTab("wishlist")}
//           className={`py-2 px-4 rounded-lg ${
//             activeTab === "wishlist"
//               ? "bg-purple-600 text-white"
//               : "bg-gray-300"
//           }`}
//         >
//           Wishlist
//         </button>
//       </div>
//       {activeTab === "cart" && (
//         <>
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-bold">Total cost: ${totalCartPrice}</h2>
//             <div className="flex gap-4">
//               <button
//                 onClick={sortByPrice}
//                 className="px-4 py-2 bg-purple-500 text-white rounded-md"
//               >
//                 Sort by Price
//               </button>
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="px-4 py-2 bg-green-500 text-white rounded-md"
//               >
//                 Purchase
//               </button>
//             </div>
//           </div>
//           {sortedCart.map((item) => (
//             <div
//               key={item.product_id}
//               className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.product_image || "https://via.placeholder.com/80"}
//                   alt={item.product_title}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg">{item.product_title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                   <p className="font-bold text-purple-500">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.product_id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <FaTrash size={20} />
//               </button>
//             </div>
//           ))}
//         </>
//       )}
//       {activeTab === "wishlist" &&
//         wishlist.map((item) => (
//           <div
//             key={item.product_id}
//             className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.product_image || "https://via.placeholder.com/80"}
//                 alt={item.product_title}
//                 className="w-20 h-20 object-cover rounded"
//               />
//               <div>
//                 <h3 className="font-bold text-lg">{item.product_title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//                 <p className="font-bold text-purple-500">${item.price}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => removeFromWishlist(item.product_id)}
//               className="text-red-500 hover:text-red-700"
//             >
//               <FaTrash size={20} />
//             </button>
//           </div>
//         ))}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
//             <h2 className="text-xl font-bold text-green-600">
//               Payment Successful!
//             </h2>
//             <p className="mt-2">Thank you for purchasing!</p>
//             <p className="mt-4 font-bold">
//               Total Amount:{" "}
//               <span className="text-purple-500">${totalCartPrice}</span>
//             </p>
//             <button
//               onClick={() => setShowModal(false)}
//               className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

//

import { useContext, useState, useEffect } from "react";
import { CartContext } from "../components/CartProvider";
import { FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const { cart, wishlist, removeFromCart, removeFromWishlist } =
    useContext(CartContext);

  const [activeTab, setActiveTab] = useState("cart");
  const [sortedCart, setSortedCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setSortedCart(cart); // Keep the cart in sync with sortedCart
  }, [cart]);

  const sortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="mt-8 mx-auto max-w-4xl">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Dashboard</h1>
        <p className="text-gray-600">
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
