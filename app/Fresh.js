"use client"
import React from 'react'
import Filter from './Components/Filter'
import style from './Fresh.module.css'
const Fresh = () => {
  return (
    <>
    <div id={style.main} className='w-full h-[100vh]'>
        <h1 className='font-[Raleway] text-3xl ml-7 font-bold text-black'>Fresh Organic Vegetables</h1>
        <div id={style.sub} className='grid grid-cols-4'>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        
        </div>
    </div>
    
    </>
  )
}

export default Fresh