// components/CartDrawer.js
'use client';
import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContex";
import DeleteIcon from "@mui/icons-material/Delete";
import { StripeCheckout } from '@stripe/stripe-js';
import { Button } from "@mui/material";

const CartDrawer = ({ isOpen, toggleDrawer }) => {
  const { cartItems, removeFromCart } = useCart();

  // Stile personalizzato per il drawer
  const drawerStyle = {
    height: "auto",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    paddingBottom: "env(safe-area-inset-bottom)",
  };

  
  const total = cartItems.reduce((acc, item) => {
    const itemTotal = (item.price || 0) * (item.quantity || 0);
    return acc + itemTotal;
  }, 0);

  const formattedTotal = total.toFixed(2);

  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={toggleDrawer(false)}
      ModalProps={{
        keepMounted: true,
      }}
      className="relative"
    >
      <div className="bg-white rounded-t-lg p-6 space-y-6 overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center">
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <div>
            <ShoppingCartIcon fontSize="large" />
          </div>
          {/* Invisible placeholder to balance the layout */}
          <div className="w-12 h-12 invisible"></div>
        </div>
        <List>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <ListItem key={item.id} className="border-b last:border-b-0">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  <ListItemText
                    primary={item.name}
                    secondary={`Quantità: ${item.quantity}`}
                    primaryTypographyProps={{ className: "font-semibold" }}
                    secondaryTypographyProps={{
                      className: "text-sm text-gray-600",
                    }}
                  />
                </div>
                <IconButton onClick={() => removeFromCart(item.id)}>
                <DeleteIcon />
              </IconButton>
              </ListItem>
            ))
          ) : (
            <ListItem className="text-center">
              <ListItemText primary="Il tuo carrello è vuoto" />
            </ListItem>
          )}
        </List>
        <div className="p-4">
          <h3 className="text-lg font-semibold">Totale:{formattedTotal}€</h3>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
