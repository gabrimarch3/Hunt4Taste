// ProductModal.js
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { BsCalendar2Date } from "react-icons/bs";
import { LiaWineBottleSolid, LiaCheeseSolid } from "react-icons/lia";
import { TbTemperature } from "react-icons/tb";




const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#fff", // Sfondo bianco per una base pulita
    borderRadius: "15px", // Bordi arrotondati
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)", // Ombra più marcata per profondità
    overflow: "hidden", // Assicurati che tutto rimanga dentro i bordi arrotondati
    transition: "all 0.3s", // Transizione fluida per tutte le proprietà
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  background: "#8B487E", // Gradiente per l'header
  color: "white",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // Nessuna linea di separazione, lasciamo che il gradiente faccia il lavoro
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  marginTop: '15px',  
  padding: theme.spacing(2),
  color: "#444", // Testo più scuro per un contrasto maggiore
  "& p": {
    margin: theme.spacing(1, 0), // Maggiori margini verticali per i paragrafi
  },
  className: 'p-4 space-y-2 md:space-y-0 md:flex md:space-x-4',
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(1),
  justifyContent: "flex-end",
  background: "#f8f8f8", // Sfondo leggermente diverso per differenziare la sezione
  transition: "background-color 0.3s", // Transizione fluida per lo sfondo
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#8B487E",
  fontWeight: "bold",
  margin: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#863854",
    color: "white",
    transform: "scale(1.05)", // Leggera animazione di ingrandimento
  },
  transition: "transform 0.2s, background-color 0.3s", // Transizioni fluide
}));

const StyledImageContainer = styled('div')(({ theme }) => ({
    display: 'flex', // Usa flexbox per mantenere centrato il contenuto
    alignItems: 'center', // Allinea l'immagine al centro verticalmente
    justifyContent: 'center', // Allinea l'immagine al centro orizzontalmente
    maxWidth: '100%', // Imposta una larghezza massima
    maxHeight: '500px', // Imposta un'altezza massima per l'immagine
  }));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "300px",
  borderRadius: "15px", // Angoli arrotondati per l'immagine
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Ombra leggera per l'immagine
//   marginBottom: theme.spacing(2),
  objectFit: 'contain',
  transition: "transform 0.3s", // Transizione fluida per l'hover
  "&:hover": {
    transform: "scale(1.03)", // Leggero ingrandimento al passaggio del mouse
  },
}));

const ProductModal = ({ isOpen, onClose, product, addToCart }) => {
  if (!product) return null;

  return (
    <StyledDialog open={isOpen} onClose={onClose} aria-labelledby="product-dialog-title" fullWidth maxWidth="md">
      <StyledDialogTitle id="product-dialog-title">
      <div className="flex justify-between items-center flex-col">
        <h2 className="text-2xl font-light text-[#ffffff]">{product.name}</h2>
        <span className="text-3xl font-light text-[#ffffff] md:mt-0 self-start">{product.price}€</span>
      </div>
    </StyledDialogTitle>
      <StyledDialogContent>
        <div className="md:flex">
          <StyledImageContainer className="md:w-1/2">
            {/* Immagine del prodotto */}
            <StyledImage src={product.imageUrl} alt={product.name} className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
          </StyledImageContainer>
          <div className="md:w-1/2 mt-4 md:mt-0 space-y-2 overflow-auto">
            {/* Dettagli del prodotto */}
            <p className="text-gray-600 font-light">{product.description}</p>
            {/* Aggiungi qui ulteriori dettagli come annata, gradazione alcolica, etc., seguendo il layout dell'immagine */}
            <div className="flex items-center gap-2 font-light">
            <BsCalendar2Date className="w-8 h-8"/>
            <p>Annata: {product.year}</p>
            </div>
            <div className="flex items-center gap-2 font-light">
            <LiaWineBottleSolid className="w-8 h-8"/>
            <p>Alcol: {product.alcol}</p>
            </div>
            <div className="flex items-center gap-2 font-light">
            <TbTemperature className="w-8 h-8"/>
            <p>Temperatura di servizio: {product.serviceTemp}°C</p>
            </div>
            <div className="flex items-center gap-2 font-light">
            <LiaCheeseSolid className="w-8 h-8"/>
            <p>Abbinamenti: {product.pairings.join(', ')}</p>
            </div>

          </div>
        </div>
      </StyledDialogContent>
      <StyledDialogActions>
        {/* Pulsanti per azioni come nell'immagine fornita */}
        <StyledButton onClick={() => { addToCart(product); onClose(); }}>Aggiungi al Carrello</StyledButton>
        <StyledButton onClick={onClose}>Chiudi</StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );}


  export default ProductModal;
