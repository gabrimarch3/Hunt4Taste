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

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    );

    // Ascolta l'evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (isIOS) {
      alert("Per installare questa app, tocca l'icona di condivisione e poi 'Aggiungi a schermata Home'.");
    } else {
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('L\'utente ha accettato l\'installazione della PWA');
          } else {
            console.log('L\'utente ha rifiutato l\'installazione della PWA');
          }
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
        <BottomNavigationAction
          label="Altro"
          icon={<AppsOutlinedIcon style={{ color: "#924F85" }} />}
          className="cursor-pointer"
          onClick={handleInstallClick}
        />
      </BottomNavigation>
    </footer>
  );
};

export default Footer;
