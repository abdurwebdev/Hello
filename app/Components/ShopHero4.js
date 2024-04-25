"use client"
import React from 'react'
import Link from 'next/link';
import style from "./ShopHero3.module.css"
const ShopHero = () => {
  return (
    <>
    <div className='relative'>
        <img className='h-[60vh] w-full bg-cover' src='https://images.unsplash.com/photo-1592681814168-6df0fa93161b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <div className='absolute top-[60%] left-[45%] space-x-5'>
        <h1 id={style.main} className='font-[Raleway] font-extrabold text-white text-4xl'>Contact</h1>
        <div id={style.sub} className='flex space-x-4  absolute left-[-4vw]'>
        <Link href='/Home' className='hover:text-[#81C408] transition-colors'>Home</Link>
        <Link href='/Pages' className='hover:text-[#81C408] transition-colors'>Pages</Link>
        <Link href='/Shop' className='hover:text-[#ffffff] text-[#81C408] transition-colors'>Contact</Link>
        </div>
        
        </div>
    </div>
    
    </>
  )
}

export default ShopHero