"use client"
import React from 'react'
import Filter from './Components/Filter'
import style from './Fiter.module.css'
const Fiter = () => {
  return (
    <>
    <div id={style.main} className='w-full h-[190vh]'>
        <div className='flex items-center justify-between '>
        <h1 className='font-[Raleway] text-3xl ml-7 font-bold text-black'>Our Organic Products</h1>
        <div className='mr-[10vw] ' >
        <button className='px-5 py-3 transition font-[Raleway] text-black bg-[#F4F6F8] rounded-full hover:bg-[#FFB524]'>All Products</button>
        <button className='px-5 py-3 transition font-[Raleway] text-black bg-[#F4F6F8] rounded-full hover:bg-[#FFB524]'>Vegetables</button>
        <button className='px-5 py-3 transition font-[Raleway] text-black bg-[#F4F6F8] rounded-full hover:bg-[#FFB524]'>Fruits</button>
        <button className='px-5 py-3 transition font-[Raleway] text-black bg-[#F4F6F8] rounded-full hover:bg-[#FFB524]'>Bread</button>
        <button className='px-5 py-3 transition font-[Raleway] text-black bg-[#F4F6F8] rounded-full hover:bg-[#FFB524]'>Meat</button>
        </div>
        </div>
        <div id={style.mera} className='grid grid-cols-4 '>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
          <Filter/>
        </div>
    </div>
    </>
  )
}

export default Fiter