import React from "react";
import Section from "../components/Section";
import Experience from "../components/Experience";
import first from "../assets/contactone.png";
import second from "../assets/contactwo.png";
import third from "../assets/contacthree.png";
import four from "../assets/contactfour.png";
import five from "../assets/contactfive.png";
import six from "../assets/contactsix.png";
import seven from "../assets/contactseven.png";
import eight from "../assets/contacteight.png";
import email from "../assets/email.png";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div>
      <Section title="Contact Us" />
      <Contact />
      <Experience />
    </div>
  );
};

export default ContactPage;

const Contact = () => {
  return (
    <div className="md:py-20 md:px-24 px-6 mx-auto">
      <div className=" md:flex gap-16 px-4 md:my-14">
        <div className="md:w-[40%]">
          <h1 className="font-poppins font-medium text-xl mt-12 py-6">Partner With Us</h1>
          <h1 className="font-poppins font-semibold text-2xl">Growing Together for Greater Success</h1>
          <p className="font-poppins font-normal text-base pt-6">
            At Laundryease, we believe in the power of collaboration. Our
            partnership service is designed to foster strong, mutually
            beneficial relationships with businesses and organizations looking
            to enhance their laundry and garment care solutions. By partnering
            with Laundryease, you gain access to top-tier laundry services,
            ensuring your clients and employees experience the best care
            possible
          </p>
          <button className="bg-download my-6 px-6 py-3 rounded-2xl">
            Download App
          </button>
        </div>
        <div className="flex gap-4">
          <div className="">
            <img className="my-2" src={first} alt="first" />
            <img className="my-2" src={third} alt="third" />
          </div>
          <div >
            <img className="my-2" src={second} alt="sec" />
            <img className="my-2" src={four} alt="four" />
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-3 py-14  ">
        <div className="bg-footer px-4 py-4 mx-3 shadow-lg rounded mb-2 md:mb-0 ">
          <img src={five} alt="five" />
          <h1 className="py-3 font-inter font-semibold text-xl">Customers Support</h1>
          <ul>
            <li>Call us on +234 705 668 321</li>
            <li>Email us at Support@Laundryease.com</li>
          </ul>
          <div className="flex bg-download gap-3 my-6 px-4 w-[220px] rounded-2xl text-white items-center justify-center">
            <button className="bg-download py-3 rounded-2xl text-white">
              <a className="w-full" href="mailto:Support@Laundryease.com">
                Email Customer Care
              </a>
            </button>
            <span>
              <img className=" h-3" src={email} alt="email" />
            </span>
          </div>
        </div>
        <div className="bg-footer px-4 py-4 mx-3 shadow-lg rounded mb-2 md:mb-0">
          <img src={six} alt="six" />
          <h1 className="py-3 font-inter font-semibold text-xl">Collaboration and Advertising</h1>
          <h1>Email us at Marketing@Laundryease.com</h1>
          <div className="flex bg-download gap-3 my-14 px-4 w-[220px] justify-center rounded-2xl text-white items-center">
            <button className="bg-download py-3 rounded-2xl text-white">
              <a className="w-full" href="mailto:Support@Laundryease.com">
                Email Media
              </a>
            </button>
            <span>
              <img className=" h-3" src={email} alt="email" />
            </span>
          </div>
        </div>
        <div className="bg-footer px-4 py-4 mx-3  rounded-md shadow-md mb-2 md:mb-0">
          <img src={seven} alt="seven" />
          <h1 className="py-3 font-inter font-semibold text-xl">Partner with us</h1>
          <h1>Interested in partnering with LaundryEase?</h1>
          <div className="flex gap-4 bg-download my-14 px-4 w-[220px] py-3 justify-center rounded-2xl text-white items-center">
            <button>Get Started</button>
            <span>
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
      <div className="md:flex gap-12 mx-auto px-4 my-12 py-8 ">
        <img className="rounded-md w-auto" src={eight} alt="eight" />
        <div>
        <div className="pt-8 mt-8" >
          <h1 className="font-poppins py-4 font-bold text-[24px[">Follow us on social media</h1>
        </div>
        <div className="flex gap-6 py-4">
          <div className="flex gap-1 items-center">
            <span>
              <FaFacebook />
            </span>
            <a href="#">@Laundryease</a>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FaInstagramSquare />
            </span>
            <a href="#">@Laundryease</a>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <span>
            <FaXTwitter />
          </span>
          <a href="#">@Laundryease</a>
        </div>
      </div>
      </div>
    </div>
  );
};
