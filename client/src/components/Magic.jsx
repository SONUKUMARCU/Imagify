import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Magic = () => {


    const navigate = useNavigate();
    const { user,setShowLogin } = useAppContext();


    const handleClickEvent = ()=>{
        if(user) navigate("/result");
        else setShowLogin(true)
    }


    return (
        <motion.div
            initial={{ opacity: 0, y : 40}}
            whileInView={{ opacity: 1, y : 0}}
            transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
            className='flex flex-col items-center justify-center my-24 py-6 md:px-28 mx-auto'>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>See the magic. Try now</h1>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href='#header'
                className='mt-8 mx-auto px-12 py-2.5 rounded-full cursor-pointer bg-black text-white flex items-center gap-2 w-auto'
                onClick={handleClickEvent}
            >
                <span className='sm:text-lg text-gray-200'>Generate Images</span>
                <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>
        </motion.div>
    )
}

export default Magic
