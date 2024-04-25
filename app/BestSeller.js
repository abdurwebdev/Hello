"use client"
import React from 'react'
import Star from './Components/Star'
import style from './BestSeller.module.css'
const BestSeller = () => {
  return (
    <>
    <div id={style.main2} className='w-full h-[140vh] mt-36'>
       <h1 className='font-[Raleway] text-center font-extrabold text-[#45595B] text-6xl'>Bestseller Products</h1>
       <p className='font-[Raleway] text-center text-[#818B8F]'>Latin words, combined with a handful of model sentence structures, to generate Lorem <br></br> Ipsum which looks reasonable.</p>
       <div id={style.main} className='grid grid-cols-3'>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>


       </div>
    </div>
    </>
  )
}

export default BestSeller