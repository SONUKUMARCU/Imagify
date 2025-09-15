import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='flex max-sm:flex-col gap-4 text-sm sm:text-xl md:flex-row justify-between items-center mt-24 pt-6 pb-4 md:px-28 mx-auto w-full'>
            <div className='flex gap-10 items-center'>
                <img src={assets.logo} alt=""/>
                <p className='border-l border-gray-400 pl-8 text-gray-600'>All right reserved. Copyright @imagify</p>
            </div>
            <div className='flex gap-2'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
            </div>
        </div>
    )
}

export default Footer
