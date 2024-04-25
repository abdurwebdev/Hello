"use client"
import React from 'react'
import style from './HeroChild.module.css'
const HeroChild = () => {
  return (
    <>
    <div id={style.main} className='bg-[#FFB524] w-full h-[100vh] '>
        <div id={style.head} className='grid grid-cols-2 '>
            <div id={style.jum} className='mt-10'>
            <h1 className='font-[Raleway] font-extrabold text-white ml-32 text-7xl mt-14'>Fresh Exotic Fruits</h1>
            <p className='font-[Raleway] font-semibold text-[#45595B] text-6xl ml-32'>in Our Store</p>
            <p className='font-[Raleway]  text-[#fff] ml-32 '>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <button className='bg-[#FFB524] border-2 border-[#fff] ml-32 px-10 py-3 mt-4 rounded-full hover:bg-[#81C408] transition'>BUY</button>
            </div>
            <div className='mt-10'>
                <img src='https://themewagon.github.io/fruitables/img/baner-1.png'/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default HeroChild