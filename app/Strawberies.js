"use client"
import React from 'react'
import Strw from './Components/Strw'
import style from './Strawberies.module.css'
const Strawberies = () => {
  return (
    <>
    <div id={style.jum} className='w-full h-[100vh] '>
    <div id={style.main} className='grid grid-cols-3'>
      <Strw/>
      <Strw/>
      <Strw/>
    </div>
    </div>
    </>
  )
}

export default Strawberies