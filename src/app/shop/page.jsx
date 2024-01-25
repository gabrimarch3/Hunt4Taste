"use client";

import React from "react";
import { useState } from "react";
import NavigationHeader from "../components/NavigationHeader";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { Button } from "../../../components/ui/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDrawer from "../components/CartDrawer";
import { useCart } from "../context/CartContex";
import { IconButton } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Bianchello del metauro",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/a/c/achi_2_1.jpg",
    price: 12.99,
  },
  {
    id: 2,
    name: "Superbo Ancestrale 2021",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/t/e/teo_1.jpg",
    price: 15.49,
  },
  {
    id: 3,
    name: "Chianti classico 2020",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/a/n/anticoalberello_1_1.jpg",
    price: 18.99,
  },
  {
    id: 4,
    name: 'Teroldico Superiore 2020',
    imageUrl: 'https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/b/a/barolopaesi.jpg',
    price: 25,
  },
  {
    id: 5,
    name: "Barbera d'Asti superiore",
    imageUrl: 'https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/s/c/scrim.jpg',
    price: 35,
  },
  {
    id: 6,
    name: "Lacrima di Morro d'Alba superiore",
    imageUrl: 'https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/3/k/3k_75cl-in-su_14_2_1.jpg',
    price: 22.53,
  },
];

const Shop = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const { cartItems } = useCart();
  
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


  const toggleCartDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsCartOpen(open);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
    
      <NavigationHeader />

      <CartDrawer isOpen={isCartOpen} toggleDrawer={toggleCartDrawer} />

      <div className="flex flex-col flex-grow items-center p-4">

        <div className="flex flex-row justify-between w-screen px-3 mx-auto pl-3 pr-5">
        
          <div className="relative flex flex-grow">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="Cerca prodotto"
              className="w-full h-12 rounded-lg bg-white text-sm text-gray-700 outline-none px-3" 
            />
          </div>

          <IconButton onClick={toggleCartDrawer(true)}>
            <ShoppingCartIcon />
            {itemCount > 0 && (
            <span className="absolute top-0 right-0 rounded-full bg-red-600 text-white px-2 py-1 text-xs font-bold">
              {itemCount}
            </span>
          )}
          </IconButton>

        </div>

        {filteredProducts.length === 0 && (
          <p>Nessun prodotto trovato per "{searchQuery}"</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Shop;
