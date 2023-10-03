import React from 'react'
import logo2 from '../images/logo2.png';
import index from '../images/index.png';
import { Link } from '@mui/material';

const Login = () => {
    const mystyle = {
        clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
    };

    return (

        <div>

            <div class="flex  ml-auto mr-auto ">

                <div class="w-full h-screen relative justify-center  bg-gray-900 flex shrink">
                    <div style={mystyle} class=" flex flex-col justify-between py-10 absolute left-0 top-0 h-screen w-[30%] bg-black">
                        <div class="flex justify-center ">
                            <img className='w-40 h-40 my-2 ' src={logo2} alt='' />
                        </div>
                        <div class="">
                            <img class="opacity-90" src={index} alt="" />
                        </div>
                    </div>
                    <div class="mt-44 ml-60 flex flex-col gap-4">
                        <h2 class="font-poppins text-slate-100 text-center text-2xl font-semibold">Sign in your account</h2>
                        <div class="flex flex-col gap-1">
                            <label class=" text-slate-100 font-poppins text-sm font-semibold" for="">Email</label>
                            <input placeholder="demo@example.com" class="py-2 font-normal text-sm font-poppins w-96 px-4 rounded-md shadow shadow-black placeholder:text-sm  placeholder:font-poppins placeholder:font-normal" type="text" />
                        </div>
                        <div class="flex flex-col gap-1">
                            <label class=" text-slate-100 font-poppins text-sm font-semibold" for="">Password</label>
                            <input placeholder="********" class="py-2 w-96 px-4 rounded-md shadow shadow-black font-normal text-sm font-poppins" type="text" />
                        </div>
                        <div class="flex gap-2">
                            <input class="mt-[2px]  accent-black w-4 h-4  " id="remember" type="checkbox" />
                            <label class=" text-slate-100 font-poppins font-normal text-sm " for="remember">Remember my preference</label>
                        </div>
                        <Link href="/Dashboard">
                            <button className="mt-2 bg-black hover:bg-slate-800 w-full py-3 font-poppins font-semibold text-white text-sm rounded-md">
                                Sign In
                            </button>
                        </Link>

                        <p> <a class="font-poppins font-normal text-sm hover:text-gray-400 text-white" href="#">Forgot Password?</a></p>

                    </div>
                </div>
            </div>
            </div>
    )
}

export default Login