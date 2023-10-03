import React from 'react'
import Box from './BoxObjects';
import  { useState } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const BoxSection = () => {
 
    const[items, setItems] = useState(Box);
    return (
        <div className='grid grid-cols-1  lg:grid-cols-4 gap-4 text-white p-9 '>
            {
        items.map((elem)=> {
          const{id, events, number, icon, price , bgColor} = elem;
            return( 
            <div style={{background: elem.bgColor}} className='flex flex-col gap-3  shadow-primary rounded-md px-6 py-4'>
                <div className='flex justify-between '>
                    <h2 className=' font-inter font-normal text-sm'>{events}</h2>
                    {icon}
                </div>
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
           
            })

        }
        
        </div>
    )
}
export default BoxSection