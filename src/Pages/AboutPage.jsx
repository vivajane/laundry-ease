import React from "react";
import Section from "../components/Section";
import hanger from "../assets/hanger.png";
// import iphones from "../assets/iphones.png";
import machine from "../assets/washmachine.png";
import threemen from "../assets/threemen.png";
import vision from "../assets/vision.png";
import commitment from "../assets/commitment.png";
import empower from "../assets/empower.png";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Section title="About Us" />
      </div>

      <div className="flex md:px-24 px-6 md:flex gap-24 pt-10 my-10">
        <img src={machine} alt="machine" />
        <div>
          <h2 className="font-merriweather font-bold text-2xl">About Us</h2>
          <p className="py-4 font-poppins text-base font-[200px] md:font-[400px]">
            Welcome to LaundryEase, your go-to solution for all your laundry
            needs. We are dedicated to transforming the way you manage your
            laundry by offering a seamless, convenient, and reliable service
            that fits perfectly into your busy lifestyle. LaundryEase connects
            you with trusted local laundromats, bringing professional laundry
            services right to your doorstep.
          </p>
          <p className="py-4 font-poppins text-base font-[200px] md:font-[400px]">
            Welcome to LaundryEase, your go-to solution for all your laundry
            needs. We are dedicated to transforming the way you manage your
            laundry by offering a seamless, convenient, and reliable service
            that fits perfectly into your busy lifestyle. LaundryEase connects
            you with trusted local laundromats, bringing professional laundry
            services right to your doorstep.
          </p>
        </div>
      </div>

      <div className="flex md:px-24 px-6 md:flex gap-24 py-20 my-10 bg-customers">
        <div className="">
          <h2 className="font-merriweather font-bold text-2xl pt-20">
            Our Story
          </h2>
          <p className="py-12 font-merriweather text-base font-[200px]  md:font-[400px] text-[#000000]">
            LaundryEase was born out of a simple yet powerful idea: to make
            laundry day stress-free and effortless. We understand the challenges
            that come with juggling work, family, and personal time, and how
            laundry can often be a time-consuming and inconvenient task. Our
            goal is to provide a service that not only saves you time but also
            ensures your clothes are treated with the utmost care.
          </p>
        </div>
        <img className="mb-12 h-contain  w-[50%]" src={hanger} alt="hanger" />
      </div>

      <div className="flex md:px-24 px-6 md:flex gap-24 pt-10 my-10 justify-between items-start">
        <img className="w-[50%]" src={threemen} alt="men" />
        <div className="font-poppins text-base font-[500px]">
          <h2 className="font-merriweather font-bold text-2xl">What We Do</h2>
          <p className="py-4 font-poppins text-base font-[200px] md:font-[400px]">
            At LaundryEase, we bridge the gap between consumers and local
            laundromats through our user-friendly mobile application. Our
            platform offers a variety of features designed to simplify and
            enhance your laundry experience
          </p>
          <p className="py-4">
            <strong>Easy Scheduling:  </strong>
            Arrange for laundry pickups and deliveries at times that suit your
            schedule, ensuring maximum convenience.
          </p>
          <p>
            <strong>Real-Time picking:  </strong>
            Keep track of your laundry from pickup to delivery with real-time
            updates and notifications.
          </p>
          <p className="py-4">
            <strong>Customizable service:  </strong>
             Personalize your laundry preferences, including detergent choice,
            folding methods, and special instructions, to ensure your clothes
            are cleaned just the way you like them
          </p>
          <p>
            <strong>Quality Assurance:  </strong>
             We partner with reputable local laundromats that uphold high
            standards of quality and reliability, giving you peace of mind that
            your garments are in expert hands.
          </p>
        </div>
      </div>
      <div className="md:px-24 px-6 grid grid-cols-3 gap-3 bg-customers py-14">
        <div className="bg-[#FFFFFF] px-6 py-4">
        <div className="flex gap-4 items-center">
          <img className="h-4" src={vision} alt="vision" />
          <h3 className="text-bluey font-bold text-base font-merriweather">Our Mission</h3>
        </div>
        <p className="pt-3 font-poppins text-[14px] font-[400px]">Our mission at LaundryEase is to revolutionize the laundry experience by making it as convenient and efficient as possible. We aim to provide top-notch laundry services that cater to the diverse needs of our customers, all while supporting local laundromats and promoting eco-friendly practices.</p>
        </div>
        <div className="bg-[#FFFFFF] px-4 py-4">
        <div className="flex gap-4 items-center pb-2 ">
          <img className="h-4" src={empower} alt="empower" />
          <h3 className="text-bluey font-bold text-base font-merriweather">Our Empowering Local businesses</h3>
        </div>
        <p className="pt-2 font-poppins text-[14px] font-[400px]">We believe in the power of community and the importance of supporting local businesses. By partnering with local laundromats, LaundryEase helps these businesses expand their customer base, streamline their operations, and increase their revenue.</p>
        </div>
        <div className="bg-[#FFFFFF] px-6 py-4">
        <div className="flex gap-4 items-center">
          <img className="h-4" src={commitment} alt="commitment" />
          <h3 className="text-bluey font-bold text-base font-merriweather">Our Commitment</h3>
        </div>
        <p className="pt-4 font-poppins text-[14px] font-[400px]">LaundryEase is committed to delivering exceptional service and ensuring customer satisfaction. We continuously strive to improve our platform and services based on user feedback and emerging trends in the laundry industry</p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
