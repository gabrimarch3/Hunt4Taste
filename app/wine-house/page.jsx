"use client";

import NavigationHeader from "../components/NavigationHeader";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../embla.css";
import SwiperCards from "../components/SwiperCards";
import Footer from "../components/Footer";

const images = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/2339181/pexels-photo-2339181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const WineHouse = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="h-screen flex flex-col bg-transparent">
      <NavigationHeader />

      {/* Modernized Carousel */}
      <div className="flex justify-center items-center w-full my-8">
        <div className="embla shadow-lg rounded-lg overflow-hidden">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {images.map((image) => (
                <div className="embla__slide" key={image.id}>
                  <img
                    className="embla__slide__img rounded-lg transition duration-500 ease-in-out transform hover:scale-105"
                    src={image.imageUrl}
                    alt="Wine selection"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Refined Typography and Spacing */}
      <div className="flex flex-col w-full px-5 py-3">
        <h3 className="text-3xl text-[#863854] font-bold mb-3">WINE House</h3>
        <p className="text-[#5D5D5D] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          doloribus voluptates, recusandae illum cum veritatis aliquam
          repellendus possimus quas? Cum consectetur in illum amet culpa illo
          omnis, cumque officia perspiciatis.
        </p>
      </div>

      {/* Enhanced "IN CANTINA" Section */}
      <div className="pl-5 pt-5 pb-10">
        <h3 className="text-2xl text-[#7B7C7C] mb-4">IN CANTINA</h3>
        <SwiperCards />
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default WineHouse;