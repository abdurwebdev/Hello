"use client"
import React from 'react'
import style from './Banner.module.css'
const Banner = () => {
  return (
    <>
    <div id={style.parent} className='w-[19vw] h-[19vh] mt-5 ml-28 relative'>
        <img className='rounded-3xl ' src='https://plus.unsplash.com/premium_photo-1683892045066-e8f1e1d09f74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <h1 id={style.dada} className='font-[Raleway] text-3xl font-extrabold text-[#FFB524] left-28 absolute top-64'>Fresh <br></br>
        Fruits<br>
        </br>
        Banner</h1>
    </div>
    </>
  )
}

export default Banner