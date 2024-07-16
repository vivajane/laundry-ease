import imageone from "../assets/leftfirst.png";
import imageonee from "../assets/rightfirst.png";
import imageoneee from "../assets/lefttwo.png";
import imageoneeee from "../assets/righttwo.png";
import one from "../assets/easy.png";
import onee from "../assets/real.png";
import oneee from "../assets/quality.png";
import oneeee from "../assets/real.png";
import oneeeee from "../assets/trust.png";
const Story = () => {
  return (
    <div className="bg-gradient-to-r from-[#184892] via-[#2061C5] to-[#287AF8] md:px-24 px-6 ">
      <div className="pt-10">
        <h1 className="font-poppins md:font-semibold md:text-[18px] text-whit text-center py-4">Why Choose Us</h1>
        <p className="font-poppins font-normal md:text-[24px] text-whit text-center">At LaundryEase, we connect users with a network of trusted local laundromats <br /> and laundry service providers through our user-friendly mobile app.</p>
      </div>
      <div className="md:flex py-20 justify-between ">
        <div
          data-aos="slide-up"
          data-aos-delay="400"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div>
            <div className="flex gap-4 mb-4 ">
              <img src={one} alt="one" className="h-fit" />
              <div className="w-">
                <h1 className="font-poppins text-[24px] text-whit font-[500px]">
                  Easy Scheduling
                </h1>
                <p className="font-poppins text-base text-whit font-[400px]">
                  Arrange for laundry pickups and deliveries <br /> at your
                  convenience, with flexible time slots <br /> that fit your
                  schedule.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <img src={onee} alt="onee" className="h-fit" />
              <div>
                {" "}
                <h1 className="font-poppins text-[24px] text-whit font-[500px]">
                  Real-Time Tracking
                </h1>
                <p className="font-poppins text-base text-whit font-[400px]">
                  Stay updated on the status of your laundry <br /> with
                  real-time tracking and notifications
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <img src={oneee} alt="oneee" className="h-fit" />
              <div>
                <h1 className="font-poppins text-[24px] text-whit font-[500px]">
                  Quality Assurance
                </h1>
                <p className="font-poppins text-base text-whit font-[400px]">
                  Rest easy knowing your laundry is handled <br /> by
                  experienced professionals who prioritize <br /> quality and
                  care.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img src={oneeee} alt="oneeee" className="h-fit" />
              <div>
                <h1 className="font-poppins text-[24px] text-whit font-[500px]">
                  Trusted Local Partners
                </h1>
                <p className="font-poppins text-base text-whit font-[400px]">
                  We partner with the best local laundromats <br /> to ensure
                  your garments receive top-notch <br /> care. Our partners are
                  carefully selected for <br />
                  their quality and reliability, so you can trust <br /> that
                  your clothes are in expert hands.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="relative flex gap-2 ">
            <img className="w-[190px]" src={imageone} alt="one" />
            <img
              className="absolute md:-right-[10px] w-[140px] top-[40px] -right-[0px] md:top-[60px]"
              src={imageonee}
              alt="onee"
            />
          </div>
          <div className="relative flex gap-2 pt-4 ">
            <img className="w-32 h-fit" src={imageoneee} alt="oneee" />
            <img className="rounded w-48 h-fit" src={imageoneeee} alt="oneeee" />
          </div>
        </div>
      </div>
      <div className="px-20 md:pb-16 py-10 md:py-0">
        <button className="font-poppins font-[500px] px-4 py-2 text-txtblue rounded-lg bg-white  text-[16px] border-2 ">
          READ MORE
        </button>
      </div>
      
    </div>
  );
};

export default Story;

{
  /* <div  data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
               className="relative flex justify-between ">
            <img className="absolute -left-[250px]" src={imageone} alt="one" />
            <img className="absolute right-[110px] top-[60px]" src={imageonee} alt="onee" />
            <img className="absolute right-[320px] top-[240px]" src={imageoneee} alt="oneee" />
            <img className="absolutee" src={imageoneeee} alt="oneeee" />

        </div> */
}
