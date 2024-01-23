import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home'; // Importa le icone che ti servono
import ServicesIcon from '@mui/icons-material/BuildCircle'; // Icona esemplificativa per i Servizi
import ExperienceIcon from '@mui/icons-material/Explore'; // Icona esemplificativa per le Esperienze
import ShopIcon from '@mui/icons-material/Store'; // Icona esemplificativa per lo Shop
import ContactIcon from '@mui/icons-material/Email'; // Icona esemplificativa per i Contatti
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io'; // Icona per chiudere il menu
import WineBarIcon from '@mui/icons-material/WineBar';

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const menuItems = [
    { text: 'Home', href: '/', icon: <HomeIcon /> },
    { text: 'Servizi', href: '/servizi', icon: <WineBarIcon /> },
    { text: 'Esperienze', href: '/esperienze', icon: <ExperienceIcon /> },
    { text: 'Shop', href: '/shop', icon: <ShopIcon /> },
    { text: 'Contatti', href: '/contatti', icon: <ContactIcon /> },
  ];

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <GiHamburgerMenu size={24} fill='white'/>
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="w-80" 
        >
          <div className="flex items-center justify-between p-4 bg-[#8B487E] text-white">
            <span className="text-2xl font-semibold">Hunt for Taste</span>
            <IconButton onClick={toggleDrawer(false)} className="text-white">
              <IoMdClose size={24} />
            </IconButton>
          </div>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <Link href={item.href} passHref>
                  <ListItemButton>
                    <ListItemIcon className="text-[#8B487E]">
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;