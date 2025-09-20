import React from 'react'
import { plans,assets} from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const BuyCredit = () => {
    return (
        <div className='flex-grow mt-10'>
            <h3 className='uppercase bg-white border-1 border-gray-200 rounded-full px-10 py-2 w-fit mx-auto mt-5'>OUR plans</h3>
            <h1 className="text-3xl text-center mt-5">Choose the plan</h1>
            <div className='flex flex-wrap mt-5 gap-6 sm:flex-row justify-center sm:mt-10'>
                {
                    plans.map((item,index) => (
                        <div key={index} className='bg-white border-1 border-gray-200 drop-shadow-sm rounded-lg px-8 py-12 transition-all hover:scale-105 duration-300'>
                            <img width={40} src={assets.logo_icon} alt="logoicon" className='mb-2'/>
                            <h1 className='font-semibold'>{item.id}</h1>
                            <p className='mb-2 text-gray-600'>{item.desc}</p>
                            <p className='mb-5 text-gray-600'><span className='text-3xl text-black mr-2'>${item.price}</span>/ {item.credits} credits</p>
                            <button className='px-8 py-2 bg-gray-800 text-white rounded-md w-full min-w-52'>Get started</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BuyCredit
