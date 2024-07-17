import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-footer py-14 md:flex justify-between text-black md:px-24 px-6">
        <div>
          <h1 className="font-bold text-2xl">Laundry</h1>
          <p className="font-poppins font-[300px] text-xs py-6">
            Welcome to the future of laundry <br /> services. Welcome to
            LaundryEase
          </p>
          <div className="flex gap-10 py-6 ">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-poppins font-[500px] text-xl my-4 md:my-0">
            Quick Links
          </h1>
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
          <h1 className="font-poppins font-[500px] text-xl my-4 md:my-0">
            Quick Features
          </h1>
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
        <form
          className="bg-white px-4 md:py-3 rounded-[10px] py-6 my-4 md:my-0"
          action=""
        >
          <h1 className="font-poppins font-[600px] text-base pt-3">
            Suscribe to our Newsletter
          </h1>
          <div className="md:pb-1 pb-3 pt-3 ">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="bg-gray-300 rounded w-[100%] py-2"
            />
          </div>
          <div className="md:pb-1 pb-3 pt-2">
            <button className="text-white  bg-download font-poppins font-[600px] text-base w-[100%] py-2 rounded">
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
      <div className="md:px-24 px-6 bg-footer py-4">
        <p className="font-poppins font-[400px] text-sm flex">
          LaundryEase Is an online aggregator. We do not participate in
          cooperations <br /> between our users: they create and perform all requests
          in our app on their own
        </p>
        <div className="flex justify-between py-6">
          <ul className="flex gap-4 font-poppins text-[12px] font-[500px] ">
            <NavLink to="privacy">Privacy Policy</NavLink>
            <NavLink to>Terms of Use</NavLink>
            <NavLink>Cookiees Policy</NavLink>
          </ul>
          <p className="font-inter font-semibold text-xs">© 2024 LaundryEase</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
<div className="">
  <p>
    LaundryEase Is an online aggregator. We do not participate in cooperations
    between our users: they create and perform all requests in our app on their
    own
  </p>
  <div className="flex justify-between">
    <ul>
      <NavLink to="privacy">Privacy Policy</NavLink>
      <NavLink to>Terms of Use</NavLink>
      <NavLink>Cookiees Policy</NavLink>
    </ul>
    <p>© 2024 LaundryEase</p>
  </div>
</div>;
