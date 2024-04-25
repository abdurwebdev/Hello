"use client"
import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import style from './Persons.module.css'
const Persons = () => {
  return (
    <div id={style.main} className='w-[18vw] h-[50vh] bg-[#ffffff] ml-10 mt-14 rounded-3xl'>
        <BsFillPersonFill id={style.sub} className='text-[#FFB524] text-8xl ml-16 mt-10'/>
        <h1 className='font-[Raleway] text-[#81C408] font-extrabold text-2xl text-center'>SATISFIED<br></br> CUSTOMERS</h1>
        <h1 className='font-[Raleway] text-[#657677] font-extrabold text-4xl text-center'>1963</h1>
    </div>
  )
}

export default Persons