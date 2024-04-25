"use client"
import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import { BiFace, BiLocationPlus, BiMenu, BiSearch, BiShoppingBag, BiVoicemail } from "react-icons/bi";
import Link from 'next/link';

const Header = () => {
  const [menuTop, setMenuTop] = useState('-100%'); 

  const toggleMenu = () => {
    setMenuTop(menuTop === '-100%' ? '13vw' : '-100%'); 
  };
  const [marginTop, setMarginTop] = useState(0);
 useEffect(() => {
  const handleScroll = () => {
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight) {
        document.removeEventListener('scroll', handleScroll);
    } else {
        setMarginTop(-0.1 * scrollY);
    }
  };

  document.addEventListener('scroll', handleScroll);
 
  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
 }, [])
 

  return (
    <>
    <div id={style.hamburger} style={{ top: menuTop }} >
          <div className='ml-6' >
            <div><Link href='/Home' className='text-[#81C408]'>Home</Link></div>
          <div className='mt-6'><Link href='/Shop' className='hover:text-[#81C408] transition'>Shop</Link></div>
          <div className='mt-6'><Link href='/ShopDetails' className='hover:text-[#81C408] transition'>Shop Detail</Link></div>
          <div className='mt-6'><Link href='/Pages' className='hover:text-[#81C408] transition'>Pages</Link></div>
          <div className='mt-6'><Link href='/Contact' className='hover:text-[#81C408] transition'>Contact</Link></div>
          
          </div>
          <div className='flex gap-8 mt-6 ml-6'>
          <button className='text-xl border border-[#F3AC22] hover:bg-[#f3ad22ea] transition rounded-full px-2 py-2 '>
            <BiSearch />
          </button>
          <button className='hover:text-[#82c408d5] text-[#81C408] text-3xl'>
          <BiShoppingBag />
          </button>
          <button className='hover:text-[#82c408d5] text-3xl text-[#81C408]'>
            <BiFace/>
          </button>
          </div>
         
    </div>
   
    <div id={style.main} className='w-full h-[25vh]  shadow-bottom fixed top-0 z-50 bg-white '>
      <div id={style.nav} className='nav w-[80%] bg-[#81C408] h-[8vh] ml-32 transition ' style={{ marginTop: `${marginTop}px` }}>
        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 mt-3 ml-2'><BiLocationPlus id={style.orange}/>
        <Link href='/Street' className='font-sans text-white '>123 Street, New York</Link>
        <BiVoicemail  id={style.mail}/>
        <Link href='/Terms' className='font-sans text-white'>Email@Example.com</Link>
        </div>
        <div className='flex gap-4 mt-3 mr-2 text-white'>
          <Link href='/Privacy' className='font-sans text-white hover:text-[#F3AC22] transition'>Privacy Policy</Link>/
          <Link href='/Sales' className='font-sans text-white hover:text-[#F3AC22] transition'>Terms of Use</Link>/
          <Link href='/Terms' className='font-sans text-white hover:text-[#F3AC22] transition'>Sales and Refunds</Link>
        </div>
        </div>
      </div>
      <div className='flex items-center justify-between mr-32'>
      <div id={style.fruit}>
        <h1 className='font-[Raleway] text-[#81C408] font-extrabold text-5xl ml-32 mt-6'>Fruitables</h1>
        </div>
        <div id={style.link} className='text-[#45595B] flex space-x-3 mt-8 '>
          <Link href='/Home' className='text-[#81C408]'>Home</Link>
          <Link href='/Shop' className='hover:text-[#81C408] transition'>Shop</Link>
          <Link href='/ShopDetails' className='hover:text-[#81C408] transition'>Shop Detail</Link>
          <Link href='/Pages' className='hover:text-[#81C408] transition'>Pages</Link>
          <Link href='/Contact' className='hover:text-[#81C408] transition'>Contact</Link>
        </div>
        <div id={style.btn} className='text-[#81C408]  text-4xl flex space-x-6 mt-4 '>
          <button className='text-xl border border-[#F3AC22] hover:bg-[#f3ad22ea] transition rounded-full px-3 py-3'>
            <BiSearch />
          </button>
          <button className='hover:text-[#82c408d5] text-[#81C408]'>
          <BiShoppingBag />
          </button>
          <button className='hover:text-[#82c408d5] text-[#81C408]'>
            <BiFace/>
          </button>
          
        </div>
        </div>
       
    </div>
     <button onClick={toggleMenu} id={style.burger}>
          <BiMenu />
          </button>
    
    </>
  )
}

export default Header