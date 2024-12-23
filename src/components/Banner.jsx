import React from 'react'

function Banner() {
  return (
    <div className='h-[82vh] w-[100vw]  bg-cover bg-center  flex items-end  ' style={{backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
       <div className=' p-0.5 text-white text-2xl bg-gray-900/600 w-full text-center'>
        Avengers
        </div> 
    </div>
  )
}

export default Banner