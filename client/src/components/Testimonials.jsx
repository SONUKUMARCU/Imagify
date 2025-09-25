import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'motion/react'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center my-24 py-6 md:px-28 mx-auto'>
            <motion.h1 
                className='text-3xl sm:text-4xl font-semibold mb-2'
                initial={{opacity : 0, y: -50}}
                whileInView={{opacity : 1, y: 0}}
                transition={{delay : 0.4,duration : 0.6}}
                viewport={{once: true}}
            >Customer testimonials</motion.h1>
            <motion.p 
                className='text-gray-500 mb-8'
                initial={{opacity : 0, y: -50}}
                whileInView={{opacity : 1, y: 0}}
                transition={{delay : 0.4,duration : 0.6}}
                viewport={{once: true}}
            >What Our Users Are Saying</motion.p>

            <div className='mt-5 flex justify-center flex-wrap gap-4'>
                {
                    testimonialsData.map((item,index)=>(
                        <motion.div 
                            key={index} className='bg-white/20 border-1 border-gray-300 w-80 flex flex-col items-center p-8 rounded-md hover:scale-[1.02] transition-all duration-300 cursor-pointer'
                            initial={index === 0 ? {opacity : 0,x : -150} : index === 1 ? {opacity : 0, y : 150} : {opacity : 0,x : 150}}
                            whileInView={index === 0 ? {opacity : 1,x : 0} : index === 1 ? {opacity : 1, y : 0} : {opacity : 1,x : 0}}
                            viewport={{once : true}}
                            transition={{delay : 0.3,duration : 0.6}}
                        >
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
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials
