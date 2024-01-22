import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "Degustazioni",
    image:
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 2,
    title: "Corsi",
    image:
      "https://images.pexels.com/photos/6481887/pexels-photo-6481887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 3,
    title: "Esperienze",
    image:
      "https://images.pexels.com/photos/19046659/pexels-photo-19046659/free-photo-of-montagne-campo-agricoltura-uva.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 4,
    title: "Shop",
    image:
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Degustazioni",
    image:
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 6,
    title: "Corsi",
    image:
      "https://images.pexels.com/photos/6481887/pexels-photo-6481887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    id: 7,
    title: "Esperienze",
    image:
      "https://images.pexels.com/photos/19046659/pexels-photo-19046659/free-photo-of-montagne-campo-agricoltura-uva.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    id: 8,
    title: "Shop",
    image:
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function ServicesSection({ isLoading }) {
  // return (
  //   <div className="py-10">
  //     <h2 className="text-2xl font-bold text-left mb-5 p-3">SERVIZI</h2>
  //     <Carousel
  //       opts={{
  //         align: "start",
  //       }}
  //       className="w-full"
  //     >
  //       <CarouselContent className='ml-1'>
  //         {services.map((service) => (
  //           <div className="flex">
  //             <CarouselItem key={service.id} className="flex justify-center flex-col pl-3">
  //               <Card className="w-70 h-70">
  //                 <img
  //                   src={service.image}
  //                   alt={service.title}
  //                   className="w-full object-cover"
  //                   style={{ height: "250px" }}
  //                 />
  //               </Card>
  //             <div className="text-center">
  //               <h3 className="text-lg font-semibold">{service.title}</h3>
  //             </div>
  //             </CarouselItem>
  //           </div>
  //         ))}
  //       </CarouselContent>
  //     </Carousel>
  //   </div>
  // );
    return (
      <>
      <h2 className="text-2xl font-bold text-left mb-5 p-3">Servizi</h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {services.map((service) => (
            <CarouselItem key={service} className="pl-1 min-[300px]:basis-1/2 sm:basis-1/3 md:basis-1/2 lg:basis-1/5 bg-transparent">
              <div className="p-1 bg-transparent">
                <Card className='shadow-none border-none'>
                  <CardContent className="flex flex-col aspect-square items-center justify-center bg-transparent outline-none w-full h-full">
                    <img src={service.image} alt={service.title} className="rounded-lg"/>
                    <h3 className="text-lg font-semibold text-gray-300">{service.title}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      </>
    )
  }
