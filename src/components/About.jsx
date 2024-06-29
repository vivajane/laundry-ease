import React from 'react';
import man from "../assets/ironman.png"

const About = () => {
  return (
    <div className='md:px-24 px-6 md:flex justify-between py-10'>
        <img  data-aos="fade-zoom-in"
                data-aos-offset="400"
                data-aos-easing="ease-in"
                data-aos-duration="900" src={man} alt="man" />
        <div  data-aos="slide-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
            <h1 className='font-poppins text-lg text-black font-semibold md:mt-2 mt-8'>ABOUT US</h1>
            <p className='py-6 font-poppins font-normal text-[16px]'>Welcome to LaundryEase, where we revolutionize the <br /> way you handle your laundry by combining <br /> convenience, quality, and efficiency.</p>
            <p className='pb-6 font-poppins font-normal text-[16px]'>
            Our mission is to provide a seamless, hassle-free <br /> laundry experience for busy individuals and families <br /> while empowering local laundromats to thrive in the <br /> digital age.
            </p>
            <button className='font-poppins font-[500px] px-4 py-2 text-txtblue rounded-lg border-blue-700 text-blue text-[16px] border-2 '>READ MORE</button>
        </div>
      
    </div>
  )
}

export default About
