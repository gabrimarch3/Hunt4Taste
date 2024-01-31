"use client";
import React from "react";
import { useState } from "react";
import { useCart } from "../context/CartContex";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCartClick = (e) => {
    e.stopPropagation(); // Impedisce al click di propagarsi al div genitore
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Resetta lo stato dopo 2 secondi
  };

  const handleCardClick = () => {
    onProductClick(product);
  };

  return (
    <div
      className="border rounded-xl shadow-2xl p-4 min-w-10 flex flex-col items-center"
      onClick={handleCardClick}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-32 h-64 object-cover rounded"
      />
      <button
        onClick={handleAddToCartClick}
        className={`bg-[#8B487E] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full min-h-[50px] transition-colors duration-300 ${
          added ? "bg-green-500 hover:bg-green-600" : ""
        }`}
      >
        {added ? "Aggiunto al carrello" : product.name}
      </button>
      <div className="text-gray-500 text-sm flex flex-col justify-center items-center w-full mt-2">
        <span className="font-medium">{product.year}</span>
        <span className="mt-1 font-light">€{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;