"use client"
import React from 'react'
import Persons from './Components/Persons'
import style from './Person.module.css'

const Person = () => {
  return (
    <>
    <div id={style.main} className='w-full h-[90vh] '>
        <div id={style.sub} className='w-[90vw] h-[70vh] bg-[#F3F5F7] ml-14 rounded-3xl'>
            <div id={style.grids} className='grid grid-cols-4 '>
                <Persons/>
                <Persons/>
                <Persons/>
                <Persons/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Person