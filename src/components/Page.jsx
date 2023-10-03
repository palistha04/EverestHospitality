import React from 'react'
import { useState } from 'react';
import logo1 from '../images/logo1.png';
import profile from '../images/profile.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { FaBars } from 'react-icons/fa'
import {IoMoonOutline, IoNotificationsOutline, IoMailOutline,IoChevronDownOutline } from 'react-icons/io5'

import flag from '../images/flag.jpg';

const Page = () => {
    const [isOpen, setIsOpen] = useState(true);

    const togglenav = () => {
        setIsOpen(!isOpen);
    };
    
    const dropdown1 = () => {
        document.querySelector('#submenu1').classList.toggle('hidden');
        document.querySelector('#arrow1').classList.toggle('-rotate-90');
      }
    return (
        <div>
            <div className='flex'>
                {isOpen && (
                    <div className='bg-black w-60'>
                        <ul>

                            <li className=' flex justify-center shadow-sm shadow-gray-400 '>
                                <a href='#'> <img className='w-20 h-20  my-2 ' src={logo1} alt='' /></a>
                            </li>

                            <li
                                className=' p-3 h-10 flex gap-3 my-1 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'>
                                <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
                                <DashboardIcon className='pb-1' />
                                <a href='admin_dashboard.html' className='  font-inter font-medium text-xs '>DASHBOARD MAIN</a>
                            </li>

                            <li className=' bg-bg flex justify-between h-36 px-2 pt-7 pb-4 '>
                                <div className='w-[35%] p-1'>
                                    <img className='  w-14 h-14 rounded-full' src={profile}
                                        alt='profile photo' />
                                </div>
                                <div className=' w-[65%] flex flex-col gap-2 text-white font-poppins font-normal'>
                                    <h2 className='text-base'>Roonie Woodkin</h2>
                                    <h2 className='text-xs'>Administrator</h2>
                                    <button className='bg-green-600 w-14 h-5 rounded-md text-xs '>Online</button>
                                </div>
                            </li>

                            {/* dropdown menu starts here  */}
                            <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
                                onClick={dropdown1} >
                                <div>
                                    <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
                                    <PeopleAltOutlinedIcon />
                                </div>
                                <div className=' flex flex-row justify-between w-full'>
                                    <a href='#' className='font-inter font-medium text-xs mt-1'>USERS</a>
                                    <KeyboardArrowRightIcon id='arrow1' />
                                </div>

                            </li>

                            <ul class=" hidden text-white bg-secondary" id="submenu1">
                                <li class="p-3 h-9 flex gap-7  font-inter font-normal text-xs">
                                    <KeyboardArrowRightIcon />
                                    <a href="#">Admin Users</a>
                                </li>
                                <li class="p-3 h-9 flex gap-7  font-inter font-normal text-xs">
                                    <KeyboardArrowRightIcon />
                                    <a href="#">Partner / Vendor</a>
                                </li>
                                <li class="p-3 h-9 flex gap-7  font-inter font-normal text-xs">
                                    <KeyboardArrowRightIcon />
                                    <a href="#">Customers</a>
                                </li>
                                <li class="p-3 h-9 flex gap-7  font-inter font-normal text-xs">
                                    <KeyboardArrowRightIcon />
                                    <a href="">Subscriber</a>
                                </li>
                            </ul>
                            {/* dropdown menu starts here  */}


                        </ul>
                    </div>
                )}

<div className={`Rs{isOpen ? 'pl-64': ''}flex-grow`}>
         {/* Navbar starts here  */}
         <nav className=" gap-10  h-12  bg-white  text-black shadow shadow-gray-300 w-full grid grid-flow-col">
            
            <FaBars onClick={togglenav} className='mt-1' />

            <input className="text-black text-sm placeholder:font-poppins font-normal placeholder:text-xs p-3  border border-blue-400 rounded-3xl  w-72 h-4  text-left  shadow-primary focus:outline-none"
                type="search" placeholder="Search..." />

            <ul
                className="flex gap-10 mt-1 font-inter font-semibold text-center text-xs  text-black">
                <li>User Management</li>
                <li>Vendor Management</li>
            </ul>

            <div className='flex gap-6'>
                <img className='h-4  mt-1' src={flag} alt="flag" />

                <ul className='flex gap-3 mt-1'>
                    <li><button> <IoMoonOutline /> </button></li>
                    <li><button> <IoMailOutline /> </button></li>
                    <li><button> <IoNotificationsOutline /> </button></li>
                </ul>

                <div className='flex gap-2'>
                    <img className='w-7 h-7  rounded-full' src={profile} alt="ProfilePicture" />
                    <h2>Ronnie Woodkin</h2>
                    <IoChevronDownOutline className='mt-1' />

                </div>
            </div>
            


        </nav>
        {/* Navbar ends here  */}
</div>
            </div>
        </div>
    )
}

export default Page