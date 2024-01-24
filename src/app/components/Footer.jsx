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

const Footer = () => {
  const router = useRouter();

  return (
    <div className="sticky bottom-0">
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
          onClick={() => router.push('/')}
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
