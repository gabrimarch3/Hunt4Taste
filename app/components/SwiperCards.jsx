"use client";
import {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import { FaWineBottle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";


export default function SwiperCards({ isLoading }) {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      // Effettua una chiamata API per ottenere la lista delle carte
      fetch("https://hunt4taste.it/api/cards") // Sostituisci con l'URL corretto per il tuo controller API
        .then((response) => response.json())
        .then((data) => setCards(data))
        .catch((error) => console.error("Errore nella chiamata API:", error));
    }
  }, [isLoading]);



  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
          height: '218px',
        },
        550: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 30,
        },
      }}
      modules={[Scrollbar]}
    >
      {isLoading
        ? [...Array(7)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-row items-center bg-white rounded-xl overflow-hidden shadow-lg m-2 min-h-[300px]"
            >
              <Skeleton height={300} width={300} />
              <Skeleton
                height={20}
                width={270}
                style={{ margin: "0.5rem" }}
                count={2}
              />
            </SwiperSlide>
          ))
        : cards.map((card) => (
          <SwiperSlide
  key={card.id}
  className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-lg m-2 min-h-[300px]"
>
  <Link href={`/cards/${card.id}`} legacyBehavior>
    <a className="w-full h-56 object-cover rounded-t-xl"> 
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-56 object-cover rounded-t-xl"
      />
      <div className="px-5 py-3 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-start space-x-2">
          <FaWineBottle className="text-[#8B487E]" size={24} />
          <h3 className="text-xl font-semibold text-[#8B487E]">
            {card.title}
          </h3>
        </div>
        <p className="text-[#5D5D5D] text-sm text-left mt-2">
          {card.description}
        </p>
      </div>
    </a>
  </Link>
</SwiperSlide>
        ))}
    </Swiper>
  );
}
