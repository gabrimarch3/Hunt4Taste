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
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


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
    { text: 'Servizi', href: '/wine-house', icon: <WineBarIcon /> },
    { text: 'Esperienze', href: '/esperienze', icon: <ExperienceIcon /> },
    { text: 'Shop', href: '/shop', icon: <ShopIcon /> },
    { text: 'Contatti', href: '/contatti', icon: <ContactIcon /> },
  ];

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <GiHamburgerMenu size={24} fill='white'/>
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} className='h-full'>
      <Box
  role="presentation"
  onClick={toggleDrawer(false)}
  onKeyDown={toggleDrawer(false)}
  className="w-80 flex flex-col h-full" 
>
<div className="flex items-center justify-between p-4 bg-[#8B487E] text-white" style={{ position: 'relative', height: '64px' }}>
  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <img src='https://img.freepik.com/free-vector/wine-logo-template_1195-35.jpg?w=1380&t=st=1705658673~exp=1705659273~hmac=a33f9f1a07c8b9750f6575fb3284c4a3b554fa9a49eb9ad3151e9c9cee30ce37' alt="Hunt for Taste Logo" style={{ maxHeight: '100px', maxWidth: '100px' }} className='rounded-xl' />
  </div>
  <IconButton onClick={toggleDrawer(false)} className="text-white">
    <IoMdClose size={24} />
  </IconButton>
</div>
  <List className='mt-10 text-bold'>
  {menuItems.map((item, index) => (
    <ListItem key={index} disablePadding className='w-full'>
      <Link href={item.href} passHref className='w-full'>
        <ListItemButton
          style={{
            borderRadius: '8px',
            padding: '10px',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          className='w-full'
        >
          <ListItemIcon style={{ color: '#8B487E', minWidth: '35px' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} style={{ fontWeight: 'bold' }} />
        </ListItemButton>
      </Link>
    </ListItem>
  ))}
  </List>
  {/* Footer Section */}
  <div className="mt-auto w-full self-end bg-[#8B487E] text-white p-4">
    <p className="text-lg font-bold text-center mb-4">Seguici sui social!</p>
    <div className="flex justify-center space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FaFacebookF className="text-white text-2xl hover:text-gray-300" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <FaInstagram className="text-white text-2xl hover:text-gray-300" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
        <FaTwitter className="text-white text-2xl hover:text-gray-300" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
        <FaYoutube className="text-white text-2xl hover:text-gray-300" />
      </a>
    </div>
  </div>
</Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;