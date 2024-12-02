import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  const {
    product_id,
    product_title,
    product_image,

    price,
  } = item || {};

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <Link to={`/item/${product_id}`}>
        <figure className="relative w-full h-56 overflow-hidden">
          <img
            src={product_image}
            alt={product_title}
            className="object-cover w-full h-full"
          />
        </figure>
      </Link>

      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">{product_title}</h2>
        <p className="text-sm text-gray-600">Price: ${price}</p>
        <Link to={`/item/${product_id}`}>
          <button className="btn btn-success">View Details </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
