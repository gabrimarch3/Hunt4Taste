import NavigationHeader from '../../components/NavigationHeader'
import Footer from '../../components/Footer'
import { esperienze } from '../page'
import {FaMapLocationDot, FaRegClock, FaEuroSign} from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

const prenotaEsperienza = () => {
  const esperienza = esperienze[0];


  return (
    <div className='min-h-screen flex flex-col'>
      <NavigationHeader />
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg flex-grow'>
          <div className='mb-4'>
            <Image 
            src={esperienza.imageUrl}
            alt={esperienza.title}
            width={600}
            height={400}
            objectFit='cover'
            className='rounded-lg'
            />
          <div className='h-10 flex justify-start items-center gap-10'>
            <div className='flex justify-center items-center'>
              <FaMapLocationDot className='text-[#707070]'/>
              <p className='font-sm text-[#707070] ml-2'>{esperienza.location}</p>
            </div>
            <div className='flex justify-center items-center'>
              <FaRegClock className='text-[#707070]'/>
              <p className='font-sm text-[#707070] ml-2'>{esperienza.duration} Minuti</p>
            </div>
            <div className='flex justify-center items-center'>
              <FaEuroSign className='text-[#707070]'/>
              <p className='font-sm text-[#707070] ml-2'>{esperienza.cost},00</p>
            </div>
          </div>
          <h1 className='text-md text-[#8B487E] font-bold mb-4 mt-4'>{esperienza.title}</h1>
          </div>
          <p className='text-gray-700 mb-4'>{esperienza.description}</p>
          <div className='flex justify-center mt-4'>
            <Link href='/prenota-ora'>
              <button className='bg-[#8B487E] w-[200px] mt-20 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300'>
                {esperienza.buttonText}
              </button>
            </Link>
          </div>
        </div>
      <Footer />
    </div>
  )
}


export default prenotaEsperienza