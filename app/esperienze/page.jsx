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
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: 'app/esperienze/1'
  },
  {
    id: 2,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: '/esperienze/2'
  },
  {
    id: 3,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: ''
  },
  {
    id: 4,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: ''
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
