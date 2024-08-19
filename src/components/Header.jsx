import logo from "../assets/logolaundry.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import partner from "../assets/parner.png"
import email from "../assets/email.png"
import learn from "../assets/learn.png"

const Header = () => {
  const [modal, setShowModal] = useState(false);
  const showModal = () => {
    setShowModal((prev) => !prev)
  };

  return (
    <div>
      <div className="bg-bgimageAbout flex justify-center gap-10 items-center h-10 text-whit">
        <NavLink className="flex items-center gap-3">
          <img className="h-4" src={email} alt="email" />
          <p className="md:block hidden">Laundryease@gmail.com</p>
        </NavLink>
        <NavLink className="flex items-center gap-3">
          <img className="h-4" src={partner} alt="email" />
          <p>Partner with us</p>
        </NavLink>
        <NavLink className="flex items-center gap-3">
          <img className="h-4" src={learn} alt="email" />
          <p>Learn more</p>
        </NavLink>
      </div>
    <div className="bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8]">
      <div
        className={`relative font-inter text-base font-medium md:flex gap-8 justify-between items-center md:mx-24 mx-6 pt-4  ${
          modal && "overflow-hidden h-screen"
        }`}
      >
        <div className="flex justify-between items-center">
          <NavLink to="/"><img src={logo} alt="logo" className="pr-6" /></NavLink>
          <div onClick={showModal} className="md:hidden">
            {modal ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
        </div>
        <ul className="md:flex hidden flex-1 gap-16 pl-10 text-[#FFFFFF]">
          <NavLink to ="/" className="hover:text-txtblue hover:underline hover:text-xl">
            Home
          </NavLink>
          <NavLink to="aboutpage" className="hover:text-txtblue hover:underline hover:text-xl">
            About Us
          </NavLink>
          <NavLink to = "services" className="hover:text-txtblue hover:underline hover:text-xl">
            Our Services
          </NavLink>
          <NavLink to = "blog" className="hover:text-txtblue hover:underline hover:text-xl">
            Blog
          </NavLink>
          <NavLink to= "contact" className="hover:text-txtblue hover:underline hover:text-xl">
            Contact Us
          </NavLink>
        </ul>
        <NavLink to ="downlaodapp" className="md:block hidden text-blue bg-white px-4 py-2 rounded-lg">
          Download App
        </NavLink>
        <ul
          className={`w-full absolute top-16 h-screen text-center flex flex-col pl-10 mt-4 overflow-hidden ${
            modal ? "inset-0" : "hidden"
          }`}
        >
          <NavLink to="/" className="py-4">Home</NavLink>
          <NavLink to ="aboutpage" className="py-4">About Us</NavLink>
          <NavLink to ="services" className="py-4">Our Services</NavLink>
          <NavLink to ="blog" className="py-4">Blog</NavLink>
          <NavLink to ="contact" className="py-4">Contact Us</NavLink>
          <NavLink to ="downlaodapp" className="py-4">Download App</NavLink>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Header;
