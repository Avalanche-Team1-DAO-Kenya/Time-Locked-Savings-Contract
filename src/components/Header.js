import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscBellDot } from "react-icons/vsc"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='sticky top-0 h-16 shadow-md bg-white z-50'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          
          <Link>
              <Logo w={90} h={50}/>
          </Link>
        </div>
        <div className='hidden lg:flex item-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search here..' className='w-full outline-none'/>
          <div className='text-lg w-13 h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-7'>

          

          <div className='text-2xl relative'>
            <span><VscBellDot /></span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>

          <div>
            <Link to={"/login"} className='px-3 py-1 rounded-full text-white hover:bg-red-700  bg-red-600 text'>Login</Link>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header