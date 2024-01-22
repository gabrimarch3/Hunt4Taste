import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { Button } from "../../components/ui/button";

const products = [
  {
    id: 1,
    name: "Bianchello del metauro",
    imageUrl:
      "https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Superbo Ancestrale 2021",
    imageUrl:
      "https://images.pexels.com/photos/917831/pexels-photo-917831.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Chianti classico 2020",
    imageUrl:
      "https://images.pexels.com/photos/2897305/pexels-photo-2897305.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />
      <div className="flex flex-col flex-grow items-center p-4">
        <div className="flex space-x-2 mb-4">
          <div class="max-w-md mx-auto">
            <div class="relative flex flex-grow items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Cosa vuoi bere?"
              />
            </div>
          </div>
        </div>
        <div></div>
        <div className="flex space-x-2 mb-4">
          <Button variant="outline" className="rounded-full">
            Rossi
          </Button>
          <Button variant="outline" className="rounded-full">
            Bianchi
          </Button>
          <Button variant="outline" className="rounded-full">
            Rosati
          </Button>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
