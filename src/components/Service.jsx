import React from "react";
import logoone from "../assets/iron.png";
import logoonee from "../assets/laundry.png";
import logooneee from "../assets/sewingg.png";
import logooneeee from "../assets/washfold.png";
import logooneeeee from "../assets/pickup.png";
import logooneeeeee from "../assets/delivery.png";

const Service = () => {
  return (
    <div className="bg-services md:px-24 px-6 mx-auto">
      <h1 className="font-poppins font-semibold text-blac text-[24px] text-center mt-8 py-12">
        Our Services
      </h1>
      <p className="font-poppins font-normal text-blac text-[15px] text-center">
        At LaundryEase, we offer a comprehensive range of laundry services
        designed to meet your needs and ensure your garments <br /> receive the
        highest level of care. Our innovative app connects you with trusted
        local laundromats, bringing professional <br /> laundry services
        directly to your doorstep. Here is what we offer
      </p>
      <div className="mx-auto text-center">
        <div className="md:flex justify-between mt-14">
          <div>
            <img src={logoone} alt="one" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Ironing
            </h1>
          </div>
          <div className="my-6 md:my-0">
            <img src={logoonee} alt="two" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Laundry
            </h1>
          </div>
          <div>
            <img src={logooneee} alt="three" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Sewing
            </h1>
          </div>
        </div>
        <div className="md:flex justify-between py-8 ">
          <div>
            <img src={logooneeee} alt="four" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Wash &Fold
            </h1>
          </div>
          <div className="my-6 md:my-0">
            <img src={logooneeeee} alt="five" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Pick Up
            </h1>
          </div>
          <div>
            <img src={logooneeeeee} alt="six" />
            <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
              Delivery
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center pb-12"><button className='font-poppins font-[500px] px-4 py-2 text-txtblue rounded-lg border-blue-700 text-blue text-[16px] border-2 '>READ MORE</button></div>
    </div>
  );
};

export default Service;
