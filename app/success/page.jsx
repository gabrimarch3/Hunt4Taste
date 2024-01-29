"use client";
import React, { useContext } from "react";
import { useCart } from "../context/CartContex";
import NavigationHeader from "../components/NavigationHeader";
import Footer from "../components/Footer";

const SuccessPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />
      <div>
        <h1>La tua transazione è avvenuta con successo!</h1>
        <h2>Dettagli del tuo ordine:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantità: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SuccessPage;
