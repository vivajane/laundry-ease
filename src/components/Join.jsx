import React from 'react';
import code from "../assets/barcode.png"

const Join = () => {
  return (
    <div className='bg-join md:flex justify-between py-10  my-16 md:mx-64 mx-auto gap-28 px-10 md:rounded-[40px] text-whit'>
        <div className='md:w-[50%]'>
            <h1 className='font-poppins font-semibold text-[24px] '>Join Us</h1>
            <p>Experience the convenience and reliability of LaundryEase today. Download our app, schedule your first pickup, and discover a new way to handle laundry one that fits effortlessly into your life. Let LaundryEase take care of your laundry needs, so you can enjoy more of what you love</p>
            <button className='bg-download my-6 px-4 py-3 rounded-2xl'>Download App</button>
        </div>
        <div>
            <img className='h-fitt' src={code} alt="code" />
        </div>
      
    </div>
  )
}

export default Join
