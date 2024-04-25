"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './Hero.module.css'
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
    <div id={style.main} className='w-full h-[100vh]  bg-cover  '>
        <img id={style.image} className='h-[100vh] w-full' src='https://themewagon.github.io/fruitables/img/hero-img.jpg'/>
        <div id={style.grind} className='grid grid-cols-2'>
            <div id={style.heading} className='mt-[-27vw] ml-32'>
                <h1 id={style.mainhead}  className='font-[Raleway] text-[#FFB524] text-2xl font-semibold'>100% Organic Foods</h1>
                <h1 id={style.subhead} className='font-[Raleway] text-[#81C408] text-6xl mt-6 font-extrabold'>Organic Veggies & Fruits Foods</h1>
                <div id={style.multiple} className='flex items-center '>
                <input id={style.maininput} className='mt-20 px-10 w-96 py-4  rounded-full border-2 border-[#FFB524]' type='text' placeholder='Search'/>
                <button id={style.buttons} className='rounded-full border-2 border-[#FFB524] px-2 py-4 w-[10vw] mt-20 transition bg-[#81C408]  mr-15 hover:bg-[#FFB524] text-white font-sans font-semibold'>Submit Now</button>
                </div>

            </div>
            <div id={style.carosel} className='mt-[-28vw] ml-[8vw] w-[35vw] h-[35vw]'>
      <Slider {...settings}>
        <div className='rounded-md'>
          <img src="https://themewagon.github.io/fruitables/img/hero-img-2.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://themewagon.github.io/fruitables/img/hero-img-1.png" alt="Image 2" />
        </div>
        
      </Slider>
    </div>
        </div>
    </div>
    </>
  )
}

export default Hero