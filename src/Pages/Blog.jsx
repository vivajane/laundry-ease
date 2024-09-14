import React from "react";
import Section from "../components/Section";
import Footer from "./Footer";
import hug from "../assets/hug.png";
import phone from "../assets/bloglogo.png"
import machine from "../assets/blogmachine.png";
import ReadMore from "../components/ReadMore";
import dress from "../assets/blogdress.png"
import shirt from "../assets/blogshirt.png"

const Blog = () => {
  return (
    <div>
      <Section title="Blog" />

      <Revolution
        text="Uber-Laundry is a convenient, on-demand laundry and dry-cleaning
          service that connects you to trusted local laundry vendors in your
          area. With just a few clicks, you can have your laundry picked up,
          cleaned, and delivered right to your doorstep. Our platform is
          designed to make laundry day a breeze, providing you with a seamless
          and reliable experience every time."
        theme="Revolutionize Your Laundry Day with Uber-Laundry: The Ultimate Solution for Busy Lives" image= {machine}
      />
      <Revolution theme="How Uber-Laundry Supports Sustainable Laundry Practice" text=" Sustainability is more than a trend; it’s a way of life that can make a significant impact on the environment. At Uber-Laundry, we believe that clean clothes shouldn’t come at the cost of a clean planet. Discover how our services are designed with sustainability in mind." image= {hug}/>
      
      <Join/>
      <Revolution theme="Laundry Hacks: 7 Tips to Keep Your Clothes Looking New Longer" text="Tired of your favorite clothes fading or losing their shape too quickly? Proper laundry care can make all the difference! Here are seven laundry hacks that will keep your garments looking fresh, vibrant, and new for longe" image= {dress}/>
      <Revolution theme="A Busy Professional’s Guide to Managing Laundry with Uber-Laundry" text=" you’re a busy professional, you know how hard it is to balance work, life, and everything in between. Laundry often gets pushed to the bottom of the to-do list. But with Uber-Laundry, you can maintain a fresh wardrobe without sacrificing your precious time. Here’s how" image= {shirt}/>
    </div>
  );
};

export default Blog;

const Revolution = ({ text, theme, image }) => {
  return (
    <div className="md:pt-6 pb-6 md:px-24 px-6 mx-auto">
      <div className="md:flex gap-12 mx-auto px-4 mt-6 mb-10 py-8 ">
        <img className="rounded-md w-auto" src={image} alt="eight" />
        <div className="pt-2">
          <h1 className="Merriweather font-bold text-[20px] py-8">{theme}</h1>
          <p className="py-3 text-poppins text-base pb-16 ">{text}</p>
          <ReadMore />
        </div>
      </div>
    </div>
  );
};

const Join = ()=> {
    return <div className=" md:px-24 md:mx-24 mx-6 mb-8 px-6 md:flex gap-24 pt-10 bg-[#9FDFFA]">
    <div className="md:w-[50%] py-8 ">
        <h3 className="text-poppins text-[20px] font-semibold">Special Article:</h3>
      <h2 className="font-merriweather font-[700px] text-[26px] md:pt-8">
      Join the Uber-Laundry Revolution Today!
      </h2>
      <p className="text-poppins text-[16px] mt-10 font-normal">
      It’s time to say goodbye to laundry day stress and hello to more free time. With Uber-Laundry, you can enjoy a convenient, reliable, and affordable laundry service that’s tailored to your needs. Download the app and discover the smarter way to do laundry!
      </p>
      <p>Clean clothes, less hassle. LaundryEase has got you covered</p>
      <button className="text-[#0F26A6] px-4 py-2 text-poppins text-base font-[600px]">Read More</button>
    </div>
    <img data-aos="slide-up"
      data-aos-delay="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600" className="mb-12 pt-6 md:pt-0 h-contain" src={phone} alt="hanger" />
  </div>
}
