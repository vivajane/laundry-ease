import React from 'react';
import lady from "../assets/woman.png"

const Hero = () => {
  return (
    <div className='md:px-24 px-6 md:flex gap-24 mt-16 '>
        <div >
            <p className='font-merriweather md:text-3xl text-2xl md:leading-snug font-bold f text-white leading-[35px] '>Fresh Clothes, Fresh Start - <br /> Premium Laundry Services at Your Doorstep</p>
            <p className='md:leading-snug leading-[23px] font-merriweather font-normal text-[#FFFFFF] md:text-xl text-sm mt-4 '>Experience the Convenience and Quality of Our Top-Rated Laundry Solutions</p>
            <button className='bg-[#FFFFFF] my-10 text-blue px-4 py-2 rounded-lg'>Get Started</button>
        </div>
        <div>
            <img src={lady} alt="lady" />
        </div>
      
    </div>
  )
}

export default Hero
