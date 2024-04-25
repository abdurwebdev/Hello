"use client"
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import style from './Filter.module.css'

const Filter = () => {
  return (
    <>
    <div id={style.main} className='w-[19vw] h-[35vw] bg-[#F4F6F8] ml-7 mt-10'>
        <div className='w-full rounded-lg bg-cover h-[19vw] bg-zinc-900'>
           <img className='hover:scale-110 transition' src='https://themewagon.github.io/fruitables/img/best-product-5.jpg'/>
        </div>
        <div id={style.head} className='items-center justify-center '>
         <h1 className='font-[Raleway] font-bold text-center text-2xl'>Grapes</h1>
         <p className='font-[Raleway] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
         <h1 className='font-[Raleway] font-bold text-center'>$4.99 / kg</h1>
         <button className='flex items-center justify-around text-center border-2 border-[#FFB524] rounded-full px-3 py-2 hover:bg-[#FFB524] font-bold transition text-[#81C408]'><AiOutlineShopping/>Add To Cart</button>
        </div>
    </div>
    
    </>
  )
}

export default Filter