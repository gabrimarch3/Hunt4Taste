"use client";

import React, { useContext } from "react";
import { useCart } from "../context/CartContex";
import NavigationHeader from "../components/NavigationHeader";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

import { useState } from "react";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
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

  {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

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
            Totale: {totalPrice.toFixed(2)}€
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
