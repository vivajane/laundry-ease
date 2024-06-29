import logo from "../assets/logolaundry.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";



const Header = () => {
    const [modal, setShowModal] = useState(false);
    const showModal = ()=> {
        setShowModal((prev) => !prev)

    }
   
  return (
    <div className={`relative font-inter text-base font-medium md:flex gap-8 justify-between items-center md:mx-24 mx-6 pt-4 ${modal && "overflow-hidden h-screen"}`}>
        <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="pr-6" />
        <div onClick={showModal} className="md:hidden">{modal ? <FaTimes/> : <GiHamburgerMenu/>}</div>

        </div>
        <ul className="md:flex hidden flex-1 gap-16 pl-10 text-[#FFFFFF]">
            <li className="hover:text-txtblue hover:underline hover:text-xl">Home</li>
            <li className="hover:text-txtblue hover:underline hover:text-xl">About Us</li>
            <li className="hover:text-txtblue hover:underline hover:text-xl">Our Services</li>
            <li className="hover:text-txtblue hover:underline hover:text-xl">Blog</li>
            <li className="hover:text-txtblue hover:underline hover:text-xl">Contact Us</li>
        </ul>
        <button className="md:block hidden text-blue bg-white px-4 py-2 rounded-lg">Partner with Us</button>
        <ul className={`w-full absolute top-16 h-screen text-center flex flex-col pl-10 mt-4 overflow-hidden ${modal ? "inset-0" : "hidden"}`}>
            <li className="py-4">Home</li>
            <li className="py-4">About Us</li>
            <li className="py-4">Our Services</li>
            <li className="py-4">Blog</li>
            <li className="py-4">Contact Us</li>
            <button className="py-4">Partner with Us</button>

        </ul>
      
    </div>
  )
}

export default Header
