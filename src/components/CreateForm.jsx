import React from 'react'
import Navbar from './Navbar'
import DateTime from './DateTime'
import Sidebar from './Sidebar'
import nepal from '../images/nepal.png'
const CreateForm = () => {
    return (
        <div className='flex '>
        <Sidebar />
        <div className=''>
          <Navbar />
          <DateTime />
          {/* {/* <!-- Form section starts here  -->  */} 
                <div class="px-5 py-5  ">
                    <div class=" rounded-md  bg-white dark:bg-gray-700  font-poppins">
                        <div class="border-b dark:text-white border-b-gray-100 px-5 py-2  font-semibold text-lg">
                            <h2>Create New User</h2>
                        </div>

                        <div class="p-5 flex flex-col md:flex-row">
                            <div class="text-left font-normal text-[10px] lg:text-xs w-[65%]">
                                <div>
                                    <h2 class=" dark:text-white text-gray-950">Create a brand new user and add them
                                        to the user list
                                    </h2>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-32 py-5 dark:text-slate-300 text-blue-950 ">
                                    <label class="text-left p-1" for="name">User Name</label>
                                    <input class="  w-96 h-8 border-[1px] p-2 focus:outline-none border-gray-400"
                                        type="text"/>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-40 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Email</label>
                                    <input class="w-96 h-8 border-[1px] p-2 focus:outline-none border-gray-400"
                                        type="text"/>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-32 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">First Name</label>
                                    <input class="w-96 h-8 border-[1px] p-2 focus:outline-none border-gray-400"
                                        type="text"/>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-32 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Last Name</label>
                                    <input class="w-96 h-8 border-[1px] p-2 focus:outline-none border-gray-400"
                                        type="text"/>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-32 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Date of Birth</label>
                                    <div class="flex gap-2">
                                        <div>
                                            <div class="relative">
                                                <input value="26"
                                                    class=" value:font-poppins value:font-regular value:text-sm w-14 h-8 border-[1px] p-3 focus:outline-none border-gray-400"
                                                    type="text"/>
                                                <svg class="w-3 h-3 absolute left-10 top-2 text-blue-950 fill-current"
                                                    viewBox="0 0 320 512">
                                                    <path
                                                        d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-400 text-center">DD</h2>
                                        </div>

                                        <div>
                                            <div class="relative">
                                                <input value="07"
                                                    class=" value:font-poppins value:font-regular value:text-sm w-14 h-8 border-[1px] p-3 focus:outline-none border-gray-400"
                                                    type="text"/>
                                                <svg class="w-3 h-3 absolute left-10 top-2 text-blue-950 fill-current"
                                                    viewBox="0 0 320 512">
                                                    <path
                                                        d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-400 text-center">MM</h2>
                                        </div>

                                        <div>
                                            <div class="relative">
                                                <input value="1983"
                                                    class=" value:font-poppins  value:font-regular value:text-sm w-14 h-8 border-[1px] p-3 focus:outline-none border-gray-400"
                                                    type="text"/>
                                                <svg class="w-3 h-3 absolute left-10 top-2 text-blue-950 fill-current"
                                                    viewBox="0 0 320 512">
                                                    <path
                                                        d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z" />
                                                </svg>
                                            </div>
                                            <h2 class="text-gray-400 text-center ">YYYY</h2>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="flex  flex-col lg:flex-row gap-2 lg:gap-28 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Phone Number</label>
                                    <input
                                        class="w-96 h-8 border-[1px] p-2 focus:outline-none dark:text-gray-900 border-gray-400"
                                        type="text"/>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-36 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Password</label>
                                    <input
                                        class="w-96 h-8 border-[1px] p-2 focus:outline-none dark:text-gray-900 border-gray-400"
                                        type="text"/>
                                </div>

                                <div class=" flex flex-col md:flex-row py-5 gap-4 dark:text-slate-300 text-blue-950">
                                    <div class="flex flex-col lg:flex-row lg:gap-36 gap-2">
                                        <label class="text-left p-1" for="name">User Role</label>

                                        <select
                                            class="font-poppins font-regular text-sm w-60 h-8 border-[1px] p-1 focus:outline-none border-gray-400"
                                            type="text">
                                            <option value="Administrator">Administrator</option>
                                            <option value="Administrator">Administrator</option>
                                            <option value="Administrator">Administrator</option>
                                            <option value="Administrator">Administrator</option>
                                            <option value="Administrator">Administrator</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button
                                            class="px-6 py-1 text-base font-poppins font-normal rounded-md bg-blue-500 text-white">
                                            Add Role
                                        </button>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-32 py-5 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1" for="name">Department</label>
                                    <select
                                        class="font-poppins font-regular text-sm w-60 h-8 border-[1px] p-1 focus:outline-none border-gray-400"
                                        type="text">
                                        <option value="Admin">Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>

                                <div
                                    class="flex flex-col lg:flex-row gap-2 lg:gap-16 py-10 dark:text-slate-300 text-blue-950">
                                    <label class="text-left p-1 " for="name">Send User Notification</label>
                                    <div class=" flex gap-4 pt-1">
                                        <input id="checkbox" class="w-4 h-4" type="checkbox"/>
                                        <label for="checkbox" class="">Send the new user an email about their
                                            account.</label>
                                    </div>
                                </div>

                                <div class="hidden md:block">
                                    <button
                                        class="p-1 rounded-md text-center bg-blue-600 text-white text-sm w-32 h-8 opacity-100 text-opacity-100">Submit</button>
                                </div>

                            </div>

                            <div class="w-35% flex flex-col gap-16 ">
                                <div
                                    class="border dark:border-slate-500 border-slate-300 bg-slate-100 dark:bg-gray-600 p-4 flex flex-col gap-4 mt-8">
                                    <h2 class=" text-gray-950 font-poppins font-semibold text-lg dark:text-white ">
                                        City
                                        Selection</h2>
                                    <div class=" flex flex-col gap-5">

                                        
                                        {/* <!-- country selection accordion starts here  -->  */}
                                        <div id="accordion-color" data-accordion="collapse"
                                            data-active-classes="">
                                            {/* <!-- accordion one  -->  */}
                                            <h2 id="accordion-color-heading-11">
                                                <button type="button"
                                                    class="border  bg-white  w-64 h-8 px-3 flex justify-between border-gray-200"
                                                    data-accordion-target="#accordion-color-body-11"
                                                    aria-expanded="true" aria-controls="accordion-color-body-11">
                                                    <div class=" flex gap-2">
                                                        <img class="w-5 " src={nepal} alt="nepal"/>
                                                        <h2 class="pt-1 font-inter font-normal  text-black text-base">
                                                            Kathmandu</h2>
                                                    </div>
                                                    <svg data-accordion-icon
                                                        class=" text-gray-600 fill-current w-4 h-4 mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-11" class="hidden"
                                                aria-labelledby="accordion-color-heading-11">
                                                {/* <!-- accordion 1 content  -->  */}
                                                <div>
                                                    <div class="pl-3 grid grid-cols-2">
                                                        <div>
                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class=" dark:text-white font-inter font-normal text-base pt-2   text-black">
                                                                    Kathmandu</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class=" dark:text-white font-inter font-normal text-base pt-2   text-black">
                                                                    Pokhara</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="dark:text-white font-inter font-normal text-base pt-2  text-black">
                                                                    Birgunj</h2>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2   text-black">
                                                                    Lalitpur</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2   text-black">
                                                                    Bhaktapur</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2  text-black">
                                                                    Biratnagar</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- accordion 1 content  -->  */}
                                            </div>
                                            {/* <!-- accordion one  -->  */}

                                            {/* <!-- accordion two  -->  */}
                                            <h2 id="accordion-color-heading-12">
                                                <button type="button"
                                                    class="border  bg-white  w-64 h-8 px-3 flex justify-between border-gray-200"
                                                    data-accordion-target="#accordion-color-body-12"
                                                    aria-expanded="true" aria-controls="accordion-color-body-12">
                                                    <h2 class="pt-1 font-inter font-normal  text-black text-base">
                                                        Select Location</h2>
                                                    <svg data-accordion-icon
                                                        class=" text-gray-600 fill-current w-4 h-4 mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-12" class="hidden"
                                                aria-labelledby="accordion-color-heading-12">
                                                {/* <!-- accordion 2 content  -->  */}
                                                <div>
                                                    <div class="pl-3 grid grid-cols-2">
                                                        <div>
                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class=" dark:text-white font-inter font-normal text-base pt-2   text-black">
                                                                    KTM</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class=" dark:text-white font-inter font-normal text-base pt-2   text-black">
                                                                    PKR</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="dark:text-white font-inter font-normal text-base pt-2  text-black">
                                                                    VIC</h2>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2   text-black">
                                                                    SA</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2   text-black">
                                                                    WA</h2>
                                                            </div>

                                                            <div class="flex gap-5">
                                                                <input class=" mt-2" type="checkbox"/>
                                                                <h2
                                                                    class="font-inter dark:text-white font-normal text-base pt-2  text-black">
                                                                    ACT</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* {/* <!-- accordion 2 content  -->  */} 
                                            </div>
                                            {/* {/* <!-- accordion two  -->  */}


                                        </div>
                                        {/* {/* <!-- country selection accordion ends here  -->  */} 

                                    </div>
                                </div>

                                <div class="flex flex-col gap-2 font-poppins  ">
                                    <h2 class="text-gray-950 dark:text-slate-100 font-semibold text-lg p-2">
                                        Assign Role In Place
                                    </h2>
                                    <div class="pl-3 flex gap-4">
                                        <input id="aus" type="checkbox"/>
                                        
                                        <label for="aus" class=" flex ml-2 text-sm font-normal dark:text-slate-400 text-black">
                                            <h1>Kathmandu</h1>
                                            <h1 class="text-blue-500">(5 locations)</h1>
                                        </label>
                                    </div>
                                    <div class="pl-3 flex gap-4">
                                        <input id="nepal" type="checkbox"/>
                                        
                                        <label for="nepal"
                                            class=" flex ml-2 text-sm font-normal dark:text-slate-400 text-black">Pokhara</label>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-2 font-poppins  ">
                                    <h2 class="text-gray-950 dark:text-slate-100 font-semibold text-lg p-2">
                                        Select Features / Assigned
                                    </h2>
                                    <div class="pl-3">
                                        <input id="selectall" type="checkbox"/>
                                        <label for="selectall"
                                            class="ml-2 text-lg font-semibold dark:text-slate-400 text-blue-950">Select
                                            All</label>
                                    </div>
                                    <div class="pl-3  font-normal text-sm dark:text-slate-400 text-blue-950">

                                        {/* {/* <!--  select Feature accordion starts here  -->  */}
                                        <div id="accordion-color" data-accordion="collapse"
                                            data-active-classes="bg-white">
                                            {/* <!-- accordion three  -->  */}
                                            <h2 id="accordion-color-heading-13">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between  border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-13"
                                                    aria-expanded="true" aria-controls="accordion-color-body-13">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Users Access
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-13" class="hidden"
                                                aria-labelledby="accordion-color-heading-13">
                                                {/* <!-- accordion 3 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Admin Users</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Admin Users</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Admin Users</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 3 content  -->  */}
                                            </div>
                                            {/* <!-- accordion three  -->  */}

                                             {/* <!-- accordion four  -->  */}
                                             <h2 id="accordion-color-heading-14">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between  border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-14"
                                                    aria-expanded="true" aria-controls="accordion-color-body-14">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            General Access
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-14" class="hidden"
                                                aria-labelledby="accordion-color-heading-14">
                                                {/* <!-- accordion 4 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">General Users</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">General Users</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">General Users</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 4 content  -->  */}
                                            </div>
                                            {/* <!-- accordion four  -->  */}

                                            {/* <!-- accordion five  -->  */}
                                            <h2 id="accordion-color-heading-15">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 pr-6 justify-between  mb-3 flex  border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-15"
                                                    aria-expanded="true" aria-controls="accordion-color-body-15">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Venues and Seats
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-15" class="hidden"
                                                aria-labelledby="accordion-color-heading-15">
                                                {/* <!-- accordion 5 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Venues and Seats</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Venues and Seats</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Venues and Seats</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 5 content  -->  */}
                                            </div>
                                            {/* <!-- accordion five  -->  */}


                                            {/* <!-- accordion six  -->  */}
                                            <h2 id="accordion-color-heading-16">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 pr-6 justify-between mb-3 flex  border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-16"
                                                    aria-expanded="true" aria-controls="accordion-color-body-16">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Event Shows
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-16" class="hidden"
                                                aria-labelledby="accordion-color-heading-16">
                                                {/* <!-- accordion 6 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Event Shows</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Event Shows</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Event Shows</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 6 content  -->  */}
                                            </div>
                                            {/* <!-- accordion six  -->  */}


                                            {/* <!-- accordion seven  -->  */}
                                            <h2 id="accordion-color-heading-17">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-17"
                                                    aria-expanded="true" aria-controls="accordion-color-body-17">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Marketing
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-17" class="hidden"
                                                aria-labelledby="accordion-color-heading-17">
                                                {/* <!-- accordion 7 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Marketing</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Marketing</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Marketing</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 7 content  -->  */}
                                            </div>
                                            {/* <!-- accordion seven  -->  */}


                                            {/* <!-- accordion eight  -->  */}
                                            <h2 id="accordion-color-heading-18">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-18"
                                                    aria-expanded="true" aria-controls="accordion-color-body-18">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Finance
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-18" class="hidden"
                                                aria-labelledby="accordion-color-heading-18">
                                                {/* <!-- accordion 8 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Finance</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Finance</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Finance</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 8 content  -->  */}
                                            </div>
                                            {/* <!-- accordion eight  -->  */}


                                            {/* <!-- accordion nine  -->  */}
                                            <h2 id="accordion-color-heading-19">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-19"
                                                    aria-expanded="true" aria-controls="accordion-color-body-19">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Pages
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-19" class="hidden"
                                                aria-labelledby="accordion-color-heading-19">
                                                {/* <!-- accordion 9 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Pages</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Pages</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Pages</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 9 content  -->  */}
                                            </div>
                                            {/* <!-- accordion nine  -->  */}

                                            {/* <!-- accordion ten  -->  */}
                                            <h2 id="accordion-color-heading-110">
                                                <button type="button"
                                                class="w-64 h-10 pt-1 mb-3 flex pr-6 justify-between border-b border-b-gray-400"
                                                    data-accordion-target="#accordion-color-body-110"
                                                    aria-expanded="true" aria-controls="accordion-color-body-110">
                                                    <div class="flex gap-3">
                                                        <input type="checkbox"/>
                                                        <label class="pt-2 ">
                                                            Customer Support
                                                        </label>
                                                    </div>
                                                    <svg data-accordion-icon
                                                    class="w-4 h-4 text-gray-600 fill-current mt-2 " height="1em"
                                                        viewBox="0 0 512 512">
                                                        <path
                                                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                    </svg>
                                                </button>
                                            </h2>

                                            <div id="accordion-color-body-110" class="hidden"
                                                aria-labelledby="accordion-color-heading-110">
                                                {/* <!-- accordion 10 content  -->  */}
                                                <div class="sublist ">
                                                    <ul class="pl-7  ">
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Customer Support</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Customer Support</label>
                                                        </li>
                                                        <li class="mb-2">
                                                            <input type="checkbox"/>
                                                            <label class="pl-2">Customer Support</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- accordion 10 content  -->  */}
                                            </div>
                                            {/* <!-- accordion ten  -->  */}


                                        </div>

                                        {/* <!--  select Feature accordion ends here  -->  */}
                                    </div>
                                </div>
                                <div class="block md:hidden">
                                    <button
                                        class="p-1 rounded-md text-center bg-blue-600 text-white text-sm w-32 h-8 opacity-100 text-opacity-100">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Form section starts here  -->  */}</div>
          
          </div>
  )
}

export default CreateForm