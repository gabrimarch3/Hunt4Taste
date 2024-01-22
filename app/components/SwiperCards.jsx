"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import { FaWineBottle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const data = [
  {
    image:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
  {
    image:
      "https://images.pexels.com/photos/2954924/pexels-photo-2954924.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "Esperienze",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/esperienze",
  },
  {
    image:
      "https://images.pexels.com/photos/3084603/pexels-photo-3084603.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
  {
    image:
      "https://images.pexels.com/photos/2855986/pexels-photo-2855986.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
  {
    image:
      "https://images.pexels.com/photos/19046659/pexels-photo-19046659/free-photo-of-montagne-campo-agricoltura-uva.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
  {
    image:
      "https://images.pexels.com/photos/8849169/pexels-photo-8849169.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
  {
    image:
      "https://images.pexels.com/photos/19062971/pexels-photo-19062971/free-photo-of-punto-di-riferimento-collina-italia-agricoltura.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <FaWineBottle className="text-red-500" size={24} />,
    title: "WINE house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    cardUrl: "/wine-house",
  },
];

export default function SwiperCards({ isLoading }) {
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
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
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
        : data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center bg-white rounded-xl overflow-hidden shadow-lg m-2 min-h-[300px]"
            >
              <Link href={item.cardUrl}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="px-5 py-3 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-start space-x-2">
                    <div className="shrink-0">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm text-left mt-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
