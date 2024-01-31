"use client";
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

const products = [
  {
    id: 1,
    name: "Bianchello del metauro",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/a/c/achi_2_1.jpg",
    price: 12.99,
    year: 2021,
    category: "bianchi",
    subcategory: "secchi",
    description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 2,
    name: "Superbo Ancestrale 2021",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/t/e/teo_1.jpg",
    price: 15.49,
    year: 2021,
    category: "bianchi",
    subcategory: "aromatici",
    description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 3,
    name: "Chianti classico 2020",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/a/n/anticoalberello_1_1.jpg",
    price: 18.99,
    year: 2020,
    category: "rossi",
    subcategory: "medi",
    description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 4,
    name: "Teroldego Superiore 2020",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/b/a/barolopaesi.jpg",
    price: 25,
    year: 2020,
    category: "rossi",
    subcategory: "leggeri",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 5,
    name: "Barbera d'Asti superiore",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/s/c/scrim.jpg",
    price: 35,
    year: 2018,
    category: "rossi",
    subcategory: "corposi",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 6,
    name: "Lacrima di Morro d'Alba superiore",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/small_image/300x300/0dc2d03fe217f8c83829496872af24a0/3/k/3k_75cl-in-su_14_2_1.jpg",
    price: 22.53,
    year: 2021,
    category: "rossi",
    subcategory: "medi",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 7,
    name: "Rosato Toscana IGT",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/r/o/rosatomaz_1_1_1_2_1_1.jpg",
    price: 13.5,
    year: 2020,
    category: "rosati",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 8,
    name: "Cerasuolo d'Abruzzo DOC",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/2/k/2k_1_7_1_1_1_1.jpg",
    price: 15.0,
    year: 2021,
    category: "rosati",
    subcategory: "frizzanti",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 9,
    name: "Negroamaro Rosato",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/c/a/calafuria_7.jpg",
    price: 10.99,
    year: 2019,
    category: "rosati",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 10,
    name: "Rosato di Merlot",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/m/e/merlotrose_stpaul.jpg",
    price: 16.49,
    year: 2021,
    category: "rosati",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 11,
    name: "Pinot Nero Rosé",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/c/o/cotille_1.jpg",
    price: 22.0,
    year: 2020,
    category: "rosati",
    subcategory: "frizzanti",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 12,
    name: "Rosato del Salento",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/f/i/fichi_1_1_1_1.jpg",
    price: 18.75,
    year: 2020,
    category: "rosati",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 13,
    name: "Chianti Classico Riserva",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/v/i/vicchioagopetri2017_2_1_2_1.jpg",
    price: 32.5,
    year: 2017,
    category: "rossi",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 14,
    name: "Prosecco Superiore",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/p/r/prior_2_2_1_1_1.jpg",
    price: 14.99,
    year: "NV (Non Vintage)",
    category: "bianchi",
    subcategory: "spumanti",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 15,
    name: "Sauvignon Blanc Marlborough",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/1/_/1__0003_hpto14_2haut_perron_touraine_sb_grande_1_1_6_1_1_1_1_1_1.jpg",
    price: 21.25,
    year: 2019,
    category: "bianchi",
    subcategory: "dolci",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 16,
    name: "Amarone della Valpolicella",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/c/o/costasera_9_1_1.jpg",
    price: 45.0,
    year: 2016,
    category: "rossi",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
  },
  {
    id: 17,
    name: "Rosé de Provence",
    imageUrl:
      "https://s.tannico.it/media/catalog/product/cache/1/thumbnail/500x500/0dc2d03fe217f8c83829496872af24a0/b/a/bandol_1_1_1.jpg",
    price: 22.95,
    year: 2021,
    category: "rosati",
    subcategory: "tranquilli",
        description: "Fresco, giovane e luminoso, il Bianchello del Metauro DOC è ambasciatore di pregio di una regione composita, sia in Italia sia all’estero europeo, statunitense e orientale.È un vino che ha saputo evolversi, trasformando la sua semplicità in un tratto distintivo di forza e personalità.",
    alcol: '17,8%',
    serviceTemp: 18,
    pairings: ['Formaggi stagionati', 'Secondi di carne rossa']
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
  const { addToCart } = useCart(); 

  const openModalWithProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


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

  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


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
      // Reset subcategory when changing category
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

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    background: "transparent",
    boxShadow: "none",
  }));

  // Style each ToggleButton to look like a separate "pill"
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
                  value={
                    selectedCategory === category.value ? category.value : ""
                  }
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
                      value={
                        selectedSubcategory === subcategory ? subcategory : ""
                      }
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
              <ShoppingCartIcon style={{ color: "#ffffff" }} />{" "}
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
          <p>Nessun prodotto trovato per "{searchQuery}"</p>
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
