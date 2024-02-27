import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#8DA1B6]/80 text-white flex px-[200px] justify-between h-[96px] items-center ">
      <p className="text-[20px] font-bold">
        SolarCo<sup>TM</sup> 2024
      </p>
      <div className="flex gap-x-[30px]">
        <span className="text-[20px] font-bold underline">About us</span>
        <span className="text-[20px] font-bold underline">
          Terms and Policies
        </span>
      </div>
    </div>
  );
};

export default Footer;
