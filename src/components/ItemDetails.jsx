import { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { CartContext } from "./CartProvider";

const ItemDetails = () => {
  const { id } = useParams();
  const items = useLoaderData();
  const [item, setItem] = useState(null);
  const { cart, wishlist, addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    const singleItem = items.find((item) => item.product_id == id);
    setItem(singleItem);
  }, [id, items]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const isInWishlist = wishlist.some(
    (wish) => wish.product_id === item.product_id
  );

  return (
    <div className="mt-8 relative">
      {/* Header Section */}
      <div className="bg-[#9538E2] text-center pt-8 pb-48">
        <h2 className="text-4xl font-bold text-white py-2">Product Details</h2>
        <p className="font-normal text-base text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Card Details */}
      <div className="absolute left-1/2 top-36 transform -translate-x-1/2 bg-white shadow-lg rounded-lg overflow-hidden w-[90%] max-w-[700px] flex flex-col md:flex-row border border-gray-200">
        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={item.product_image}
            alt={item.product_title}
          />
        </div>

        {/* Description Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {item.product_title}
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Price:{" "}
              <span className="font-semibold text-[#9538E2]">
                ${item.price ? item.price.toFixed(2) : "N/A"}
              </span>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              {item.availability ? (
                <span className="text-green-600 font-semibold">In Stock</span>
              ) : (
                <span className="text-red-600 font-semibold">Out of Stock</span>
              )}
            </p>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <div className="text-sm text-gray-600 mb-4">
              <strong>Specifications:</strong>
              <ul className="list-disc ml-6 mt-1">
                {item.Specification?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-600 mr-2">
                <strong>Rating:</strong>
              </p>
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">
                  {"★".repeat(Math.floor(item.rating))}
                </span>
                <span className="text-gray-400 text-lg">
                  {"★".repeat(5 - Math.floor(item.rating))}
                </span>
                <span className="ml-2 text-gray-600 text-sm">
                  ({item.rating})
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => addToCart(item)}
              className="flex items-center gap-2 bg-[#9538E2] text-white py-2 px-4 rounded hover:bg-[#842DCB] transition"
            >
              <FaShoppingCart /> Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(item)}
              className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-gray-100 transition ${
                isInWishlist
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "border border-gray-400 text-gray-600"
              }`}
              disabled={isInWishlist}
            >
              <FaHeart /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
