import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
const Home = () => {
  return (
    <div className='flex bg-black  px-0 py-[90px] h-[600px]'>
    <div className='mt-[-70px] px-0 py-0 ml-[-20px]'>
  <img src="https://ucarecdn.com/9b3d6b61-07c7-48b8-8398-dc37e38bcce7/-/preview/1000x1000/" alt="" className='w-[70%]  '/>
    </div>
    <div className='flex flex-col space-y-3'>
    <h1 className='text-white font-extrabold text-6xl font-Nunito'>Welcome To MarkMe</h1>
    <h3 className='text-white font-extrabold text-2xl font-Nunito leading-2 mt-3'>Join Today.</h3>
    <button className='bg-white w-[190px] pl-1.5 rounded-3xl pr-[4px] py-1 '><span className='flex items-center  gap-3 pb-1'><FcGoogle className='mt-1'/>Sign Up with Google</span></button>
    <div className='flex '>
      <div className='w-[82px] h-[1px] bg-white rounded-md mt-3'></div>
    <p className='text-white pl-0.5 pr-0.5 '>OR</p>
    <div className='w-[82px] h-[1px] bg-white rounded-md mt-3'></div>
    </div>
    <div className=''>
    <NavLink to="/signup">
    <button className='text-white bg-blue-500 w-[195px] pl-1.5 rounded-3xl pr-[6px] py-1 pb-1'>Create Account</button>
    </NavLink>
    </div>
    <div className='flex flex-col space-y-4 pt-5'>
      <p className='text-white'>Already have an account? </p>
      <div>
      <NavLink to="/login">
    <button className='text-blue-500 bg-black w-[195px] pl-1.5 rounded-3xl pr-[6px] py-1 pb-1 border border-white'>Sign-in</button>
    </NavLink>
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Home
