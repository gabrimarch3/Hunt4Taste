import NavigationHeader from '../../components/NavigationHeader'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import { esperienze } from '../page'
import Image from 'next/image'
import Link from 'next/link'

const prenotaEsperienza = () => {
  const router = useRouter();
  const { id } = router.query;
  const esperienza = esperienze.find(e => e.id === parseInt(id));

  if(!esperienza) {
    return <p>Esperienza non trovata</p>
  }

  return (
    <div className='h-full'>
      <NavigationHeader />
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg'>
          <h1 className='text-3xl font-bold mb-4'>{esperienza.title}</h1>
          <div className='mb-4'>
            <Image 
            src={esperienza.imageUrl}
            alt={esperienza.title}
            width={600}
            height={400}
            objectFit='cover'
            className='rounded-lg'
            />
          </div>
          <p className='text-gray-700 mb-4'>{esperienza.description}</p>
          <div className='flex justify-center mt-4'>
            <Link href='/prenota-ora'>
              <a className='bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300'>
                {esperienza.buttonText}
              </a>
            </Link>
          </div>
        </div>
      <Footer />
    </div>
  )
}


export default prenotaEsperienza