"use client"
import React from 'react'
import style from './Feature.module.css'
const Feature = () => {
  return (
    <>
    <div id={style.parent} className=' flex mt-5 gap-x-0'>
        <div id={style.child} className=' w-[12vw]'>
            <img className='w-[10vw] h-[15vh] rounded-lg' src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1878&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
        <div id={style.kid1} className='w-[12vw]'>
            <h1>Big Banana</h1>
            <img className='w-[7vw]' src='https://t3.ftcdn.net/jpg/04/20/03/48/360_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg'/>
            <div className='flex gap-3'>
                <h1 className='font-[Raleway] font-extrabold'>2.99 $</h1>
                <h1 className='font-[Raleway] font-extrabold text-[#DC3545] line-through'>4.11 $</h1>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Feature