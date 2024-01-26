"use client";
import { BottomNavigation, BottomNavigationAction, Fab } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Footer = () => {
  const router = useRouter();
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isPWAInstalled, setIsPWAInstalled] = useState(false);

  useEffect(() => {
    // Controlla se l'app è in modalità standalone (cioè se è stata installata)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                         (window.navigator.standalone) || document.referrer.includes('android-app://');
    setIsPWAInstalled(isStandalone);

    // Controllo per dispositivi iOS
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    );

    // Ascolta l'evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      // Impedisci al browser di mostrare il prompt di installazione
      e.preventDefault();
      // Salva l'evento per poterlo attivare più tardi solo se l'app non è già installata
      if (!isStandalone) {
        setInstallPrompt(e);
      }
    });
  }, []);

  const handleInstallClick = () => {
    if (isIOS) {
      // Mostra le istruzioni per aggiungere la PWA alla schermata Home su iOS
      alert("Per installare questa app, tocca l'icona di condivisione e poi 'Aggiungi a schermata Home'.");
    } else {
      // Se c'è un evento di installazione salvato e non siamo su iOS, mostralo
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L\'utente ha accettato l\'installazione della PWA');
            setIsPWAInstalled(true); // Aggiorna lo stato una volta che l'app è installata
          } else {
            console.log('L\'utente ha rifiutato l\'installazione della PWA');
          }
          // Dopo aver gestito l'evento, imposta installPrompt a null
          setInstallPrompt(null);
        });
      }
    }
  };


  return (
    <footer className="sticky bottom-0 z-10">
      <BottomNavigation
        showLabels
        className="mt-20 flex justify-between sticky bottom-0"
      >
        <Link href="/">
          <Fab
            size="secondary"
            aria-label="home"
            style={{
              backgroundColor: "#8b487e",
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          >
            <HomeOutlinedIcon style={{ color: "white" }} />
          </Fab>
        </Link>
        <BottomNavigationAction
          label="Eventi"
          icon={<EventOutlinedIcon style={{ color: "#924F85" }} />}
          className="cursor-pointer"
          onClick={() => router.push('/esperienze')}
        />
        <BottomNavigationAction
          label="Shop"
          icon={<WineBarOutlinedIcon style={{ color: "#924F85" }} />}
          className="cursor-pointer"
          onClick={() => router.push('/shop')}
        />
        <BottomNavigationAction
          label="Territorio"
          icon={<ForestOutlinedIcon style={{ color: "#924F85" }} />}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
       {!isPWAInstalled && (
          <BottomNavigationAction
            label="Installa ora!"
            icon={<AppsOutlinedIcon style={{ color: "#924F85" }} />}
            className="cursor-pointer"
            onClick={handleInstallClick}
          />
        )}
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
