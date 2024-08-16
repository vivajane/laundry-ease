import { NavLink } from "react-router-dom"
import partner from "../assets/parner.png"
import email from "../assets/email.png"
import learn from "../assets/learn.png"
const Section = ({title}) => {
    return (
        <div >
            <div className="bg-bgimageAbout flex justify-center gap-10 items-center h-10 text-whit">
        <NavLink className="flex items-center gap-3">
          <a href="mailto:laundryease@gmail.com"><img className="h-4" src={email} alt="email" /></a>
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
      <div className="bg-bgimgabt md:bg-contain md:h-auto w-full h-auto bg-bgimageAbout bg-cover bg-no-repeat bg-opacity-50 bg-blend-overlay overflow-hidden  ">
          <p className="font-merriweather font-bold text-4xl text-whit text-center py-32">{title}</p>
      
      </div>
      </div>
    )
  }
  
  export default Section
  