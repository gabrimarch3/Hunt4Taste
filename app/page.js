'use client'
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Services from "./components/Services";
import SwiperCards from "./components/SwiperCards";
import SubscriptionForm from './components/SubscriptionForm';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className="pt-10 bg-transparent">
        <h3 className="pl-3 pb-3 font-bold">In cantina</h3>
        <SwiperCards />
      </div>
      <Services/> 
      <SubscriptionForm />
      <Footer />
    </>
  );
}