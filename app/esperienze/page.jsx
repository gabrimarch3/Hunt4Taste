import React from "react";
import NavigationHeader from "../components/NavigationHeader";
import ExperienceCard from "../components/ExperienceCard";
import Footer from "../components/Footer";
import Link from "next/link";

const esperienze = [
  {
    id: 1,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: "/esperienze/prenota",
    location: "Riccione",
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
    bookUrl: "/esperienze/prenota",
    location: "Riccione",
    duration: 60,
    cost: 60,
  },
  {
    id: 3,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: "",
    location: "Riccione",
    duration: 60,
    cost: 60,
  },
  {
    id: 4,
    title: "Assaggi in vigna",
    description:
      "Questo è un testo utilizzato per descrivere il contenuto della card",
    imageUrl:
      "https://images.pexels.com/photos/1277181/pexels-photo-1277181.jpeg?auto=compress&cs=tinysrgb&w=600",
    buttonText: "Prenota",
    bookUrl: "",
    location: "Riccione",
    duration: 60,
    cost: 60,
  },
];

const Esperienze = () => {
  const truncateDescription = (desc) => {
    return desc.length > 100 ? desc.substring(0, 100) + "..." : desc;
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavigationHeader />
      <div className="flex-grow">

      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {esperienze.map((esperienza) => (
          <div
            className="flex flex-col bg-white rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
            key={esperienza.id}
          >
            <div className="flex-shrink-0">
              <img
                src={esperienza.imageUrl}
                alt={esperienza.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <h3 className="text-gray-900 text-xl font-semibold mb-3">
                {esperienza.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1">
                {truncateDescription(esperienza.description)}
              </p>
              <div className="mt-6 flex justify-end">
                <Link legacyBehavior href={esperienza.bookUrl}>
                  <a className="text-white hover:text-indigo-900 font-semibold text-sm transition-colors duration-300 bg-[#8B487E] rounded-full py-2 px-4">
                    {esperienza.buttonText}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Esperienze;
