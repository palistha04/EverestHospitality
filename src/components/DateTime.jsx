import React from 'react'

const DateTime = () => {
  return (
    
    <div className=' flex justify-between'>

 {/* breadcrumb section starts here   */}
    <div className=' pt-4 lg:pl-9'>
        <ul className='flex font-inter font-normal text-xs'>
            <li className=' dark:text-slate-100 text-gray-900'>
                Admin
            </li>
            <li>
                <span className='mx-2 dark:text-slate-100 text-gray-900'>/</span>
            </li>
            <li className='text-gray-400'>
                Dashboard
            </li>
        </ul>
    </div>
 {/* breadcrumb section ends here   */}

 {/* time section starts here   */}
    <div className='mr-6 flex gap-4 pt-4'>

        <div className=' flex gap-1'>
            <button
                className=' text-xs text-center font-mulish font-bold w-10 h-7 rounded-md p-1 bg-blue-500 border-[1px] text-slate-100 '>Days</button>
            <button
                className='text-xs text-center font-mulish font-semibold w-12 h-7 rounded-md p-1 bg-whitetext-white border-[1px] dark:text-slate-100  text-gray-900'>Weeks</button>
            <button
                className='text-xs text-center font-mulish font-semibold w-14 h-7 rounded-md p-1 bg-whitetext-white border-[1px] dark:text-slate-100 placeholder:text-gray-900'>Months</button>
        </div>

        <div
            className=' font-poppins font-normal text-xs flex gap-2  w-36 h-7 rounded-md text-center p-1 dark:text-slate-300 text-gray-500 bg-whitetext-white border-[1px] border-blue-100'>
            <svg className=' w-4 h-4' fill='none' stroke='currentColor' stroke-width='1.5'
                viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round'
                    d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'>
                </path>
            </svg>
            <h2>18 October, 2021</h2>
        </div>
    </div>
 {/* time section ends here   */}

</div>

  )
}

export default DateTime