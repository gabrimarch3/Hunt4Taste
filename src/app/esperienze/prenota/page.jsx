import NavigationHeader from "../../components/NavigationHeader";
import Footer from "../../components/Footer";
import { esperienze } from "../page";
import { FaMapLocationDot, FaRegClock, FaEuroSign } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const prenotaEsperienza = () => {
  const esperienza = {
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationHeader />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg flex-grow">
        <div className="mb-4">
          <Image
            src={esperienza.imageUrl}
            alt={esperienza.title}
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="h-10 flex justify-start items-center gap-10">
            <div className="flex justify-center items-center">
              <FaMapLocationDot className="text-[#707070]" />
              <p className="font-sm text-[#707070] ml-2">
                {esperienza.location}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <FaRegClock className="text-[#707070]" />
              <p className="font-sm text-[#707070] ml-2">
                {esperienza.duration} Minuti
              </p>
            </div>
            <div className="flex justify-center items-center">
              <FaEuroSign className="text-[#707070]" />
              <p className="font-sm text-[#707070] ml-2">
                {esperienza.cost},00
              </p>
            </div>
          </div>
          <h1 className="text-md text-[#8B487E] font-bold mb-4 mt-4">
            {esperienza.title}
          </h1>
        </div>
        <p className="text-gray-700 mb-4">{esperienza.description}</p>
        <div className="flex justify-center mt-4">
          <Link href="/prenota-ora">
            <button className="bg-[#8B487E] w-[200px] mt-20 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
              {esperienza.buttonText}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default prenotaEsperienza;
