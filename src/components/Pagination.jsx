import React from 'react'
import { useState } from 'react';

function Pagination({decpgno,incpgno,pgno}) {
   
        
        
    
  return (
    <div className='w-100%  bg-gray-900/60 mt-4 p-3 flex justify-center'>
        <div  className=' px-5'>
        <i onClick={decpgno}   class="cursor-pointer fa-solid fa-arrow-left"></i>
        </div>
        <div>
           {pgno}
        </div>
        <div className='px-5'>
        <i onClick={incpgno} class="cursor-pointer fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}


export default Pagination