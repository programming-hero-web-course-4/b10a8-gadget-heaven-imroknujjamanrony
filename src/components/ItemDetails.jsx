// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

// const ItemDetails = () => {
//   const { id } = useParams();
//   const items = useLoaderData();
//   const [item, setItem] = useState({});

//   useEffect(() => {
//     const singleItem = items.find((item) => item.product_id == id);
//     setItem(singleItem);
//   }, [id, items]);

//   return (
//     <div className="mt-8 relative">
//       {/* Header Section */}
//       <div className="bg-[#9538E2] text-center pt-8 pb-48">
//         <h2 className="text-4xl font-bold text-white py-2">Product Details</h2>
//         <p className="font-normal text-base text-white">
//           Explore the latest gadgets that will take your experience to the next
//           level. From smart devices to the coolest accessories, we have it all!
//         </p>
//       </div>

//       {/* Card Details */}
//       <div className="absolute left-1/2 top-36 transform -translate-x-1/2 bg-white shadow-lg rounded-lg overflow-hidden w-[700px] flex border border-gray-200">
//         {/* Image Section */}
//         <div className="w-1/2">
//           <img
//             className="w-full h-full object-cover"
//             src={item.product_image}
//             alt={item.product_title}
//           />
//         </div>

//         {/* Description Section */}
//         <div className="w-1/2 p-6 flex flex-col justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">
//               {item.product_title}
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Price: <span className="font-semibold">${item.price}</span>
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               <strong>Description:</strong> {item.description}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//               <strong>Rating:</strong> {item.rating}
//             </p>
//             <p className="text-sm text-gray-600">
//               <strong>Specification:</strong> {item.Specification}
//             </p>
//           </div>
//           <button className="mt-4 bg-[#9538E2] text-white py-2 px-4 rounded hover:bg-[#842DCB] transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetails;

//

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const items = useLoaderData();
  const [item, setItem] = useState({});

  useEffect(() => {
    const singleItem = items.find((item) => item.product_id == id);
    setItem(singleItem);
  }, [id, items]);

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
      <div className="absolute left-1/2 top-36 transform -translate-x-1/2 bg-white shadow-lg rounded-lg overflow-hidden w-[700px] flex border border-gray-200">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src={item.product_image}
            alt={item.product_title}
          />
        </div>

        {/* Description Section */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {item.product_title}
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Price: <span className="font-semibold">${item.price}</span>
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Description:</strong> {item.description}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Rating:</strong> {item.rating}
            </p>
            {/* Mapping through specifications */}
            <div className="text-sm text-gray-600">
              <strong>Specifications:</strong>
              <ul className="list-disc ml-6 mt-1">
                {item.Specification?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="mt-4 bg-[#9538E2] text-white py-2 px-4 rounded hover:bg-[#842DCB] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
