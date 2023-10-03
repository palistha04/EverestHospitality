import React from 'react'
import User from './UserObjects';
import { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const UserSection = () => {
    const [items, setItems] = useState(User);
    return (
        <div class="px-9 grid gap-3">
            <h1 class="font-inter font-semibold text-xl dark:text-slate-100">User Section</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 text-white '>
                {
                    items.map((elem) => {
                        const { id, events, number, price, bgColor } = elem;
                        return (
                            <div style={{background: elem.bgColor}} className='flex flex-col gap-3  shadow-primary rounded-md px-6 py-4'>
                            
                                <h2 className=' font-inter font-normal text-sm'>{events}</h2>
                            
                            <div className='flex justify-between font-inter font-semibold text-sm '>
                                <h2>{number}</h2>
                                <h2>{price}</h2>
                            </div>
                            <a href='#' className='justify-end flex gap-2'>
                                <h2 className='font-inter font-normal mt-1  text-xs'>Details</h2>
                                    <ArrowCircleRightIcon  sx={{ fontSize: 20 }} />
                            </a>
                        </div>

                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default UserSection