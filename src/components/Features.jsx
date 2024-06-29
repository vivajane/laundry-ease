import React from 'react';
import one from "../assets/Sewing.png"
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/laundryy.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";








const Features = () => {
  return (
    <div className='md:px-24 px-6'>
        <h1 className='font-merriweather text-black font-bold text-3xl text-center mt-6'>Features</h1>
      <div className='md:flex gap-16 text-center grid grid-cols-2 justify-center mx-auto font-inter font-normal text-2xl'>
        <div>
            <img src={one} alt="s" className='' />
            <p>Sewing</p>
        </div>
        <div>
            <img src={two} alt="i" />
            <p>Ironing</p>
        </div>
        <div>
            <img src={three} alt="t" />
            <p>Wash & Fold</p>
        </div>
        <div>
            <img src={four} alt="f" />
            <p>Laundry</p>
        </div>
      </div>
      <div className='md:flex gap-16 text-center mx-auto justify-center font-inter font-normal text-2xl grid grid-cols-2 md:mt-1 mt-4'>
      
        <div className='md:pr-4 pt-8 md:pt-0'>
            <img src={five} alt="fi" />
            <p className='font-inter font-normal text-2xl'>Delivery</p>
        </div>
        <div className='md:pr-8 pt-2 pb-8'>
            <img src={six} alt="si" />
            <p>Dry Cleaning</p>
        </div>
        <div className='md:pt-10 pl-8 pt-6'>
            <img src={seven} alt="se" />
            <p className='md:pt-10 '>Wet Clothes</p>
        </div>
        <div className='mb-14'>
            <img src={eight} alt="" />
            <p>Pick Up</p>
        </div>

      </div>
     
      
    </div>
  )
}

export default Features
