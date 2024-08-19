import hanger from "../assets/hanger.png";
import iphones from "../assets/iphones.png";
import machine from "../assets/washmachine.png";
import threemen from "../assets/threemen.png";
import vision from "../assets/vision.png";
import commitment from "../assets/commitment.png";
import empower from "../assets/empower.png";
import mark from "../assets/mark.png";

const Experience = () => {
  return (
    <div className=" md:px-24 px-6 md:flex gap-24 py-20  bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8] ">
        <div className="md:w-[50%] ">
          <h2 className="font-poppins text-white font-[400px] py-8 text-2xl md:pt-20">
            Experience the convenience and reliability of LaundryEase today.
          </h2>
          <ul>
            <li className="flex gap-3 items-center font-poppins text-base font-[400px]">
              <img className="h-4" src={mark} alt="mark" />
              <p className="py-2 text-white font-popinns font-[400px] text-base">
              Download our app.
              </p>
            </li>
            <li className="flex gap-3 items-center font-poppins text-base font-[400px]">
              <img className="h-4" src={mark} alt="mark" />
              <p className="text-white font-popinns font-[400px] text-base">
              schedule your first pickup.
              </p>
            </li>
            <li className="flex gap-3 items-center font-poppins text-base font-[400px]">
              <img className="h-4" src={mark} alt="mark" />
              <p className="py-2 text-white font-popinns font-[400px] text-base">
              Track your laundry.
              </p>
            </li>
            <li className="flex gap-3 items-center font-poppins text-base font-[400px]">
              <img className="h-4" src={mark} alt="mark" />
              <p className="text-white font-popinns font-[400px] text-base">
              Recieve your cleaned clothes.
              </p>
            </li>
            <li className="flex gap-3 items-center font-poppins text-base font-[400px]">
              <img className="h-4" src={mark} alt="mark" />
              <p className="py-2 text-white font-popinns font-[400px] text-base">
              Enjoy more free time and impeccably clean clothes with LaundryEase.
              </p>
            </li>
          </ul>
        </div>
        <img data-aos="slide-up"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600" className="mb-12 pt-6 md:pt-0 h-contain" src={iphones} alt="hanger" />
      </div>
  )
}

export default Experience
