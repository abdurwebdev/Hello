"use client"
import React from 'react'
import { AiOutlineApple, AiOutlineSwapLeft, AiOutlineSwapRight } from 'react-icons/ai'
import style from './SideBar.module.css'
import Link from 'next/link';
import Feature from './Feature';
import Banner from './Banner';
import Filter from './Filter';
const Sidebar = () => {
  return (
    <>
    <div id={style.papa} className='mt-10 h-[300vh]'>
         <h1 id={style.grandfather} className='font-[Raleway] ml-28 text-4xl font-semibold text-[#45595B]'>Categories</h1>
         <div id={style.parent} className='flex items-center justify-between w-[25vw] ml-28 mt-4 '>
              <div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors'/><Link href='/Apples' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Apples</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors'/><Link href='/Banana' className='text-[#81C408] hover:text-[#FFB524] transition-colors' >Banana</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors'/><Link href='/Orange' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Orange</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors'/><Link href='/Pumpkin' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Pumpkin</Link></div>
              </div>
              <div>
                <h1>(2)</h1>
                <h1>(2)</h1>
                <h1>(2)</h1>
                <h1>(2)</h1>
              </div>
             
         </div>
          {/* Range Start */}
          <div className='ml-28 mt-10'>
                <h1 id={style.head} className='font-[Raleway]  text-4xl font-semibold text-[#45595B]'>Price</h1>
                <input id={style.range} className='w-[25vw] mt-5' type='range'/>
          </div>
          {/* Range Ends */}
          {/* Addition Starts */}
          <div id={style.red} className='ml-28 mt-10'>
            <h1 id={style.salmon} className='font-[Raleway]  text-4xl font-semibold text-[#45595B] mb-4'>Additional</h1>
           <div className='grid grid-cols-1 gap-y-4'>
            <label className='flex items-center'>
            <input type='radio' className='mr-2'/>
            <h1 className='font-[Raleway]'>Fresh</h1>
            </label>
            <label className='flex items-center'>
            <input type='radio' className='mr-2'/>
            <h1 className='font-[Raleway]'>Organic</h1>
            </label>
            <label className='flex items-center'>
            <input type='radio' className='mr-2'/>
            <h1 className='font-[Raleway]'>Sales</h1>
            </label>
            <label className='flex items-center'>
            <input type='radio' className='mr-2'/>
            <h1 className='font-[Raleway]'>Discounts</h1>
            </label>
            <label className='flex items-center'>
            <input type='radio' className='mr-2'/>
            <h1 className='font-[Raleway]'s>Expired</h1>
            </label>
            
           </div>
           
          </div>
          {/* Addition Ends */}
          {/* Featured Start */}
          <div id={style.blue} className='ml-28 mt-10'>
            <h1 id={style.yellow} className='font-[Raleway]  text-4xl font-semibold text-[#45595B] mb-4 '>Featured products</h1>
            <div>
              <Feature/>
              <Feature/>
              <Feature/>
              <Feature/>
            <button id={style.cute} className='font-[Raleway] text-[#81C408] font-bold hover:text-white hover:bg-[#FFB524] transition-colors mt-5 px-8 py-4 border w-[20vw] border-[#FFB524] rounded-3xl mb-5'>View More</button>
            </div>
          </div>
          {/* Featured End */}
          {/* Banner Start */}
          <Banner/>
          {/* Banner End */}
          {/* Cards Container */}
          <div id={style.left} className='top-[45vw] left-[33vw] w-[60vw] h-[265vh] absolute'>
             <div id={style.right} className='grid grid-cols-3'>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
              <Filter/>
             </div>
          </div>
           {/* Cards Container Ends */}
           {/* Buttons Start */}
           <div id={style.buttons} className=' flex items-center mt-10 w-[40vw] h-[40vh] space-x-2 absolute left-[40vw] top-[160vw]'>
            <AiOutlineSwapLeft className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'/>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>1</button>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>2</button>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>3</button>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>4</button>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>5</button>
            <button  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'>6</button>
            <AiOutlineSwapRight  className='border border-[#FFB524] hover:bg-[#81C408] transition-colors w-10 h-10 rounded-lg'/>
           </div>
           {/* Buttons End */}
    </div>
    </>
  )
}

export default Sidebar