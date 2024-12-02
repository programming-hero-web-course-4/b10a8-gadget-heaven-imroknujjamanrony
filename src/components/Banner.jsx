import banner from "../assets/banner.jpg";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-[#9538E2] pb-20 mb-96">
      <div>
        <div className="text-center">
          <h2 className="text-[#FFFFFF] text-5xl font-bold py-2">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h2>
          <p className="text-[#FFFFFF] font-normal text-base py-2">
            Explore the latest gadgets that will take your experience to <br />{" "}
            the next level. From smart devices to the coolest accessories, we
            have it all!
          </p>
          <div className="py-2 rounded-2xl">
            <NavLink to="/dashboard" className="btn rounded-lg">
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
      <div className="absolute left-[300px] top-[320px] pb-10 w-[700px]  ">
        <img className="w-full h-[300px]" src={banner} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Banner;
