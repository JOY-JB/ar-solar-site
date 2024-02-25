import React from "react";
import person1 from "../../../../public/assets/images/testimonial/testimonial1.png";
import Image from "next/image";
const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B]">
      <div className="flex flex-col ">
        <div className="w-10/12 bg-[#484F8E] h-48 mx-auto rounded-b-[50px] flex justify-evenly text-white">
          <div className="flex flex-col items-center  justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">4.7</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">1,300+</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[40px]">Average Rating</h2>
            <span className="text-[80px]">
              80<span className="text-xl">days</span>
            </span>
          </div>
        </div>
        {/* <h1 className="text-[50px]">Testimonials</h1>
      <div>
        <Image src={person1} alt="person-1" />
      </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
