"use client"
import React, { useState } from 'react'
import ShopHero2 from '../Components/ShopDetails'
import { AiOutlineApple, AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link';
import Feature from '../Components/Feature'
import Banner from '../Components/Banner'
import style from './page.module.css'
import Filter from '../Components/Filter';


const Page = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <ShopHero2 />
      <div id={style.parent} className='w-full h-[420vh]'>
        <div id={style.main} className='grid grid-cols-3'>
          <div>
            <img id={style.son1} className='rounded-lg border border-[#E9ECEF] w-[25vw] h-[60vh] mx-28 my-28' src='https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </div>
          <div id={style.son2} className='mx-10 my-28'>
            <h1 className='font-[Raleway] text-[#45595B] font-extrabold text-3xl'>Brocoli</h1>
            <h1 className='font-[Raleway] text-[#45595B]  text-xl my-2'>Category: Vegetables</h1>
            <h1 className='font-[Raleway] text-[#45595B] font-extrabold text-xl py-1'>3,35 $</h1>
            <img className='w-[10vw] py-1' src='https://t3.ftcdn.net/jpg/05/40/06/92/360_F_540069216_AiqmGY0nEt8IhFgjIoCG11IVQG3IoobK.jpg' />
            <p className='py-1 font-[Raleway] text-[#7491BA]  tracking-tighter'>The generated Lorem Ipsum is therefore always free <br></br> from repetition injected humour, or non- <br></br>characteristic words etc.</p>
            <p className='py-1 font-[Raleway] text-[#7491BA]  tracking-tighter'>Susp endisse ultricies nisi vel quam suscipit.<br></br> Sabertooth peacock flounder; chain pickerel<br></br> hatchetfish, pencilfish snailfish</p>
            <div className='flex items-center gap-5 py-5'>
              <button onClick={decrement} className='px-5 py-3 rounded-full bg-[#F4F6F8] text-[#45595B]'>-</button>
              <h1>{count}</h1>
              <button onClick={increment} className='px-5 py-3 rounded-full bg-[#F4F6F8] text-[#45595B]'>+</button>
            </div>

            <button className=' flex items-center justify-center text-center border border-[#FFB524] hover:text-white rounded-full px-3 py-3 hover:bg-[#FFB524] font-bold w-48 transition-colors text-[#81C408]'><AiOutlineShopping />Add To Cart</button>
          </div>
          {/* Main Section Start */}

          <div id={style.son3}>
            <div id={style.son4} className='flex items-center justify-between w-[25vw] ml-20 mt-36 '>
              <div >
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors' /><Link href='/Apples' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Apples</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors' /><Link href='/Banana' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Banana</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors' /><Link href='/Orange' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Orange</Link></div>
                <div className='flex items-center'><AiOutlineApple className='text-[#81C408] hover:text-[#FFB524] transition-colors' /><Link href='/Pumpkin' className='text-[#81C408] hover:text-[#FFB524] transition-colors'>Pumpkin</Link></div>
              </div>
              <div>
                <h1>(2)</h1>
                <h1>(2)</h1>
                <h1>(2)</h1>
                <h1>(2)</h1>
              </div>

            </div>
            {/* Range Start */}
            <div id={style.son5} className='ml-20 mt-10'>
              <h1 className='font-[Raleway]  text-4xl font-semibold text-[#45595B]'>Price</h1>
              <input className='w-[25vw] mt-5' type='range' />
            </div>
            {/* Range Ends */}
            {/* Addition Starts */}
            <div id={style.son8} className='ml-20 mt-10'>
              <h1 className='font-[Raleway]  text-4xl font-semibold text-[#45595B] mb-4'>Additional</h1>
              <div className='grid grid-cols-1 gap-y-4'>
                <label className='flex items-center'>
                  <input type='radio' className='mr-2' />
                  <h1 className='font-[Raleway]'>Fresh</h1>
                </label>
                <label className='flex items-center'>
                  <input type='radio' className='mr-2' />
                  <h1 className='font-[Raleway]'>Organic</h1>
                </label>
                <label className='flex items-center'>
                  <input type='radio' className='mr-2' />
                  <h1 className='font-[Raleway]'>Sales</h1>
                </label>
                <label className='flex items-center'>
                  <input type='radio' className='mr-2' />
                  <h1 className='font-[Raleway]'>Discounts</h1>
                </label>
                <label className='flex items-center'>
                  <input type='radio' className='mr-2' />
                  <h1 className='font-[Raleway]'>Expired</h1>
                </label>

              </div>

            </div>
            {/* Addition Ends */}
            {/* Featured Start */}
            <div className='ml-20 mt-10'>
              <h1 id={style.son9} className='font-[Raleway]  text-4xl font-semibold text-[#45595B] mb-4 '>Featured products</h1>
              <div id={style.son6}>
                <Feature />
                <Feature />
                <Feature />
                <Feature />
                <button className='font-[Raleway] text-[#81C408] font-bold hover:text-white hover:bg-[#FFB524] transition-colors mt-5 px-8 py-4 border w-[20vw] border-[#FFB524] rounded-3xl mb-5'>View More</button>
              </div>
            </div>
            {/* Featured End */}
            {/* Banner Start */}
            <div id={style.son7}>
              <Banner />
            </div>
            {/* Banner End */}
          </div>
          {/* Main Section End */}
          {/* Filter Start */}
          <div id={style.son10} className=' mt-[-55vw] w-[65vw] mx-20'>
            <div className='space-x-5 my-5'>
              <button>Description</button>
              <button>Reviews</button>
            </div>
            <div>
              <div className='space-y-5'>
                <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic <br></br> words etc. Susp endisse ultricies nisi vel quam suscipit</p>
                <p>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish Antarctic icefish goldeye <br></br> aholehole trumpetfish pilot fish airbreathing catfish, electric ray sweeper.</p>
              </div>
              <div className='my-5'>
                <table className="table-auto w-[40vw]  border-collapse border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2">Weight</th>
                      <th className="p-2">1 kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="p-2">Country of Origin</td>
                      <td className="p-2">Agro Farm</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">Quality</td>
                      <td className="p-2">Organic</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">Check</td>
                      <td className="p-2">Healthy</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-2">Min Weight</td>
                      <td className="p-2">250 Kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
             
            </div>
          </div>
          {/* Filter End */}
          {/* Reply Start */}
          <div className=' my-[-20vw] mx-[-28vw] w-[65vw]'>
            <div className='my-5' id={style.child} > <h1 className='font-[Raleway] font-bold text-3xl text-[#45595B]'>Leave a Reply</h1></div>
            <div id={style.son12} className='flex items-center gap-10'>
              <div >
              <input placeholder='Your Name *' className='rounded-lg px-3 py-3 bg-white w-96 '/>
              </div>
              <div>
              <input placeholder='Your Email *' className='rounded-lg px-3 py-3 bg-white w-96 '/>
              </div>
            </div>
            <div className='my-10' id={style.child1}>
              <input placeholder='Your Review *' className='w-[60vw] h-[60vh] '/>
            </div>
            <div className='flex items-center'>
              <h1>Please Rate</h1><img className='w-[10vw]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_QhHIuSikyaLdTZs86U0a6pJ9Rc5FdnzttWJ9hQx&s'/>
            </div>
            <div className='mx-[50vw]  w-[20vw]'>
              <button id={style.son11} className='flex items-center justify-around text-center border border-[#FFB524] rounded-full px-3 py-4 hover:bg-[#FFB524] font-bold transition text-[#81C408]'>Post Comment</button>
            </div>
          </div>
          {/* Reply End */}
        
        </div>
          {/* Related Products Start */}
          <div id={style.child3} className='grid grid-cols-4 my-96'>
            <Filter/>
            <Filter/>
            <Filter/>
            <Filter/>
          </div>
          {/* Related Products End */}
      </div>
    </>
  )
}

export default Page
