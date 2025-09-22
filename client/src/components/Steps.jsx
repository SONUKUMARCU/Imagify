import React from 'react'
import { stepsData } from "../assets/assets"
import { motion } from 'motion/react'

const Steps = () => {

    return (
        <div className='flex flex-col items-center justify-center my-32'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
            <p className='text-lg text-gray-600 sm:text-md mb-8'>Transform Words Into Stunning Images</p>

            <div className='space-y-4 w-full max-w-3xl text-sm'>
                {
                    stepsData.map((item,index)=>(
                        <motion.div 
                            className='flex items-center gap-4 max-sm:py-2 max-sm:px-4 py-5 px-8 bg-white/20 border shadow-md border-gray-300 cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg' key={index}
                            initial={index % 2 === 0 ? {opacity : 0,x : -150} : {opacity : 0, x : 150}}
                            animate={index % 2 === 0 ? {opacity : 1,x : 0} : {opacity : 1, x : 0}}
                            transition={{delay : 0.2, duration : 1.5}}
                        >
                            <img width={40} src={item.icon} alt="" />
                            <div>
                                <h1 className='text-xl font-medium'>{item.title}</h1>
                                <p className='text-gray-500'>"{item.description}"</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Steps
