'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Carica gli articoli del carrello dal localStorage quando il componente è montato
  useEffect(() => {
    const cartData = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Verifica se l'articolo è già presente nel carrello
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        // Aggiorna la quantità o modifica come preferisci
        return prevItems.map((cartItem) => 
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        // Aggiungi il nuovo articolo al carrello
        const newCartItems = [...prevItems, { ...item, quantity: 1 }];
        if (typeof window !== 'undefined') {
          localStorage.setItem('cart', JSON.stringify(newCartItems));
        }
        return newCartItems;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const newCartItems = prevItems.filter((item) => item.id !== itemId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newCartItems));
      }
      return newCartItems;
    });
  };

  const clearCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart');
    }
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
