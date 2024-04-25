"use client"
import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiLogoGmail, BiSolidEditLocation } from "react-icons/bi";

const Addrees = () => {
  return (
    <>
    <div className='w-[30vw] h-[20vh] bg-white rounded-md'>
        <div className='flex items-center '>
          <div className='py-7 text-[#81C408] text-5xl px-8'>
            <BiLogoGmail/>
          </div>
          <div>
            <h1 className='font-[Raleway] text-2xl font-bold text-[#45595B]'>Mail Us</h1>
            <h2 className='font-[Raleway]  text-[#45595B]'>info@example.com</h2>
          </div>
        </div>
    </div>
    </>
  )
}

export default Addrees