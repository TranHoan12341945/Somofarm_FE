import image from '../../assets/featured-img.png'

export function Destaques(){
  return(
      <div className="container max-w-6xl mx-auto px-4 py-10 flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col gap-4 items-start md:w-1/2">

          <h3 className="text-gray-400 text-sm font-medium">Resort em Destaque</h3>

          <h2 className="text-gray-600 font-medium text-2xl">Ecoresort Praia do Forte Bahia</h2>

          <p className="text-gray-400 font-medium text-sm">Hotel qualidade 5 estrelas</p>

          <p className="text-sm text-gray-400 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quidem fugit, saepe ex rerum accusamus nesciunt delectus omnis temporibus</p>
          
          <p className="text-sm text-gray-400 font-medium">Enim rem? Blanditiis facilis dignissimos nobis ex autem temporibus inventore laboriosam!</p>

          <button 
            className="bg-orange-500 rounded px-5 py-3 font-bold hover:bg-orange-600 mt-3 flex items-center justify-center gap-2">
            Solicitar reserva
            <svg
              className="w-5"
              fill="none" 
              stroke="currentColor" 
              stroke-width="1.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </button>
        </div>
        <div className='w-auto flex flex-col items-center'>
          <img src={image} alt="" />
          <div className='flex gap-3 mt-2'>
            <div className='w-4 h-4 bg-gray-300 rounded-full cursor-pointer'></div>
            <div className='w-4 h-4 bg-orange-500 rounded-full cursor-pointer'></div>
            <div className='w-4 h-4 bg-gray-300 rounded-full cursor-pointer'></div>
          </div>
        </div>
      </div>
  )
}