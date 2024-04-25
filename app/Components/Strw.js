"use client"
import React from 'react'
import style from './Strw.module.css'
const Strw = () => {
  return (
    <>
    <div id={style.main} className='w-[30vw] h-[35vw] ml-5 border-2 border-[#FFB524] relative'>
        <div className='w-full h-[15vw]'>
            <img src='https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg'/>
        </div>
        <div id={style.apples} className='w-[20vw] h-[10vw] bg-[#FFB524] absolute left-[5vw] top-[17vw] rounded-lg items-center justify-center flex flex-col  '>
            <h1 className='font-[Raleway] text-white text-center text-3xl font-bold '>Fresh Apples</h1>
            <h1 className='font-[Raleway] text-[#45595B] text-center  font-bold'>20% OFF</h1>
        </div>
        <div id={style.green} className='bg-[#81C408] w-full h-[19.7vw]'></div>
    </div>
    </>
  )
}

export default Strw