import React from 'react'
import Logo from '../Movielogo.jpg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    
        <div className='flex items-center gap-x-16 border '>

        <img    className='w-[60px] ' src={Logo} alt="" />
        {/* use to in replace of href*/}
        {/* <a className='font-extrabold text-3xl' href="/">Movies</a> */}
      <Link className='font-extrabold text-3xl'  to="/FILMVAULT-PROJECT/">Movies</Link>
      <Link  className='font-extrabold text-3xl' to="/WatchList">WatchList</Link>
        </div>

    
  )
}

export default Navbar
