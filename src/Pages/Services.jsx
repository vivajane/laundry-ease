import React from "react";
import Section from "../components/Section";
import logoone from "../assets/iron.png";
import logoonee from "../assets/laundry.png";
import logooneee from "../assets/sewingg.png";
import logooneeee from "../assets/washfold.png";
import logooneeeee from "../assets/pickup.png";
import logooneeeeee from "../assets/delivery.png";
import Experience from "../components/Experience";

const Services = () => {
  return (
    <div>
      <div className="md:px-24 px-6">
        <Section title="Our Services" />
      </div>
      <div className="md:px-24 px-6">
        <p className="px-10 text-center font-poppins font-normal text-[20px] py-4">
          At LaundryEase, we offer a comprehensive range of laundry services
          designed to meet your <br /> needs and ensure your garments receive
          the highest level of care.
        </p>
        <div className="mx-auto text-center">
          <div className="md:grid grid-cols-3 mt-14 gap-6">
            <div className="flex flex-col justify-between">
              <img src={logoone} alt="one" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6">
                <h1 className="bg-[#FFFFFF] rounded-bl-xl rounded-br-xl py-4 text-center font-poppins text-[16px] font-[600px]">
                  Ironing
                </h1>
                <p >
                  Say goodbye to wrinkles and creases with our expert ironing
                  services. Our team meticulously irons each item to perfection,
                  so you can look your best without the hassle of doing it
                  yourself. Whether it&#39;s a crisp shirt for the office or a
                  delicate dress for a special occasion, we&#39;ll ve got it
                  covered.
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base py-2 rounded px-8 w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between my-8 md:my-0">
              <img src={logoonee} alt="two" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6 mt-8 md:mt-0">
                <h1 className="py-6 text-center font-poppins text-[16px] font-[600px] mt-0">
                  Laundry
                </h1>
                <p className="pb-6">
                  For delicate fabrics and special garments, our dry cleaning
                  service uses eco-friendly solvents to gently remove stains and
                  odors without damaging the fabric. From suits to evening
                  gowns, we ensure your clothes are returned in pristine
                  condition.
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base  py-2 rounded w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <img src={logooneee} alt="three" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6">
                <h1 className="py-8 text-center font-poppins text-[16px] font-[600px]">
                  Sewing
                </h1>
                <p>
                  Our professional sewing service is designed to provide
                  mending, and alteration services that keep your clothes in
                  perfect condition. Whether it’s a minor repair or a major
                  alteration, Laundryease ensures your wardrobe always looks its
                  fines
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base  py-2 rounded w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:grid grid-cols-3 gap-4 mt-14 py-8">
            <div className="flex flex-col justify-between">
              <img src={logooneeee} alt="four" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6">
                <h1 className="pt-12 pb-4 text-center font-poppins text-[16px] font-[600px]">
                  Wash &Fold
                </h1>
                <p>
                  Our wash & fold service is perfect for your everyday laundry
                  needs. Simply drop off your clothes, and we'll handle the
                  rest. We wash, dry, and neatly fold your items, so they are
                  ready to wear when you pick them up.
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base  py-2 rounded w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
            <div className="my-6 md:my-0 flex flex-col justify-between">
              <img src={logooneeeee} alt="five" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6">
                <h1 className="pt-10 pb-6 text-center font-poppins text-[16px] font-[600px]">
                  Pick Up
                </h1> 
                <p className="pb-10">
                  Our professional laundry service is designed to take the
                  hassle out of your weekly chores, providing you with clean,
                  fresh, and perfectly folded clothes, so you can focus on what
                  truly matters.
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base  py-2 rounded w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <img src={logooneeeeee} alt="six" />
              <div className="px-6 border-[1px] border-[#D9D9D9] pb-6">
                <h1 className="py-4 text-center font-poppins text-[16px] font-[600px]">
                  Delivery
                </h1>
                <p>
                  We understand that your time is valuable, which is why we
                  offer convenient pickup and delivery services. Simply schedule
                  a time that works for you, and our friendly team will collect
                  your laundry right from your doorstep. Once your clothes are
                  clean and fresh, we'll deliver them back to you at your
                  convenience. It’s that simple!
                </p>
                <div className="md:pb-1 pb-3 pt-2">
                  <button className="text-white  bg-download font-poppins font-[600px] text-base  py-2 rounded w-full">
                    Schedule Pickup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience/>
    </div>
  );
};

export default Services;
