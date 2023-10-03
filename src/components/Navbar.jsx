import React from 'react'
import profile from '../images/profile.jpg';
import nepal from '../images/nepal.png';
import { FaBars } from 'react-icons/fa'
import { IoMoonOutline, IoNotificationsOutline, IoMailOutline, IoChevronDownOutline } from 'react-icons/io5'


import flag from '../images/flag.jpg';

const Navbar = () => {
  return (
    <div className=' bg-gray-100 ' >
      {/* Navbar starts here  */}
      <nav className=' gap-[33px]  h-12 p-3 bg-white  text-black shadow shadow-gray-300 w-full grid grid-flow-col'>

        <FaBars className='mt-1 ml-4  ' />

        <input className='text-black text-sm placeholder:font-poppins font-normal placeholder:text-xs p-3  border border-blue-400 rounded-3xl  w-72 h-4  text-left  shadow-primary focus:outline-none'
          type='search' placeholder='Search...' />

        <ul
          className='flex gap-10 mt-1 font-inter font-semibold text-center text-xs  text-black'>
          <li>User Management</li>
          <li>Vendor Management</li>
        </ul>

        <div className='flex gap-14 ml-14'>
          <img className='h-4  mt-1' src={nepal} alt='flag' />

          <ul className='flex gap-3 mt-1'>
            <li><button> <IoMoonOutline className='text-gray-500 w-4 h-4' /> </button></li>
            <li>
              <button class='relative'>
                <IoMailOutline className='text-gray-500 w-4 h-4' />
                <div
                  className='absolute inline-flex items-center justify-center w-3 h-3 text-[8px]  font-normal text-white bg-red-500  rounded-full -top-1 -right-1 '>
                  2</div>
              </button>
            </li>

            <li>
              <button class='relative'>
                <IoNotificationsOutline className='text-gray-500 w-4 h-4' />
                <div
                  className='absolute inline-flex items-center justify-center w-3 h-3 text-[8px]  font-normal text-white bg-green-500  rounded-full -top-1 -right-1  '>
                  2</div>
              </button>
            </li>

          </ul>

          <div className='flex '>
            <img className='w-6 h-6  rounded-full' src={profile} alt='ProfilePicture' />
            <h2 className='pl-2 pr-1 font-poppins font-normal text-xs pt-1 text-gray-900 ' >RonnieWoodkin</h2>
            <IoChevronDownOutline className='mt-1 ' />

          </div>
        </div>



      </nav>
      {/* Navbar ends here  */}
    </div>
  )
}

export default Navbar