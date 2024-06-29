import imageone from "../assets/leftfirst.png"
import imageonee from "../assets/rightfirst.png"
import imageoneee from "../assets/lefttwo.png"
import imageoneeee from "../assets/righttwo.png"
const Story = () => {
  return (
    <div className='bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8] md:flex justify-between md:px-24 px-6 py-20 '>
        <div  data-aos="slide-up"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
               >
            <h1 className='font-poppins font-semibold pb-4 text-[#FFFFFF] text-[16px]'>Our Story</h1>
            <h2 className='font-poppins font-semibold text-[#FFFFFF] text-[24px]'>LaundryEase was founded with a <br /> simple yet powerful idea:</h2>
            <p className='font-poppins text-[#FFFFFF] py-4 font-semibold text-[16px]'>To transform the traditional laundry process into a <br /> convenient, modern service that fits effortlessly into <br /> your busy lifestyle. We understand that juggling <br /> work, family, and personal time leaves little room <br /> for mundane chores like laundry. 
            <p className='font-poppins font-semibold text-[#FFFFFF] text-[16px] py-4'>Thats why we set out to create a solution that <br /> saves you time and effort, allowing you to focus on <br /> what truly matters</p>
            </p>
            <button className='font-poppins font-[500px] px-4 py-2 text-txtblue rounded-lg border-none bg-white text-blue text-[16px] border-2 '>READ MORE</button>
        </div>
        <div className="py-8 md:py-0" data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
               >
           <div className="relative flex justify-between ">
            <img className="" src={imageone} alt="one" />
            <img className="absolute right-[0px] top-[60px]" src={imageonee} alt="onee" />
           </div>
            <div className="relative flex justify-between pt-4 ">
             <img className="pr-2" src={imageoneee} alt="oneee" />
             <img className="" src={imageoneeee} alt="oneeee" />
            </div>

        </div>
      
    </div>
  )
}

export default Story

{/* <div  data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
               className="relative flex justify-between ">
            <img className="absolute -left-[250px]" src={imageone} alt="one" />
            <img className="absolute right-[110px] top-[60px]" src={imageonee} alt="onee" />
            <img className="absolute right-[320px] top-[240px]" src={imageoneee} alt="oneee" />
            <img className="absolutee" src={imageoneeee} alt="oneeee" />

        </div> */}
