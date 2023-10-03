
import React, { useEffect } from 'react';
import profile from '../images/profile.jpg';
import badge from '../images/badge.png';
import star from '../images/star.png';
import GreenButton from './CreateButton';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import LittleMermaid from '../images/LittleMermaid.jpg';
import DateTime from './DateTime';
import { Button } from '@mui/material';
const CustomerDetail = () => {
    useEffect(() => {
      // Tab functionality
      const tabs = Array.from(document.querySelectorAll("[id^='tab']"));
      const tabContents = Array.from(document.querySelectorAll("[id^='tabContent']"));
  
      tabs.forEach(tab => {
        tab.addEventListener("click", function() {
          // Hide all tab contents
          tabContents.forEach(content => {
            content.classList.add("hidden");
          });
    
            // Remove active class from all tabs
            tabs.forEach(tab => {
                tab.classList.remove("bg-blue-950");
                tab.classList.remove("text-white");
                tab.classList.add("bg-white");
                tab.classList.add("text-blue-950");
                tab.classList.add("border-blue-950");
              });
      
              // Show the selected tab content
              const tabId = this.getAttribute("id");
              const tabContentId = tabId.replace("tab", "tabContent");
              const tabContent = document.getElementById(tabContentId);
              tabContent.classList.remove("hidden");
      
              // Add active class to the selected tab
              this.classList.add("bg-blue-950");
              this.classList.add("text-white");
              this.classList.remove("bg-white");
              this.classList.remove("text-blue-950");
              this.classList.remove("border-white");
            });
          });
        }, []);
      
        return (
    
  
        <div>

            <div className='flex '>
        
           
            <Sidebar />
            <div className='bg-gray-100'>
                <Navbar />
                <DateTime />

                {/* user detail  */}
                <div className="px-9 py-5  flex justify-between flex-col md:flex-row lg:grid lg:grid-cols-2 lg:gap-[300px]">

                    <div className="flex gap-2">

                        <div
                            className="w-[40%] flex flex-col text-center text-cyan-950 dark:text-cyan-700 font-poppins font-normal text-sm ">

                            <img className=" border-2 border-white shadow-md m-1 w-36 h-36 rounded-full"
                                src={profile} alt="" />
                            <h2 className="my-1 text-left ml-6">Profile update </h2>
                            <h2 className="text-left ml-9"> 12/10/2021</h2>
                            <div className="flex">
                                <button className=" ml-2 w-32 p-1 mt-1 rounded-md text-white bg-green-500 text-xs">Account
                                    Details</button>
                                <button className="relative mb-3">
                                    <svg className=" w-4 h-4 dark:text-slate-300 text-gray-500" fill="none"
                                        stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                                        </path>
                                    </svg>
                                    <div className="absolute inline-flex items-center justify-center w-3 h-3 text-[8px]  font-normal text-white bg-red-500  rounded-full -top-1 -right-1 ">2</div>
                                </button>
                            </div>


                        </div>

                        <div className="flex flex-col gap-2 pt-3 font-poppins text-[#171725] dark:text-gray-300">
                            <div className="flex gap-3">
                                <div>
                                    <h2 className="font-semibold text-lg">Taylor</h2>
                                    <div className="ml-1 border-2 border-blue-500 w-12 "></div>
                                </div>
                                <h2 className="font-semibold text-lg  ">Swift</h2>
                            </div>
                            <div className="flex text-sm pl-1 gap-1">
                                <label className="font-semibold">Email :</label>
                                <h2> user@hotmail.com</h2>
                            </div>
                            <div className="flex text-sm pl-1 gap-1 ">
                                <label className="font-semibold">Phone :</label>
                                <h2> +977 987456321</h2>
                            </div>
                            
                            <div className="flex text-sm pl-1 gap-1">
                                <label className="font-semibold">Status :</label>
                                <button className=" ml-2 w-16 p-1  rounded-md text-white bg-green-500 text-xs">
                                    Active</button>
                            </div>
                        </div>
                    </div>

                    <div className=" relative pt-5 mt-10 md:mt-0  ">
                        <img className="absolute top-0 left-0 md:left-4 w-16 h-16" src={badge} alt="" />
                        <div className="flex flex-col gap-2 ml-5 md:ml-9  ">

                            <div className="flex flex-col gap-4">
                                <div
                                    className="   rounded-2xl h-20 bg-blue-950 dark:bg-blue-900 text-white text-center p-4 shadow-md font-poppins font-normal">
                                    <h2 className="text-lg ">Member</h2>
                                    <h2 className="text-base">Since 12 October, 2021</h2>
                                </div>

                                <div
                                    className="  h-6 flex text-center text-xs text-white border-2 dark:border-blue-900 border-blue-950 font-sans font-semibold ">
                                    <div className=" h-[22px] w-[30%] bg-blue-950 dark:bg-blue-900 ">
                                        <h2>20 / 50</h2>
                                    </div>
                                    <div className=" h-6 ml-10 dark:text-blue-800 text-blue-950">
                                        <h2>30 / 50</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-center font-sans font-semibold dark:text-gray-300 ">
                                <h2>You are 30 points away to get exclusive offer.</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-poppins dark:text-gray-300">
                                <div className=" h-11 p-1 text-center border-dotted border-2 border-[#707070]">
                                    <h2 className="text-xs font-semibold">Point Balance</h2>
                                    <h2 className="text-xs font-normal">250</h2>
                                </div>
                                <div className=" h-11 p-1 text-center border-dotted border-2 border-[#707070]">
                                    <h2 className="text-xs font-semibold"> Total Booking </h2>
                                    <h2 className="text-xs font-normal">3</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* user detail  */}

                {/* table section */}

                <div className="px-9 py-5 ">
                    <div className="bg-white dark:bg-gray-700 flex flex-col py-5 pl-5 ">

                        {/* topic section  */}
                        <div className="flex flex-col md:flex-row justify-between mb-8 mr-8">
                            <h2
                                className=" hidden  md:block text-lg text-black font-inter font-semibold dark:text-gray-100 ">
                                 History</h2>
                            <div className="flex md:hidden justify-between">
                                <h2 className="  text-lg text-black font-inter font-semibold dark:text-gray-100">
                                    History </h2>

                                <div className=" block md:hidden gap-3">
                                    <div className=" relative ">
                                        <input
                                            className="placeholder:font-poppins font-normal  placeholder:text-xs pb-1 pl-3  border-[1px] dark:border-gray-500 border-gray-900 rounded-lg h-8 text-left  shadow-sm  focus:outline-none"
                                            type="search" placeholder="    Search..." />
                                        <svg className="  absolute left-2 bottom-2  h-3 w-3 text-gray-400 fill-current "
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>



                            {/* search section  */}
                            <div className="flex justify-between  md:gap-16 mt-4 md:mt-0">

                                <div className=" hidden gap-3">
                                    <div className=" relative ">
                                        <input
                                            className="placeholder:font-poppins font-normal  placeholder:text-xs pb-1 pl-3  border-[1px] dark:border-gray-500 border-gray-900 rounded-lg h-8 text-left  shadow-sm  focus:outline-none"
                                            type="search" placeholder="    Search..." />
                                        <svg className="  absolute left-2 bottom-2  h-3 w-3 text-gray-400 fill-current "
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className=" hidden  md:flex gap-3">
                                    <div className=" relative ">
                                        <input
                                            className="placeholder:font-poppins font-normal  placeholder:text-xs pb-1 pl-3  border-[1px] dark:border-gray-500 border-gray-900 rounded-lg h-8 text-left  shadow-sm  focus:outline-none"
                                            type="search" placeholder="    Search..." />
                                        <svg className="  absolute left-2 bottom-2  h-3 w-3 text-gray-400 fill-current "
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </div>
                                    <button
                                        className=" h-8 px-3 font-poppins font-normal text-xs text-white rounded-md bg-blue-600 shadow-md">
                                        Search
                                    </button>
                                </div>

                                <div
                                    className="font-mulish font-semibold text-xs text-black grid grid-flow-col mt-0 gap-[2px]">
                                    <button
                                        className=" p-1 h-8 bg-white  shadow-md border-[1px] dark:border-gray-500 rounded-md">Copy</button>
                                    <button
                                        className=" p-1 h-8 bg-white  shadow-md border-[1px] rounded-md">Excel</button>
                                    <button
                                        className=" p-1 h-8 bg-blue-700 text-white  shadow-md rounded-md">CSV</button>
                                    <button
                                        className=" p-1 h-8 bg-white  shadow-md border-[1px] rounded-md">PDF</button>
                                </div>
                            </div>
                            {/* search section  */}


                        </div>
                        {/* topic section  */}

                        {/* <!-- tabs  --> */}
                        <div className=" flex flex-wrap gap-3 font-mulish font-semibold text-xs text-indigo-950 mb-8">
                            <button id="tab1" className="buttonLinked bg-blue-950 text-white border-blue-950">Booking History </button>
                            <button id="tab2" className="buttonLinked bg-white text-blue-950  ">Payment /
                                Wallet </button>
                            <button id="tab3" className="buttonLinked bg-white text-blue-950 ">Favourite </button>
                            <button id="tab4" className="buttonLinked bg-white text-blue-950"> Ratings &
                                Review</button>
                        </div>
                        {/* <!-- tabs  -->  */}

                        {/* <!-- booking history /userdetail content starts here --> */}
                            <div id="tabContent1" className="w-full overflow-auto  ">
                                <div className="bg-white dark:bg-gray-700 flex flex-col py-5  ">
                                     <table className="min-w-full ">
                                    <thead>
                                        <tr>
                                            <th
                                                className=" px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900  dark:border-r-gray-500 dark:text-gray-100 border-r-[1px]">
                                                <div className="flex justify-between">
                                                    <h2>Purchase Date</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className=" px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px]">
                                                <div className="flex justify-between">
                                                    <h2>Time</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px]">

                                                <div className="flex justify-between">
                                                    <h2>Movie Name</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px]">
                                                <div className="flex justify-between">
                                                    <h2> Venue Address</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px]">
                                                <div className="flex justify-between">
                                                    <h2> Number of Ticket</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px] ">
                                                <div className="flex justify-between">
                                                    <h2>Price</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px] ">
                                                <div className="flex justify-between">
                                                    <h2>Points</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px] ">
                                                <div className="flex justify-between">
                                                    <h2>Credit</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:border-r-gray-500 dark:text-gray-100 border-r-[1px] ">
                                                <div className="flex justify-between">
                                                    <h2>Status</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th
                                                className="px-1 py-2 text-left text-xs font-semibold font-poppins text-blue-950 dark:text-gray-100">
                                                <div className="flex justify-between">
                                                    <h2>Action</h2>
                                                    <svg className="w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current "
                                                        viewBox="0 0 320 512">
                                                        <path
                                                            d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-left text-xs font-medium font-poppins text-gray-900 py-1 ">
                                                18/10/2023 </td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                6:00 PM</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                Little Mermaid</td>
                                            <td
                                                className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-blue-500 py-1 ">
                                                Venue Address</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-center font-medium font-poppins text-gray-900 py-1 ">
                                                5</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                Rs 150</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                10</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                Rs 750</td>
                                            <td
                                                className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-green-500 py-1 ">
                                                Complete</td>
                                            <td
                                                className="px-1 dark:text-slate-300 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 ">
                                                Can you please send me ticket.....</td>
                                        </tr>

                                        <tr className="bg-white dark:bg-gray-700">
                                            <td
                                                className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                            </td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td
                                                className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                        </tr>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-700">
                                            <td
                                                className="px-1 border-r-[1px]  border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td
                                                className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                        </tr>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-700">
                                            <td
                                                className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                            </td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td
                                                className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                        </tr>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-700">
                                            <td
                                                className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                            </td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td
                                                className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                        </tr>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-700">
                                            <td
                                                className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                            </td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td
                                                className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 ">
                                            </td>
                                        </tr>
                                        <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                            <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                               
                            </div>
                            {/* <!-- booking history /userdetail content ends here --> */}

                            {/* <!-- payment/wallet content starts here  --> */}
                            <div id="tabContent2" className="hidden ">
                                <div className="bg-white dark:bg-gray-700 flex flex-col py-5 p-5 ">
                                    <div className=" flex gap-3 font-mulish font-semibold text-sm text-indigo-950 mb-8">
                                    <button className="bg-white  w-24 h-9 border-none ">Card Details</button>
                                    <button className="bg-blue-950  w-20 h-9  rounded-sm  text-white">My Credit</button>
                                    </div>

                                    <div className="w-full overflow-auto">
                                        <table className="min-w-full ">
                                            <thead>
                                                <tr>
                                                    <th  className="px-2 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:text-gray-100 dark:border-r-gray-500  border-r-[1px]  ">
                                                        <div className="flex justify-between">
                                                            <h2>Date</h2>
                                                                <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                                <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                                </svg>
                                                        </div>
                                                    </th>
                                                    <th className=" px-2 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:text-gray-100 dark:border-r-gray-500 border-r-[1px]">
                                                        <div className="flex justify-between">
                                                            <h2>Time</h2>
                                                                <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                                <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                                </svg>
                                                        </div>
                                                    </th>
                                                    <th className="px-2 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:text-gray-100 dark:border-r-gray-500 border-r-[1px]">
                                                        <div className="flex justify-between">
                                                           <h2> Credit Balance</h2>
                                                            <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                            </svg>
                                                        </div>
                                                    </th>
                                                    <th className="px-2 py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:text-gray-100 dark:border-r-gray-500 border-r-[1px]">
                                                        <div className="flex justify-between">
                                                            <h2>Credit Used</h2>
                                                            <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                            </svg>
                                                        </div>
                                                    </th>
                                                    <th className="px-2  py-2 text-left text-xs font-semibold font-poppins text-gray-900 dark:text-gray-100 dark:border-r-gray-500 border-r-[1px]">
                                                        <div className="flex justify-between">
                                                            <h2 className="pr-48">Movie Name</h2>
                                                            <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                            </svg>
                                                        </div>
                                                    </th>
                                                    <th className="px-2 py-2 text-left text-xs font-semibold font-poppins dark:text-gray-100 dark:border-r-gray-500 text-gray-900  ">
                                                        <div className="flex justify-between">
                                                            <h2>Status</h2>
                                                            <svg className= " w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                            <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                            </svg>
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
        
                                            <tbody>
                                                <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                    <td
                                                        className="px-1 border-[1px] text-left text-xs  font-medium font-poppins dark:border-gray-500 dark:text-slate-300 text-gray-900 py-1 ">
                                                        <h1>18/10/2023</h1>
        
                                                    </td>
                                                    <td
                                                        className="px-1 border-[1px] text-xs dark:border-gray-500 text-left font-medium font-poppins dark:text-slate-300 text-gray-900 py-1 ">
                                                        6:00 PM</td>
                                                    <td
                                                        className="px-1 border-[1px] text-xs dark:border-gray-500 text-left font-medium font-poppins dark:text-slate-300 text-gray-900 py-1 ">
                                                        Rs 150</td>
                                                    <td
                                                        className="px-1 border-[1px] text-xs dark:border-gray-500 text-left font-medium font-poppins dark:text-slate-1500 text-gray-900 py-1 ">
                                                        Rs 150</td>
                                                    <td
                                                        className="px-1 border-[1px] text-xs dark:border-gray-500 text-left font-medium font-poppins dark:text-slate-300 text-gray-900 py-1 ">
                                                        Little Mermaid</td>
                                                    <td
                                                        className="px-1 border-[1px] text-xs  dark:border-gray-500 text-left font-medium font-poppins text-green-500 py-1 ">
                                                        Complete</td>
                                                    
                                                </tr>
        
                                                <tr className="bg-white  dark:bg-gray-700">
                                                    <td className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    
                                                    <td className="px-1 border-l-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                </tr>
                                                <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px]  dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px]  dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-700">
                                                    <td className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-l-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                </tr>
                                                <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-700 ">
                                                    <td className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-l-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                </tr>
                                                <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-700">
                                                    <td className="px-1 border-r-[1px]  dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-l-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                </tr>
                                                <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                </tr>
                                                <tr className="bg-white dark:bg-gray-700">
                                                    <td className="px-1 border-r-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-l-[1px] dark:border-gray-500 border-t-[1px] border-b-[1px] text-xs py-3 ">
                                                    </td>
                                                </tr>
                                                <tr className="bg-white odd:bg-gray-100  odd:dark:bg-gray-800">
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] text-xs dark:border-gray-500 py-3 "></td>
                                                    <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>
                            {/* <!-- payment/wallet content ends here  --> */}

                            {/* <!-- favourite content starts here --> */}
                            <div id="tabContent3" className="hidden">
                                <div className="bg-white dark:bg-gray-700 flex flex-col py-5 p-5 ">
                                     <section>
                                <div className="mb-16">
                                    <h2 className=" font-semibold font-poppins text-lg dark:text-slate-100 text-gray-950 pb-4">Movies</h2>
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className="w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>
                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className=" w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>

                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className=" w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>

                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className=" w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            


                              <section>
                                <div>
                                    <h2 className=" font-semibold font-poppins text-lg dark:text-slate-100 text-gray-950 pb-4">Events</h2>
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className=" w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>
                                        <div className="rounded-md  shadow-xl border bg-white p-1 flex flex-col ">
                                            <div className="mb-1">
                                                <img className=" w-[168px] h-90  rounded-lg" src={LittleMermaid} alt=""/>
                                            </div>
                                            <div className="text-center font-inter mb-3">
                                                <h2 className="font-bold text-sm">Little Mermaid</h2>
                                                <h2 className="font-normal text-xs"> Fantasy/Musical</h2>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                                </div>
                           
                           
                            </div>
                           {/* <!-- favourite content ends here  --> */}


                            {/* <!-- ratings and review content starts here --> */}
                            <div id="tabContent4" className="hidden ">
                                <div className="bg-white dark:bg-gray-700 flex flex-col py-5 p-5 ">
                                     <div className="w-full overflow-auto">
                                    <table className="min-w-full">
                                        <thead>
                                          <tr>
                                           
                                            <th className="px-4 py-2 text-left text-xs font-semibold font-poppins text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500" >
                                              
                                              <div className="flex justify-between"> 
                                                <h2>Movie Name</h2>
                                                <svg className= "w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </div>
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-semibold font-poppins text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500" >
                                                <div className="flex justify-between"> 
                                                    <h2> Date & Time</h2>
                                                    <svg className= "w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                            <th className="px-4 py-2 text-left text-xs font-semibold font-poppins text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500" >
                                                <div className="flex justify-between"> 
                                                    <h2>Rating</h2>
                                                    <svg className= "w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                          
                                            <th  className="px-4 py-2 text-left text-xs font-semibold font-poppins text-gray-900 border-r-[1px] dark:text-gray-100 dark:border-r-gray-500 " >
                                                <div className="flex justify-between"> 
                                                    <h2>Action</h2>
                                                    <svg className= "w-3 h-3 text-cyan-950 dark:text-cyan-700 fill-current " viewBox="0 0 320 512">
                                                    <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                    </svg>
                                                </div>
                                            </th>
                                           
        
                                          </tr>
                                        </thead>
        
                                        <tbody>
                                            <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                              <td className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  ">Little Mermaid</td>
                                              <td className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  ">01/10/2023 &nbsp;   08:16 PM</td>
                                              
                                              <td className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  ">
                                              
                                              <div className='flex gap-1'>
                                                <img className="h-4 w-4 " src={star} alt="" />
                                                <img className="h-4 w-4 " src={star} alt="" />
                                                <img className="h-4 w-4 " src={star} alt="" />
                                                <img className="h-4 w-4 " src={star} alt="" />
                                                <img className="h-4 w-4 " src={star} alt="" />
                                                </div>
                                              </td>
                                              <td className="px-1 border-[1px] dark:border-gray-500 text-xs text-left font-medium font-poppins text-gray-900 py-1 dark:text-slate-300  ">
                                                <div className="flex gap-2 ml-10">
                                                    <button className="p-1 bg-green-500 flex gap-1 rounded-sm ">
                                                        <svg className="w-4 h-4 text-slate-100 fill-current" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                                                        <h2 className="text-white font-mulish font-bold text-xs ">Edit</h2>
                                                    </button>
                                                    <button className="p-1 bg-red-600 flex gap-1 rounded-sm ">
                                                        <svg className="w-4 h-4  text-slate-100 fill-current " viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
                                                        <h2 className="text-white font-mulish font-bold text-xs ">Delete</h2>
                                                    </button>
                                                  </div>
                                              </td>
                                            </tr>
                                            
                                            <tr className="bg-white dark:bg-gray-700">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white dark:bg-gray-700">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td> 
                                                <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white dark:bg-gray-700">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td> 
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white dark:bg-gray-700">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td> 
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white dark:bg-gray-700">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td> 
                                                <td className="px-1 border-l-[1px] border-t-[1px] dark:border-gray-500 border-b-[1px] text-xs py-3 "></td>
                                              </tr>
                                              <tr className="bg-white odd:bg-gray-100 odd:dark:bg-gray-800">
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td>
                                                <td className="px-1 border-[1px] dark:border-gray-500 text-xs py-3 "></td> 
                                                <td className="px-1 border-[1px] dark:border-gray-500  text-xs py-3 "></td>
                                              </tr>
                                          </tbody>
                                    </table>
                                </div>
                                </div>
                               
                            </div>
                           {/* <!-- ratings and review content starts here  --> */}
                    </div>
                </div>


            </div>
        </div>
        </div>
        

    )
}

export default CustomerDetail