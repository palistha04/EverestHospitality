import React from 'react'
import socialmedia from './SocialMediaObjects';
import { useState } from 'react';
const SocilaMediaSection = () => {
    const [items, setItems] = useState(socialmedia);
    return (
        <div className=' grid-cols-2 md:grid-cols-3 grid lg:grid-cols-6 gap-8 px-9 py-5 '>
            {
                items.map((elem) => {
                    const { id, name, followers, likes, comments, shared } = elem;
                    return (
                        <div
                            className=' flex flex-col gap-1  bg-white dark:bg-gray-900 shadow-md dark:text-slate-200 font-poppins text-xs '>

                            <div style={{backgroundColor:elem.bgColor}} className=' h-8  text-center'>
                                <h2 className='p-2 text-white font-semibold '>{name}</h2>
                            </div>
                            <div className='flex flex-col gap-1  font-normal'>
                                <div className='pl-2 pr-10 py-1 flex justify-between '>
                                    <h2>Followers</h2>
                                    <h2 className='text-base'>{followers}</h2>

                                </div>
                                <div className='pl-2 pr-10 py-1  flex justify-between'>
                                    <h2>Page Likes</h2>
                                    <h2 className='text-base'>{likes}</h2>
                                </div>
                                <div className='pl-2 pr-10 py-1  flex justify-between'>
                                    <h2>Comments</h2>
                                    <h2 className='text-base'>{comments}</h2>
                                </div>
                                <div className='pl-2 pr-10 py-1  flex justify-between'>
                                    <h2>Shared</h2>
                                    <h2 className='text-base'>{shared}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default SocilaMediaSection