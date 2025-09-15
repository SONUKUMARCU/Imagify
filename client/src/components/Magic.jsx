import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Magic = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center my-24 py-6 md:px-28 mx-auto'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>See the magic. Try now</h1>
            <button 
                className='mt-8 mx-auto px-12 py-2.5 rounded-full cursor-pointer bg-black text-white flex items-center gap-2 w-auto'
                onClick={()=> navigate("/result")}
            >
                <span className='sm:text-lg text-gray-200'>Generate Images</span>
                <img className='h-6' src={assets.star_group} alt="" />
            </button>
        </div>
    )
}

export default Magic
