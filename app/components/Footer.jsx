'use client'
import { BottomNavigation, BottomNavigationAction, Fab } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <BottomNavigation 
    showLabels
    onChange={(event, newValue) => {
        setValue(newValue);
      }}
    className='mt-20 flex justify-between'
    >
    <Link href='/'>
    <Fab size='secondary' aria-label='home' style={{backgroundColor: '#8b487e', marginLeft: '10px', marginBottom: '10px'}}>
      <HomeOutlinedIcon style={{color: 'white'}} />
    </Fab>
    </Link>
    <BottomNavigationAction label="Eventi" icon={<EventOutlinedIcon  style={{color : '#924F85'}} />} className='cursor-pointer'/>
    <BottomNavigationAction label="Shop" icon={<WineBarOutlinedIcon  style={{color : '#924F85'}}/>} className='cursor-pointer'/>
    <BottomNavigationAction label="Territorio" icon={<ForestOutlinedIcon style={{color : '#924F85'}} />} className='cursor-pointer'/>
    <BottomNavigationAction label="Altro" icon={<AppsOutlinedIcon style={{color : '#924F85'}} />} className='cursor-pointer'/>
    </BottomNavigation>
  )
}

export default Footer