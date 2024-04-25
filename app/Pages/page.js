"use client"
import React from 'react'
import ShopHero3 from '../Components/ShopHero3'
import Items from '../Components/Items'
import Items2 from '../Components/Items2'
import Items3 from '../Components/Item3'
const page = () => {
  return (
    <>
    {/* Banner Start */}
    <ShopHero3/>
    {/* Banner Ends */}
    {/* Six Column Grid Start */}
    <div className=' w-[1263px] overflow-y-auto'>
    <div className='grid grid-cols-6 mt-10'>
      <div className='ml-32'>
        <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Products</h1>
        <Items/>
        <Items2/>
        <Items3/>
      </div>
      <div className='ml-40'>
      <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Name</h1>
      </div>
      <div className='ml-32'>
        <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Price</h1>
       
      </div>
      <div className='ml-24'>
        <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Quantity</h1>
        
      </div>
      <div className='ml-20'>
        <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Total</h1>
        
      </div>
      <div>
        <h1 className='font-[Raleway] text-[#747D88] font-semibold'>Handle</h1>
        
      </div>
      {/* Six Column Grid End */}
      </div>
    </div>
    {/* Coupon Button Start */}
    <div className='mt-10 ml-28 gap-5 flex '>
      <input placeholder='Apply Coupon' className='px-5 py-5 rounded-full border border-b-2'/>
      <button className='px-5 py-5 border text-[#81C408] bg-white rounded-full transition-colors hover:bg-[#FFB627] hover:text-white'>Apply Coupon</button>
    </div>
    {/* Coupon Button End */}
    {/* Card */}
    <div className='w-[25vw] h-[70vh] bg-[#F4F6F8] rounded-md mt-5 ml-[70vw] mb-16'>
      <h1 className='font-bold font-[Raleway] text-4xl px-5 py-5'>Cart Total</h1>
      <div className='flex'>
       <h1 className='font-bold font-[Raleway] text-xl px-5 py-5'>SubTotal:</h1>
       <h2 className='font-bold font-[Raleway] text-xl px-5 py-5'>$96.00</h2>
      </div>
      <div className='flex'>
        <h1 className='font-bold font-[Raleway] text-xl px-5 '>Shipping:
</h1>
        <h2 className='font-bold font-[Raleway] text-xl px-5'>Flat rate: $3.00
Shipping to Ukraine.</h2>
      </div>
      <div className='flex'>
        <h1 className='font-bold font-[Raleway] text-xl px-5 py-5'>Total:</h1>
        <h2 className='font-bold font-[Raleway] text-xl px-12 py-5 '>$99.00</h2>
      </div>
      <button className='px-10 py-5 border text-[#81C408] bg-white rounded-full transition-colors hover:bg-[#FFB627] hover:text-white'>PROCEED CHECKOUT</button>
    </div>
    
    {/* Card End */}
    </>
  )
}

export default page