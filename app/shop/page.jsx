'use client'
import React, { useState, useEffect, useRef } from "react";
import NavigationHeader from "../components/NavigationHeader";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../components/ProductCard";
import { Button } from "../../components/ui/button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDrawer from "../components/CartDrawer";
import { useCart } from "../context/CartContex";
import {
  IconButton,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  styled,
} from "@mui/material";
import ProductModal from '../components/ProductModal'

const wineCategories = [
  {
    label: "Vini Rossi",
    value: "rossi",
    subcategories: ["leggeri", "medi", "corposi"],
  },
  {
    label: "Vini Bianchi",
    value: "bianchi",
    subcategories: ["secchi", "aromatici", "dolci", "spumanti"],
  },
  {
    label: "Vini Rosati",
    value: "rosati",
    subcategories: ["frizzanti", "tranquilli"],
  },
];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboveFooter, setIsAboveFooter] = useState(true);
  const footerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const { addToCart, cartItems } = useCart(); 

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://hunt4taste.it/api/products`);
        if (!response.ok) {
          throw new Error('Something went wrong!'); // Error handling
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const footerPosition = footerRect.top + window.pageYOffset;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        setIsAboveFooter(scrollPosition < footerPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModalWithProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const toggleCartDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsCartOpen(open);
  };

  const handleCategoryChange = (value) => {
    if (selectedCategory !== value) {
      setSelectedCategory(value);
      setSelectedSubcategory("");
    } else {
      setSelectedCategory("");
    }
  };

  const handleSubcategoryChange = (value) => {
    setSelectedSubcategory(value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSubcategory || product.subcategory === selectedSubcategory)
  );

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    boxShadow: "none",
  }));

  const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    textTransform: "none",
    color: theme.palette.text.primary,
    borderColor: theme.palette.grey[300],
    borderWidth: "1px",
    borderStyle: "solid",
    margin: theme.spacing(1),
    "&.Mui-selected": {
      color: "#000000",
      backgroundColor: "#8B487E33",
      "&:hover": {
        backgroundColor: "#8B487E33",
      },
    },
    borderRadius: "50px",
    padding: theme.spacing(1, 2),
  }));

  if (isLoading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />
      <CartDrawer isOpen={isCartOpen} toggleDrawer={toggleCartDrawer} />
      <div className="flex flex-col flex-grow items-center mt-4">
        <div className="flex flex-col justify-between w-screen px-3 mx-auto">
          <div className="relative flex flex-grow">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="   Cosa vuoi bere..."
              className="w-full h-12 rounded-lg bg-white text-sm text-gray-700 outline-none shadow-xl mb-3"
            />
          </div>
          <div className="mb-4 self-center flex flex-col">
            <div className="flex justify-center">
              {wineCategories.map((category) => (
                <StyledToggleButton
                  key={category.value}
                  value={selectedCategory === category.value ? category.value : ""}
                  selected={selectedCategory === category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  aria-label={category.label}
                >
                  {category.label}
                </StyledToggleButton>
              ))}
            </div>
            {selectedCategory && (
              <div className="flex justify-center mt-2">
                {wineCategories
                  .find((category) => category.value === selectedCategory)
                  ?.subcategories.map((subcategory) => (
                    <StyledToggleButton
                      key={subcategory}
                      value={selectedSubcategory === subcategory ? subcategory : ""}
                      selected={selectedSubcategory === subcategory}
                      onClick={() => handleSubcategoryChange(subcategory)}
                      aria-label={subcategory}
                      disabled={!selectedCategory}
                    >
                      {subcategory}
                    </StyledToggleButton>
                  ))}
              </div>
            )}
          </div>

          <div
            className={`fixed bottom-[70px] right-10 z-30 transition-transform ${
              isAboveFooter ? "" : "translate-y-[100%]"
            }`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <IconButton
              color="primary"
              onClick={toggleCartDrawer(true)}
              style={{
                backgroundColor: "#8B487E",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingCartIcon style={{ color: "#ffffff" }} />
              {itemCount > 0 && (
                <Badge
                  badgeContent={itemCount}
                  color="error"
                  overlap="circular"
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "3px",
                    border: `2px solid #ffffff`,
                    padding: "0",
                  }}
                />
              )}
            </IconButton>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p>Nessun prodotto trovato per {'"'}{searchQuery}{'"'}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={openModalWithProduct}
              />
            ))}
          </div>
        )}
      </div>

      <Footer ref={footerRef} />

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
        addToCart={addToCart}
      />
    </div>
  );
};

export default Shop;
