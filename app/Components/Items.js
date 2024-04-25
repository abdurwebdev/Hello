"use client"
import React, { useState } from 'react'

const Items = () => {
    const [count, setCount] = useState(0);
    const increment =()=>
    {
        console.log("Button Clicked");
        setCount(count+1);
    }
    const decrement = () =>
    {
        setCount(count-1);
    }
  return (
    <>
    {/* First Item Start */}
     <div className='flex items-center text-nowrap'>
        <img className='rounded-lg w-[100px] h-[100px]' src='https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <h1 className='ml-40'>Big Banana</h1>
        <h1 className='ml-24'>2.99 $</h1>
        <button onClick={increment} className='ml-32 w-[15vw] px-5 h-[5vh] rounded-full border '>+</button>
        <h1>{count}</h1>
        <button onClick={decrement} className='w-[15vw] px-5 h-[5vh] rounded-full border '>-</button>
        <h1 className='ml-24'>2.99$</h1>
        <button className=' ml-20 w-[15vw] px-5 h-[5vh] rounded-full border '>X</button>
     </div>
      {/* First Item End */}
    </>
  )
}

export default Items