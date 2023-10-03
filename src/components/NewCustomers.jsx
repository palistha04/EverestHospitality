import React from 'react'
import profile from '../images/profile.jpg';
import Customer from './NewCustomersObjects';
import Ticket from './TicketObjects';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';

const NewCustomers = () => {
    const [items1, setItems1] = useState(Customer);
    const [items2, setItems2] = useState(Ticket);
    
    return (
        <div className='px-9 py-5 grid grid-cols-1 lg:grid-cols-2 gap-7'>
            <div className='p-1 rounded-md bg-black text-white shadow-lg '>
                <div
                    className='flex justify-between px-5 pb-3 pt-4 font-inter font-semibold text-base text-white '>
                    <h2>NEW CUSTOMERS</h2>
                    <h2>SIGN UP APP</h2>
                </div>
                {
                    items1.map((elem1) => {
                        const { id, name, email,color, app } = elem1;
                        return (
                            <div>
                                <div className='flex justify-between pl-5 pr-12 py-4'>
                                    <div className=' flex gap-4'>
                                        <img className='h-12 w-12 rounded-full ' src={profile} alt='' />
                                        <div className='flex flex-col gap-1 text-left p-1 font-inter font-normal text-sm'>
                                            <h2 className=' text-white '>{name}</h2>
                                            <h2 className=' text-gray-400 '>{email}</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 style={{color: elem1.color}}>{app}</h2>
                                    </div>

                                </div>
                                <hr className='border-gray-500 '/>
                            </div>


                        )
                    }
                    )
                }
                <a href='#' className='flex py-4 pr-7 gap-2 justify-end'>
                                <h2 className='text-cyan-600  font-inter font-semibold text-sm  '>View All</h2>
                                <ArrowCircleRightIcon sx={{ fontSize: 20 }} />
                            </a>
            </div>


            
            <div className='p-1 rounded-md bg-black text-white shadow-md shadow-[#00000029]'>
                <div
                    className='flex justify-between px-5 pb-4 pt-4 font-inter font-semibold text-base text-white '>
                    <h2>RECENT TICKET SALES</h2>
                    <h2 className='text-cyan-300 '>24/03/2023</h2>
                </div>

                <div className='px-5 pb-5'>

                    <div className=' border border-gray-500 rounded-md'>
                        <table className=' border-none w-full text-sm text-center font-inter  text-white text-'>
                            <thead className=' bg-[#2A2F33] border-b border-b-gray-500 font-semibold'>
                                <tr>
                                    <th className='px-6 py-4'>
                                    Movie Name  
                                    </th>
                                    <th className='px-6 py-4'>
                                    No. of Ticket
                                    </th>
                                    <th className='px-6 py-4'>
                                    Amount Rs
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='font-inter font-normal'>
                            {
                    items2.map((elem2) => {
                        const { id, movie, number,amount } = elem2;
                        return (
                                <tr className=' border-b border-b-gray-500 '>
                                    <th className='px-6 py-3 font-medium  '>
                                        {movie}
                                    </th>
                                    <td className='px-6 py-3'>
                                        {number}
                                    </td>
                                    <td className='px-6 py-3'>
                                        {amount}
                                    </td>
                                </tr>
                                      )
                                    }
                                    )
                                }

                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th className='flex py-3 pr-7 gap-2 justify-end'>
                                        <h2 className='text-cyan-600 font-semibold'> <a href='#'>View All</a> </h2>
                                        <ArrowCircleRightIcon sx={{ fontSize: 20 }} />
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
                  
        </div>
    )
}

export default NewCustomers