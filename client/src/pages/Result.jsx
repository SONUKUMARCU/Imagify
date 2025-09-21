import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {

    const [image, setImage] = useState(assets.sample_img_1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState("");


    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log(userInput)
    }


    return (
        <div className='flex flex-col items-center gap-10 mt-5 max-w-5xl mx-auto flex-grow w-full'>
            {
                !isLoaded && <>
                    <div className='relative'>
                        <img src={image} alt="" className='rounded max-w-lg max-sm:max-w-sm' />
                        <span
                            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s] rounded-full' : 'w-0'}`}
                        ></span>
                    </div>
                    <p className={`${!loading ? "hidden" : "visible border-4 border-gray-300 size-10 rounded-full border-t-4 border-t-blue-500 animate-spin duration-100 scroll-smooth"}`}></p>
                    <form 
                        className='bg-gray-600 rounded-full flex items-center justify-between p-1 w-full max-sm:max-w-lg'
                        onSubmit={submitHandler}
                    >
                        <input 
                            className='px-5 py-2 sm:px-5 sm:py-3 border flex-grow  border-none outline-none text-white' type="text" name="userinput" placeholder='Describe what you want to generate' 
                            value={userInput}
                            onChange={(e)=> setUserInput(e.target.value)}
                        />
                        <button 
                            type='submit' className='bg-black text-white px-10 py-2  sm:px-20 sm:py-4 rounded-full cursor-pointer'
                        >Generate</button>
                    </form>
                </>
            }

            {
                isLoaded && <>
                    <div className='relative'>
                        <img src={image} alt="" className='rounded max-w-lg' />
                        <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s] rounded-full'></span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button
                            className='cursor-pointer px-10 py-3 rounded-full border-1'
                            onClick={() => setIsLoaded(!isLoaded)}
                        >Generate Another</button>
                        <a href={image} download className='cursor-pointer px-15 py-3 rounded-full bg-black text-white'>Download</a>
                    </div>
                </>
            }
        </div>
    )
}

export default Result
