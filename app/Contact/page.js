"use client"
import React from 'react'
import ShopHero4 from '../Components/ShopHero4'
import Link from 'next/link'
import Addrees from '../Components/Addrees'
import Addrees2 from '../Components/Addrees2'
import Adrdrees3 from '../Components/Adrdrees3'
const page = () => {
  return (
    <>
    <ShopHero4/>
    <div className='w-[90vw] h-[200vh] bg-[#F4F6F8] ml-16 mt-16 mb-20'>
         <h1 className='font-[Raleway] font-bold text-[#81C408] text-5xl py-10 text-center'>Get in touch</h1>
        <p className='font-[Raleway] text-center'>The contact form is currently inactive. Get a functional and working contact form with Ajax & <br></br> PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1270865.4491960122!2d-0.10709216406250012!3d51.528642000000005!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1714055974102!5m2!1sen!2sus" width="600" height="450"  className='w-[80vw] ml-16 mt-10 rounded-md' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       <div className='grid grid-cols-6 mt-10 ml-16'>
        <div>
          <input placeholder='Your Name' className='rounded-md bg-[#FFFFFF] w-[40vw] px-5 py-5 mb-5'/>
          <input placeholder='Enter Your Email' className='rounded-md bg-[#FFFFFF] w-[40vw] px-5 py-5 mb-5'/>
          <input placeholder='Your Message' className='rounded-md bg-[#FFFFFF] w-[40vw] px-5 py-5 mb-5'/>
          <button className='rounded-md bg-[#FFFFFF] w-[40vw] px-5 py-5 mb-5  font-[Raleway] text-[#81C408] transition-colors hover:bg-[#FFB524] font-bold'>Submit</button>
        </div>
        <div className='ml-96 space-y-10'>
          <Addrees/>
          <Addrees2/>
          <Adrdrees3/>
        </div>
       </div>
    </div>
    </>
  )
}

export default page