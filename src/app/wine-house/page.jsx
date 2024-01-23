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
    <div className="h-screen flex flex-col">
      {/* HEADER DINAMICO */}

      <NavigationHeader />

      {/* carosello   */}

      <div className="flex justify-center items-center w-full">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {images.map((image) => (
                <div className="embla__slide" key={image.id}>
                  <img
                    className="embla__slide__img rounded-xl"
                    src={image.imageUrl}
                    alt="Your alt text"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body della pagina */}
      <div className="flex flex-col w-full p-6">
        <h3 className="text-[#863854] font-bold">WINE House</h3>
        <p className="text-[#5D5D5D] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          doloribus voluptates, recusandae illum cum veritatis aliquam
          repellendus possimus quas? Cum consectetur in illum amet culpa illo
          omnis, cumque officia perspiciatis.
        </p>
      </div>

      {/* SEZIONE IN CANTINA */}
      <div className="pl-6 min-h-30">
        <h3 className="text-[#7B7C7C]">IN CANTINA</h3>
        <SwiperCards />
      </div>

      {/* FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default WineHouse;
