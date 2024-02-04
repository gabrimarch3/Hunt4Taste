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
import "../embla.css";
import "swiper/css";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { FaWineBottle } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const styles = {
    card: {
      maxWidth: isMobile ? 100 : 130, // 100px on mobile, 130px otherwise
      margin: "auto",
    },
    media: {
      height: 0,
      paddingTop: "100%", // Aspect ratio 1:1
    },
    title: {
      textAlign: "center",
      // Other styling based on your design
    },
  };

  return (
    <Box sx={{ mt: 5, mb: 5, ml: 3 }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Servizi
      </Typography>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        className="mySwiper h-full"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          100: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2.2,
            spaceBetween: 60,
            height: "80px",
          },
          550: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: -30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 6,
            spaceBetween: 200,
          },
          1500: {
            slidesPerView: 8,
            spaceBetween: 200,
          }
        }}
        modules={[Scrollbar]}
      >
        {services.map((item, index) => (
          <Box key={index} sx={{ m: 1 }}>
            <SwiperSlide>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  bgcolor: "background.paper",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: 3,
                  width: {
                    xs: 180,
                    sm: 180,
                    md: 180,
                    lg: 200,
                    xl: 280,
                  }, // Square size
                  height: {
                    xs: 180,
                    sm: 180, 
                    md: 180, 
                    lg: 200, 
                    xl: 280,
                  },// Square size
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%", // Fill the square
                    objectFit: "cover", // Maintain aspect ratio
                  }}
                  src={item.image}
                  alt={item.title}
                />
              </Box>
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ p: 1, textAlign: "left", width: '100%', color: '#7B7C7C'}}
              >
                {item.title.toUpperCase()}
              </Typography>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  );
}
// <p className="pt-3 text-[#8B487E]">{service.title.toUpperCase()}</p>
