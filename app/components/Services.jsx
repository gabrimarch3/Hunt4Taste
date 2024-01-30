import * as React from "react";

// import { Card, CardContent } from "../../components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import "react-loading-skeleton/dist/skeleton.css";
import '../embla.css'
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

export default function ServicesSection(props) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
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
      
      <div className="flex flex-col justify-center items-center w-full overflow-hidden">
        <h3 className="self-start pt-6 pl-3 text-[#7B7C7C] font-bold">SERVIZI</h3>
        <div className="embla1">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {services.map((service) => (
                <div className="embla__slide1" key={service.id}>
                  <img
                    className="embla__slide__img rounded-xl"
                    src={service.image}
                    alt="Your alt text"
                  />
                  <p className="pt-3 text-[#8B487E]">{service.title.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
