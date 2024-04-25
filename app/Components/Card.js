"use client"
import React from 'react'
import { AiFillCar } from "react-icons/ai";
import style from './Card.module.css'
const Card = () => {
  return (
    <>
    <div id={style.main} className='w-full h-[98vh] bg-[#FFFFFF]'>
      <div id={style.card} className='  w-[20vw] h-[20vw] bg-[#F4F6F8] mt-40 ml-10 py-10 rounded-2xl'>
        <div className='w-[10vw] h-[10vw] bg-[#FFB524] rounded-full mt-[-2vw] ml-14 flex items-center justify-center '>
          <AiFillCar className='w-[5vw] h-[5vw] text-white'/>
        </div>
        <div className='ml-10 mt-6 '>
        <h1 id={style.head} className='font-[Raleway] ml-8 text-[#45595B] font-extrabold'>Free Shipping</h1>
        <h1 id={style.para} className='font-[Raleway]'>Free on order over $300</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card