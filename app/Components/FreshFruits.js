"use client"
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import style from './FreshFruits.module.css'
const FreshFruits = () => {
  return (
    <>
    <div id={style.papa}>
       <h1 id={style.main} className='font-[Raleway] text-[#45595B] font-semibold ml-28 text-5xl mt-20'>Fresh fruits shop</h1>
       <div id={style.kid} className='flex items-center justify-between'>
        <div id={style.kid2} className='flex items-center ml-28'>
            <input id={style.kid3} placeholder='Keywords' className='rounded-lg border px-2 py-4 bg-transparent'/><AiOutlineSearch id={style.kid4} className='border h-[9vh] w-[5vw]'/>
        </div>
        <di id={style.kid5} className='rounded-lg bg-[#F4F6F8] px-4 py-3 flex'>
            <h1>Default Sorting:</h1>
            <select>
                <option>Nothing</option>
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>PineApples</option>
            </select>
        </di>
       </div>
    </div>
    </>
  )
}

export default FreshFruits