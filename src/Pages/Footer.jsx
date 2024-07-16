import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-footer py-10 md:flex justify-between text-black md:px-24 px-6">
      <div>
        <h1 className="font-bold text-2xl">Laundry</h1>
        <p className="font-poppins font-[300px] text-xs py-6">
          Welcome to the future of laundry <br /> services. Welcome to
          LaundryEase
        </p>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-poppins font-[500px] text-xl my-4 md:my-0">Quick Links</h1>
        <NavLink className="font-[400px] text-[15px]" to="/">
          Home
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="about">
          About Us
        </NavLink>
        <NavLink className="font-[400px] text-[15px]" to="Blog">
          Blog
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="services">
          Our Services
        </NavLink>
        <NavLink className="font-[400px] text-[15px]" to="contact">
          Contact Us
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="partner">
          Partner with Us
        </NavLink>
      </div>
      <div className="flex flex-col">
        <h1 className="font-poppins font-[500px] text-xl my-4 md:my-0">Quick Features</h1>
        <NavLink className="font-[400px] text-[15px] " to="sewing">
          Sewing
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="ironing">
          Ironing
        </NavLink>
        <NavLink className="font-[400px] text-[15px]" to="fold">
          Wash & fold
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="clothes">
          Wet Clothes
        </NavLink>
        <NavLink className="font-[400px] text-[15px]" to="cleaning">
          Dry cleaning
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="laundry">
          Laundry
        </NavLink>
        <NavLink className="font-[400px] text-[15px]" to="pickup">
          Pick Up
        </NavLink>
        <NavLink className="font-[400px] text-[15px] py-1" to="delivery">
          Delivery
        </NavLink>
      </div>
      <form className="bg-white px-4 md:py-3 rounded-[10px] py-6 my-4 md:my-0" action="">
        <h1 className="font-poppins font-[600px] text-base pt-3">
          Suscribe to our Newsletter
        </h1>
        <div className="md:pb-1 pb-3 pt-3 ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="bg-gray-300 rounded w-[100%] py-3"
          />
        </div>
        <div className="md:pb-1 pb-3 pt-2">
          <button className="text-white  bg-download font-poppins font-[600px] text-base w-[100%] py-3 rounded">
            Subscribe Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Footer;
