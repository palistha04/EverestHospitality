import React from 'react'
import Navbar from './Navbar'
import DateTime from './DateTime'
import Sidebar from './Sidebar'
import {Link} from '@mui/material';

const UserDetail = () => {
  
  return (
    <div className='flex '>
      <Sidebar />
      <div className=''>
        <Navbar />
        <DateTime />

        {/* <!-- table section starts here  --> */}
        <div className='px-2 py-5'>
          <div className='bg-white dark:bg-gray-700 flex flex-col py-3  pl-5 '>
            <div className='flex flex-col md:flex-row gap-4 md:justify-between lg:gap-[300px] mb-8 pr-5'>
              <h2 className='text-2xl text-black font-poppins font-semibold dark:text-gray-100'>Total User / Customer (15,025)</h2>
              <div className='flex gap-16 '>
                <div>

                  <select className=' text-xs  font-poppins font-normal flex justify-between py-1 px-2 border-gray-700 rounded-md text-gray-700 dark:text-gray-100 border-[1px] dark:border-gray-500' name='' id=''>
                    <option value='alluser'>All Users</option>
                    <option value='alluser'>All Users</option>
                    <option value='alluser'>All Users</option>
                    <option value='alluser'>All Users</option>
                    <option value='alluser'>All Users</option>
                  </select>

                </div>

                <div className=' relative '>
                  <input className='  placeholder:font-poppins font-normal placeholder:text-xs p-3 border-[1px] dark:border-gray-500 border-blue-400 rounded-3xl  h-5 text-left  shadow-primary focus:outline-none'
                    type='search' placeholder='Search...' />
                  <svg className='  absolute bottom-2 left-44 lg:bottom-3  h-4 w-4 text-gray-400 fill-current '
                    viewBox='0 0 512 512'>
                    <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- table  --> */}
            <div className='w-full overflow-auto'>
              <table className='min-w-full'>
                <thead>
                  <tr>
                    <th className=' py-2 tableHeadng text-gray-900 dark:border-r-gray-500 border-r-[1px]'>
                      
                        <input type='checkbox'/>
                        </th>
                        <th className=' px-1 py-2 tableHeadng text-gray-900 dark:text-gray-100 dark:border-r-gray-500 border-r-[1px]'>
                          <div className='flex justify-between'>
                            <h2>First Name</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500' >

                          <div className='flex justify-between'>
                            <h2>Last Name</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500' >
                          <div className='flex justify-between'>
                            <h2> Email Address</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500' >
                          <div className='flex justify-between'>
                            <h2>Status</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500 ' >
                          <div className='flex justify-between'>
                            <h2>Phone</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500 ' >
                          <div className='flex justify-between'>
                            <h2>Signup Date</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>
                        <th className='px-1 py-2 tableHeadng text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500 ' >
                          <div className='flex justify-between'>
                            <h2>Action</h2>
                            <svg className='w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current ' viewBox='0 0 320 512'>
                              <path d='M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z' />
                            </svg>
                          </div>
                        </th>

                      </tr>
                    </thead>

                    <tbody>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='pl-4 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '><input type='checkbox'/> </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>Taylor</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>Swift</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>user@hotmail.com</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>
                          <button className='w-14 h-5 bg-green-600 rounded-md text-white'>
                            Active
                          </button>
                        </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>+977 9860112233</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>22 Dec, 2023</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>
                          <div className='flex justify-evenly'>
                            <Link href='/CustomerDetail'><svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 576 512'> <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' /></svg></Link>
                            
                            <svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 512 512'><path d='M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z' /></svg>
                            <svg className='w-4 h-4 p-[2px] rounded-full bg-red-600 text-white fill-current ' viewBox='0 0 448 512'><path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' /></svg>
                          </div>
                        </td>
                      </tr>

                      <tr className='bg-white dark:bg-gray-700'>
                        <td className='pl-4 border-[1px] dark:border-gray-500 text-left text-xs font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  '><input type='checkbox'/> </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300  py-1 '>Elsa</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300  py-1 '>Pradhan</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300   py-1 '>user@gmail.com</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300  py-1 '>
                          <button className='w-14 h-5 bg-green-600 rounded-md text-white'>
                            Active
                          </button>
                        </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300 py-1 '>+977 9860112233</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300 py-1 '>22 Dec, 2023</td>
                        <td className='px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] border-r-white border-r-[1px] tableData1 text-gray-900 py-1 dark:text-slate-300  '>
                          <div className='flex justify-evenly'>
                            <svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 576 512'> <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' /></svg>
                            <svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 512 512'><path d='M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z' /></svg>
                            <svg className='w-4 h-4 p-[2px] rounded-full bg-red-600 text-white fill-current ' viewBox='0 0 448 512'><path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' /></svg>
                          </div>
                        </td>
                      </tr>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='pl-4 border-[1px] dark:border-gray-500 text-left text-xs font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  '><input type='checkbox'/> </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>Elsa</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>Pradhan</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 dark:text-slate-300  py-1 '>user@gmail.com</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>
                          <button className='w-14 h-5 bg-green-600 rounded-md text-white'>
                            Active
                          </button>
                        </td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>+977 9860112233</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>22 Dec, 2023</td>
                        <td className='px-1 border-[1px] dark:border-gray-500 tableData1 text-gray-900 py-1 dark:text-slate-300  '>
                          <div className='flex justify-evenly'>
                            <svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 576 512'> <path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' /></svg>
                            <svg className='w-4 h-4 dark:text-slate-100 dark:fill-current' viewBox='0 0 512 512'><path d='M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z' /></svg>
                            <svg className='w-4 h-4 p-[2px] rounded-full bg-red-600 text-white fill-current ' viewBox='0 0 448 512'><path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' /></svg>
                          </div>
                        </td>
                      </tr>
                      <tr className='bg-white dark:bg-gray-700'>
                        <td className='px-1 dark:border-gray-500 border-r-[1px] border-t-[1px] border-b-[1px] text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500  text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white dark:bg-gray-700'>
                        <td className='px-1 dark:border-gray-500 border-r-[1px] border-t-[1px] border-b-[1px] text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500  text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white dark:bg-gray-700'>
                        <td className='px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500  text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white dark:bg-gray-700'>
                        <td className='px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 '></td>
                      </tr>
                      <tr className='bg-white odd:bg-gray-100 odd:dark:bg-gray-800'>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500 text-xs py-3 '></td>
                        <td className='px-1 border-[1px] dark:border-gray-500  text-xs py-3 '></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- table  --> */}

                <div className='mt-6 mb-11 mr-5'>
                  <div className='flex gap-1 justify-end font-mulish font-semibold text-xs text-gray-900'>
                    <button className='w-14 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>Previous</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>1</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>2</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>3</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>4</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>5</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>6</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>7</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-blue-500 text-white'>8</button>
                    <button className='w-6 h-7 rounded-md border-[1px] dark:border-gray-500 bg-white'>9</button>
                    <button className='w-12 h-7 rounded-md border-[1px] dark:border-gray-500 bg-blue-950 text-white'>Next</button>
                  </div>
                </div>
            </div>
          </div>
          {/* <!-- table section starts here  --> */}
        </div>

      </div>
  )
}

export default UserDetail