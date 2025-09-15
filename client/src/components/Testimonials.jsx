import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center my-24 py-6 md:px-28 mx-auto'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
            <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

            <div className='mt-5 flex justify-center flex-wrap gap-4'>
                {
                    testimonialsData.map((item,index)=>(
                        <div key={index} className='bg-white/20 border-1 border-gray-300 w-80 flex flex-col items-center p-8 rounded-md hover:scale-[1.02] transition-all duration-300 cursor-pointer'>
                            <img src={item.image} alt="" className='mb-2 w-15'/>
                            <h1 className='text-xl text-gray-800 font-medium'>{item.name}</h1>
                            <p className='text-sm text-gray-700 mb-2'>{item.role}</p>
                            <span className='flex mb-2'>
                                {
                                    new Array(item.stars).fill(0).map((val,index)=>(
                                        <img key={index} src={assets.rating_star}/>
                                    ))
                                }
                            </span>
                            <p className='text-gray-500 text-center'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials
