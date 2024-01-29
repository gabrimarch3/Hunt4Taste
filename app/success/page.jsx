"use client";

import React, { useContext } from "react";
import { useCart } from "../context/CartContex";
import NavigationHeader from "../components/NavigationHeader";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const handleGoHome = () => {
    clearCart();
    router.push("/");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavigationHeader />

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            La tua transazione è avvenuta con successo!
          </h1>

          <p className="text-gray-600">Il tuo ordine contiene:</p>

          <ul className="list-disc list-inside">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center text-gray-600 mb-2"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-md mr-4"
                />
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Quantità: {item.quantity} x {item.price}€ ={" "}
                    {item.quantity * item.price}€
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-xl font-bold mt-4">
            Totale: {totalPrice}€
          </p>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4 w-full"
            onClick={handleGoHome}
          >
            Torna alla Home
          </button>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SuccessPage;
