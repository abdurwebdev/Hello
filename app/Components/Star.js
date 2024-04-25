"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import style from './Star.module.css'
const Star = () => {
  return (
    <>
    <div id={style.main} className='w-[26vw] h-[20vw] bg-[#F4F6F8] mt-20 ml-12 rounded-2xl'>
      <div className='grid grid-cols-2'>
        <div className='mt-10 ml-3'>
          <img id={style.image} className='w-[11vw] bg-black rounded-full' src='https://themewagon.github.io/fruitables/img/best-product-5.jpg'/>
        </div>
        <div id={style.sub} className='mt-7'>
          <Link className='font-[Raleway] text-[#4A595B] font-semibold text-2xl ' href='/Orange'>Organic Tomato</Link>
          <img id={style.image2} className='w-[7vw] h-[5vh]' src='https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg'/>
          <h1 className='font-[Raleway] text-[#4A595B] font-semibold text-2xl '>3.12 $</h1>
          <button className='flex items-center border-2 border-[#FFB524] text-[#81C408] hover:bg-[#FDBE41] transition-all px-5 py-2 rounded-full hover:text-white'><AiOutlineShoppingCart/>Add To Cart</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Star