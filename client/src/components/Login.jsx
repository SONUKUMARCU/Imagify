import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { FiUser } from "react-icons/fi";
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';


const Login = () => {

    const [login, setLogin] = useState("Login")
    const { setShowLogin } = useAppContext();

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
            <motion.form
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                action="" className='bg-white rounded-xl p-10 text-center relative'>
                <h1 className='text-2xl sm:text-3xl font-medium'>{login}</h1>
                {
                    login === "Login" ? (
                        <p className='text-sm text-[#575B86] mt-2'>Welcome back! Please sign in to continue</p>

                    ) : (
                        <p className='text-sm text-[#575B86] mt-2'>Create account to see the magic!</p>
                    )
                }
                {
                    login !== "Login" && (
                        <div className='border-1 border-gray-300 rounded-full px-2 py-2 text-gray-600 gap-2 flex items-center justify-center mt-4'>
                            <FiUser className='text-gray-400' />
                            <input type="text" name="fullname" placeholder='Full name' className='border-none outline-none' />
                        </div>
                    )
                }

                <div className='border-1 border-gray-300 rounded-full px-6 py-2 text-gray-600 flex items-center gap-2 justify-center mt-4'>
                    <img src={assets.email_icon} alt="" />
                    <input type="text" name="email" placeholder='Email id' className='border-none outline-none' />
                </div>
                <div className='border-1 border-gray-300 rounded-full px-6 py-2 text-gray-600 flex items-center gap-2 justify-center mt-4'>
                    <img src={assets.lock_icon} alt="" />
                    <input type="password" name="password" placeholder='Password' className='border-none outline-none' />
                </div>

                <div className='mt-6'>
                    <p className='text-start text-blue-500 cursor-pointer'>Forgot password?</p>
                    <input type="submit" value={login === "Login" ? "Login" : "Create account"} className='px-8 py-2 bg-blue-500 min-w-full text-white rounded-full mt-2 cursor-pointer' />
                </div>

                {
                    login === "Login" ? (
                        <p
                            className='mt-5 text-gray-400 text-sm'
                        >
                            Don't have an account?
                            <span className='text-blue-500 underline cursor-pointer' onClick={() => setLogin("Sign Up")}>
                                Sign up</span>
                        </p>
                    ) : (
                        <p
                            className='mt-5 text-gray-400 text-sm'
                        >
                            Already have an account?
                            <span className='text-blue-500 underline cursor-pointer' onClick={() => setLogin("Login")}>
                                Login
                            </span>
                        </p>
                    )
                }

                <img className='absolute top-6 right-6 cursor-pointer' src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
            </motion.form>
        </div>
    )
}

export default Login
