import React from "react";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-2xl p-4 w-fit flex flex-col items-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-32 h-64 object-cover rounded"
      />
      <button className="bg-[#8B487E] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full min-h-[50px]">
            {product.name}
          </button>
      <p className="text-sm text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;
