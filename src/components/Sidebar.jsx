import React from 'react'
import logo2 from '../images/logo2.png';
import profile from '../images/profile.jpg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Link } from '@mui/material';
const Sidebar = () => {
  return (
    <div className='bg-black w-60'>
      <ul>

        <li className=' flex justify-center shadow-sm shadow-gray-400 '>
          <a href='#'> <img className='w-20 h-20  my-2 ' src={logo2} alt='' /></a>
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
        <Link style={{ marginTop: 3, textDecoration: 'none' }} href='/UserDetail'>
          <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
          >
            <div>
              <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
              <PeopleAltOutlinedIcon />
            </div>
            <div className=' flex flex-row justify-between w-full'>
              <h2 className='font-inter font-medium text-xs mt-1'>USERS</h2>
              <KeyboardArrowRightIcon id='arrow1' />
            </div>

          </li>
        </Link>

        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>GENERAL</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>
        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>VENUES & SEATS</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>
        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>EVENTS</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>
        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>RATING & REVIEW</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>

        <Link style={{ marginTop: 3, textDecoration: 'none' }} href='/AdminUsers'>
          <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
          >
            <div>
              <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
              <PeopleAltOutlinedIcon />
            </div>
            <div className=' flex flex-row justify-between w-full'>
              <h2 className='font-inter font-medium text-xs mt-1'>ADMINS</h2>
              <KeyboardArrowRightIcon id='arrow1' />
            </div>

          </li>
        </Link>

        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>SETTINGS</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>
        <li className=' py-2 px-5  my-1 flex flex-nowrap gap-3 text-white bg-white bg-opacity-5  rounded-md relative cursor-pointer'
        >
          <div>
            <div className='absolute left-0 top-0 border-l-2 h-10 rounded-md border-white'></div>
            <PeopleAltOutlinedIcon />
          </div>
          <div className=' flex flex-row justify-between w-full'>
            <a href='#' className='font-inter font-medium text-xs mt-1'>HELP AND SUPPORT</a>
            <KeyboardArrowRightIcon id='arrow1' />
          </div>

        </li>

        {/* dropdown menu starts here  */}


      </ul>
    </div>
  )
}

export default Sidebar