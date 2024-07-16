import React from "react";
import customerone from "../assets/customerone.png"
import customertwo from "../assets/customertwo.png"
import customerthree from "../assets/customerthree.png"
import customerfour from "../assets/customerfour.png"

const Customers = () => {
  return (
    <div className="bg-customers md:px-24 px-6">
      <div className="text-center py-8">
        <h1 className="font-poppins py-8 font-semibold text-black text-[24px]">What Our Customers Are Saying</h1>
        <p className="font-poppins font-medium text-black text-[16px] text-center">
          At LaundryEase, our mission is to provide an unparalleled laundry
          service experience that saves you time and effort while ensuring your
          clothes are impeccably clean. But don’t just take our word for
          it—hear what our satisfied customers have to say!
        </p>
      </div>
      <div>
        <div className="md:flex justify-between py-6">
          <div className="flex gap-4 pb-8 md:pb-0">
            <img className="h-fit" src={customerone} alt="one" />
            <div>
              <p className="font-poppins font-normal text-black text-[14px]">
                &quot;LaundryEase has made my life so much easier. I can <br />{" "}
                schedule pickups and deliveries at times that work for me,{" "}
                <br /> and I always know exactly when my laundry will be ready{" "}
                <br /> thanks to the real-time tracking. The clothes come back{" "}
                <br /> fresh and perfectly folded. Highly recommend!&quot;
              </p>
              <h1 className="font-merriweather font-bold text-txtblue text-[18px]">-Adunni Adewale</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img className="h-fit" src={customertwo} alt="two" />
            <div>
            <p>
              &quot;As a college student, LaundryEase has been amazing. I <br /> dont
              have to worry about finding time to do laundry <br /> between classes and
              studying. The prices are reasonable, <br /> and the service is fast and
              efficient. I’ve recommended it <br /> to all my friends &quot;.
            </p>
            <h1 className="font-merriweather font-bold text-txtblue text-[18px]">-Mercy Effiong</h1>
            </div>
            
          </div>
        </div>
        <div className="md:flex justify-between pb-10">
          <div className="flex gap-4 pb-8 md:pb-0">
            <img className="h-fit" src={customerthree} alt="three" />
            <div>
              <p>
                &quot;I was skeptical at first, but LaundryEase exceeded all my <br />expectations. The app is intuitive, and the service is <br /> incredibly reliable. My clothes have never been cleaner,<br /> and I love that I can customize my laundry preferences. <br /> This service is a game-changer&quot;
              </p>
              <h1 className="font-merriweather font-bold text-txtblue text-[18px]">-Femi Ogunsanya</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img className="h-fit" src={customerfour} alt="four" />
            <div>
            <p>
              &quot;I love that LaundryEase partners with local laundromats. <br /> It feels good to support small businesses in my <br /> community while enjoying the convenience of a modern <br /> app. The quality and reliability of the service have been <br /> consistently excellent &quot;.
            </p>
            <h1 className="font-merriweather font-bold text-txtblue text-[18px]">-Tobechukwu Oscar</h1>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
