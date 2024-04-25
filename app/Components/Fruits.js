"use client"
import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import style from './Fruit.module.css'
const Fruits = () => {
  return (
    <>
    <div id={style.main} className='w-[22vw] h-[60vh] bg-white ml-7 container mx-auto text-center space-y-4 '>
        <img id={style.sub} className='w-[20vw] h-[30vh] rounded-2xl ' src='https://themewagon.github.io/fruitables/img/best-product-5.jpg'/>
        <Link className='font-[Raleway] text-[#4A595B] font-semibold text-2xl ' href='/Orange'>Organic Tomato</Link>
        <img id={style.main2} className='w-[7vw] h-[5vh] mx-auto' src='https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg'/>
        <h1 className='font-[Raleway] text-[#4A595B] font-semibold text-2xl' >3.12 $</h1>
        <button id={style.buttons} className=' flex items-center ml-[5vw] border-2 border-[#FFB524] text-[#81C408] hover:bg-[#FDBE41] transition-all px-5 py-2 rounded-full hover:text-white'><AiOutlineShopping/>Add To Cart</button>
    </div>
    </>
  )
}

export default Fruits