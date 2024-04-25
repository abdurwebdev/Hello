"use client"
import React from 'react'
import style from './Testimonial.module.css'
const Testimonial = () => {
  return (
    <>
    <div id={style.main1} className='w-[40vw] h-[45vh] bg-[#F4F6F8] rounded-xl'>
     <p className='text-[#747D88] px-6 py-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's   </p>
     <hr className='w-[35vw] border border-[#FFB524] ml-7'></hr>
     <div id={style.main} className='grid grid-cols-2'>
      <div className='flex'>
        <div><img id={style.sub}  className='w-[300vw] h-[25vh] px-8 py-4' src='https://cdn-icons-png.flaticon.com/512/6009/6009864.png'/></div>
        <div className='ml-0'>
        <h1 className='font-[Raleway] text-[#45595B] ml-[-3vw] mt-6  font-extrabold'>Client Name</h1>
        <p className='font-[Raleway] text-[#45595ba7] ml-[-3vw]'>Profession</p>
        <img className='ml-[-3vw]' src='https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg'/>
        </div>
      </div>
      <div>
        <img className='w-[3vw] mt-14 ml-40' src='https://cdn-icons-png.flaticon.com/512/102/102571.png'/>
      </div>
      

     </div>
    </div>
    
    
    </>
  )
}

export default Testimonial