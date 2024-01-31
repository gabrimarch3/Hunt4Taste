// ProductModal.js
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: '#fff', // Sfondo bianco per una base pulita
      borderRadius: '15px', // Bordi arrotondati
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)', // Ombra più marcata per profondità
      overflow: 'hidden', // Assicurati che tutto rimanga dentro i bordi arrotondati
      transition: 'all 0.3s', // Transizione fluida per tutte le proprietà
    }
  }));
  
  const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    background: 'linear-gradient(45deg, #863854 30%, #a2568c 80%)', // Gradiente per l'header
    color: 'white',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Nessuna linea di separazione, lasciamo che il gradiente faccia il lavoro
  }));
  
  const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
    color: '#444', // Testo più scuro per un contrasto maggiore
    '& p': {
      margin: theme.spacing(1, 0), // Maggiori margini verticali per i paragrafi
    }
  }));
  
  const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    padding: theme.spacing(1),
    justifyContent: 'flex-end',
    background: '#f8f8f8', // Sfondo leggermente diverso per differenziare la sezione
    transition: 'background-color 0.3s', // Transizione fluida per lo sfondo
  }));
  
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#8B487E',
    color: 'gray',
    fontWeight: 'bold',
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#a2568c',
      transform: 'scale(1.05)', // Leggera animazione di ingrandimento
    },
    transition: 'transform 0.2s, background-color 0.3s', // Transizioni fluide
  }));
  
  const StyledImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    borderRadius: '15px', // Angoli arrotondati per l'immagine
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Ombra leggera per l'immagine
    marginBottom: theme.spacing(2),
    transition: 'transform 0.3s', // Transizione fluida per l'hover
    '&:hover': {
      transform: 'scale(1.03)', // Leggero ingrandimento al passaggio del mouse
    },
  }));

const ProductModal = ({ isOpen, onClose, product, addToCart }) => {
  if (!product) return null;



  return (
    <StyledDialog open={isOpen} onClose={onClose} aria-labelledby="product-dialog-title">
      <StyledDialogTitle id="product-dialog-title">{product.name}</StyledDialogTitle>
      <StyledDialogContent dividers>
        <StyledImage src={product.imageUrl} alt={product.name} />
        <p>Prezzo: {product.price}€</p>
        <p>Annata: {product.year}</p>
        {/* Altre informazioni... */}
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledButton onClick={() => { addToCart(product); onClose(); }}>Aggiungi al Carrello</StyledButton>
        <StyledButton onClick={onClose}>Chiudi</StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default ProductModal;






