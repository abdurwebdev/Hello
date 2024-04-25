"use client"
import React from 'react'
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiSolidCopyright } from 'react-icons/bi'
import style from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div id={style.main} className='w-full bg-[#45595B] h-[100vh] py-5  '>
      <div className='grid grid-cols-3 gap-6 mt-16'>
        <div>
          <h1 id={style.fruits} className='ml-32 font-[Raleway] text-[#81C408] text-4xl font-semibold'>Fruitables</h1>
          <h1 id={style.fresh} className='ml-32 font-[Raleway] text-[#FFB524] font-semibold]'>Fresh Products</h1>
        </div>
        <div>
          <input id={style.inputs} className='px-4 py-4 rounded-full w-[20vw]' type='text' placeholder='Your Email'/>
          <button id={style.buttons} className='px-4 py-4 bg-[#81C408] rounded-full absolute left-[50vw]'>Subscribe Now</button>
        </div>
        <div id={style.icons} className='flex space-x-3 ml-20 '>
          <BiLogoTwitter className='border border-[#FFB524] text-[#FFB524] text-5xl px-2 py-2 rounded-full hover:bg-[#FFB524] hover:text-black transition'/>
          <BiLogoFacebook className='border border-[#FFB524] text-[#FFB524] text-5xl px-2 py-2 rounded-full hover:bg-[#FFB524] hover:text-black transition'/>
          <BiLogoYoutube className='border border-[#FFB524] text-[#FFB524] text-5xl px-2 py-2 rounded-full hover:bg-[#FFB524] hover:text-black transition'/>
          <BiLogoLinkedin className='border border-[#FFB524] text-[#FFB524] text-5xl px-2 py-2 rounded-full hover:bg-[#FFB524] hover:text-black transition'/>
         
        </div>
      </div>
      <div id={style.borders} className='w-[80%] border-b-[0.1vw] mt-7 ml-36 border-[#FFB524]'></div>
      <div id={style.grids} className='grid grid-cols-4'>
        <div>
          <h1 className='font-[Raleway] font-bold text-2xl text-white ml-32'>Why People Like us!</h1>
          <h3 className='ml-32 font-[Raleway] text-[#A2ACA0] mt-4 leading-8'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</h3>
          <button className='ml-32 font-[Raleway] font-semibold text-[#81C408] mt-7 border-2 border-[#FFB524] px-4 py-2 rounded-full hover:bg-[#FFB524] hover:text-white transition'>Read More</button>
        </div>
        <div id={style.shops} className='text-[#A2ACA0] leading-8 '>
          <h1 className='font-[Raleway] font-bold text-2xl text-white ml-24' >Shop Info</h1>
          <Link href='/AboutUs' id={style.links} className='block ml-24 mt-8 hover:text-[#FFB524] transition'>About Us</Link>
          <Link href='/ContactUs' className='block ml-24 hover:text-[#FFB524] transition'>Contact Us</Link>
          <Link href='/PrivacyPolicy' className='block ml-24 hover:text-[#FFB524] transition'>Privacy Policy</Link>
          <Link href='/TermsCondition' className='block ml-24 hover:text-[#FFB524] transition'>Terms & Condition</Link>
          <Link href='/ReturnPolicy' className='block ml-24 hover:text-[#FFB524] transition'>Return Policy</Link>
          <Link href='/Faqs' className='block ml-24 hover:text-[#FFB524] transition'>FAQs & Help</Link>
        </div>
        <div id={style.grid2}  className='text-[#A2ACA0] leading-8 '>
          <h1 className='font-[Raleway] font-bold text-2xl text-white ml-18' >Account</h1>
          <Link href='/Account' className='block ml-18 mt-8 hover:text-[#FFB524] transition'>My Account</Link>
          <Link href='/ShopDetails' className='block ml-18 hover:text-[#FFB524] transition'>Shop details</Link>
          <Link href='/Cart' className='block ml-18 hover:text-[#FFB524] transition'>Shopping Cart</Link>
          <Link href='/Wish' className='block ml-18 hover:text-[#FFB524] transition'>Wishlist</Link>
          <Link href='/Order' className='block ml-18 hover:text-[#FFB524] transition'>Order History</Link>
          <Link href='/International' className='block ml-18 hover:text-[#FFB524] transition'>International Orders</Link>
        </div>
        <div id={style.grid3} >
          <h1 className='font-[Raleway] font-bold text-2xl text-white '>Contact</h1>
          <h3 className='text-[#A2ACA0] leading-8 mt-7 ' >Address: 1429 Netus Rd, NY 48247</h3>
          <h3 className='text-[#A2ACA0] leading-8 '>Email: Example@gmail.com</h3>
          <h3 className='text-[#A2ACA0] leading-8 '>Phone: +0123 4567 8910</h3>
          <h3 className='text-[#A2ACA0] leading-8 '>Payment Accepted</h3>
          <img src='https://themewagon.github.io/fruitables/img/payment.png'/>
        </div>
      </div>
      <div id={style.copy} className='grid grid-cols-2'>
        <div  className='flex items-center mt-10 ml-24 '>
        <BiSolidCopyright className='text-white text-xl'/>
          <Link href='/Home' className='text-[#81C408]'>Your Site Name,</Link>
          All right reserved.
        </div>
        <div id={style.last} className='flex items-center mt-10 ml-48'>
          <h6>Designed By</h6> 
          <Link href='/Html' className='text-[#81C408] hover:text-[#82c408c3]'>HTML Codex</Link>
          <h6>Distributed</h6> 
           <Link href='/Theme' className='text-[#81C408] hover:text-[#82c408c3]'>ThemeWagon</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer