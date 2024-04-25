"use client"
import React from 'react'
import Fruits from './Components/Fruits'
import style from './BestFruit.module.css'
const BestFruits = () => {
  return (
    <>
    <div id={style.sub} className='w-full  h-[85vh]'>
        <div id={style.main} className='grid grid-cols-4'>
            <Fruits/>
            <Fruits/>
            <Fruits/>
            <Fruits/>
        </div>
    </div>
    </>
  )
}

export default BestFruits