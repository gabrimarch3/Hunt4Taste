import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";
import Link from "next/link";

export const esperienze = [
  {
    id: 1,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: '/esperienze/prenota',
    location: 'Riccione',
    duration: 60,
    cost: 60,
  },
  {
    id: 2,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: '/esperienze/prenota',
    location: 'Riccione',
    duration: 60,
    cost: 60
  },
  {
    id: 3,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: '',
    location: 'Riccione',
    duration: 60,
    cost: 60
  },
  {
    id: 4,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: '',
    location: 'Riccione',
    duration: 60,
    cost: 60
  },
];

const Esperienze = () => {
  return (
    <div className="h-full">
      <NavigationHeader />
      <div className="w-full p-6">
        {/* <ExperienceCard
          title="Assaggi in vigna"
          description="Questo è un testo di descrizione della card per le prenotazioni"
          imageUrl="https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600"
          buttonText="Prenota"
        /> */}
        {esperienze.map((esperienza) => (
          <div className="w-full p-6">
            <Link href={esperienza.bookUrl}>
            <ExperienceCard
              title={esperienza.title}
              description={esperienza.description}
              imageUrl={esperienza.imageUrl}
              buttonText={esperienza.buttonText}
            />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Esperienze;
