import hotel1 from '../../assets/hotel-1.jpeg'
import hotel2 from '../../assets/hotel-2.jpeg'
import hotel3 from '../../assets/hotel-3.jpeg'
import hotel4 from '../../assets/hotel-4.jpeg'
import shadow from '../../assets/image-shadow.png'

export function GridImages(){
  return(
    <div>
      <div className="container mx-auto px-24 py-10">
        <h3 className="text-2xl text-center text-gray-500 font-semibold mb-8">Conheça mais resorts</h3>
        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-96">

          <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden">
            <p className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-10'>Beach Park Resort</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel1} alt="hotel" className='w-full h-full object-cover rounded-lg overflow-hidden' />
          </div>
          <div className="relative col-span-2 ">
            <p className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-10'>Salinas do Maragogi Resort</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel2} alt="hotel" className='w-full h-full object-cover rounded-lg overflow-hidden'/>
          </div>
          <div className='relative'>
            <p className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-10'>Grand Palladium</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel3} alt="hotel" className='w-full h-full object-cover rounded-lg overflow-hidden' />
          </div>
          <div className='relative'>
            <p className='absolute bottom-0 pl-4 pb-4 text-white font-bold z-10'>Arraial d'Ajuda Eco Resort</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel4} alt="hotel" className='w-full h-full object-cover rounded-lg overflow-hidden' />
          </div>
          
        </div>
        

      </div>
    </div>
  )
}