import React, { useState } from 'react'
import { assets } from "../assets/assets"
import { Link,useNavigate} from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {user} = useAppContext();

    const navigate = useNavigate();

    return (
        <div className='flex justify-between items-center py-4'>
            <Link to="/">
                <img src={assets.logo} alt="" />
            </Link>
            <div className='flex gap-6 items-center'>
                {
                    user ? (
                        <div className='flex items-center gap-2 sm:gap-3'>
                            <button 
                                className='flex gap-2 items-center bg-[#D7EBFF] px-4 py-1.5 sm:px-6 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'
                                onClick={()=> navigate("/buy")}
                            >
                                <img src={assets.credit_star} alt="creditstar"/>
                                <p className='text-gray-600 text-xs sm:text-sm font-medium'>Credits left:50</p>
                            </button>
                            <p className='text-gray-600 max-sm:hidden'>Hi! Sonu</p>
                            <div className='relative group'>
                                <img className='w-10 drop-shadow' src={assets.profile_icon} alt="profileicon" />
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                                    <ul className='m-0 bg-white p-2 text-sm rounded-md'>
                                        <li className='hover:text-blue-400 cursor-pointer py-1 px-2 pr-10'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2 sm:gap-5'>
                            <p onClick={()=> navigate("/buy")} className='text-gray-600 cursor-pointer'>Pricing</p>
                            <button className='px-15 py-2 rounded-full cursor-pointer bg-zinc-900 text-white'>
                                Login
                            </button> 
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
