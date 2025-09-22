import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react"

const Header = () => {

    const navigate = useNavigate();

    return (
        <motion.div
            className='flex flex-col items-center mt-10'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className='text-gray-600 text-sm border-gray-400 border-1 rounded-full flex items-center gap-2 px-6 py-1 w-fit mt-10 bg-white'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt="" />
            </motion.div>

            <motion.h1
                className='mt-10 text-4xl max-w-[300px] mx-auto text-center sm:text-7xl sm:max-w-[590px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
            >
                Turn text to <span className='text-blue-600'>image</span>, in seconds.
            </motion.h1>

            <motion.p
                className='mx-auto mt-5 text-gray-600 max-w-xl text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.</motion.p>

            <motion.button
                className='mt-8 mx-auto px-12 py-2.5 rounded-full cursor-pointer bg-black text-white flex items-center gap-2 w-auto'
                onClick={() => navigate("/result")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            >
                <span className='sm:text-lg text-gray-200'>Generate Images</span>
                <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <div className='mt-16 flex flex-wrap gap-3'>
                {
                    Array(6).fill('').map((item, index) => (
                        <img
                            src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
                            width={70}
                            key={index}
                            className='rounded-md hover:scale-105 transition-all duration-200 cursor-pointer max-sm:w-10'
                            alt=''
                        />
                    ))
                }
            </div>
            <p className='text-gray-600 mx-auto text-center mt-2 max-sm:text-sm'>Generated images from imagify</p>
        </motion.div>
    )
}

export default Header
