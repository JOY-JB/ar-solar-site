import React from "react";
import BoxImage from "../../../../public/assets/images/uniqueSection/Box.png";
import AIImage from "../../../../public/assets/images/uniqueSection/AI.png";
import TagImage from "../../../../public/assets/images/uniqueSection/Tag.png";
import WandImage from "../../../../public/assets/images/uniqueSection/Wand.png";
import Image from "next/image";
const UniqueSection = () => {
  return (
    <div className="text-white py-[130px] bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-center">
      <h2 className="uppercase text-[50px] font-bold">UNIQUE US</h2>
      <p className="text-[30px]">
        We aspire in delivering the best and promising service to our clients
      </p>
      <div className="mt-[125px] flex justify-center items-center gap-x-[170px]">
        <div>
          <Image src={TagImage} alt="Box" className="w-[80px] mx-auto" />
          <p className="p-[20px]">Budget Pricing</p>
        </div>
        <div>
          <Image src={AIImage} alt="Box" className="w-[80px] mx-auto" />
          <p className="p-[20px]">Innovative and Fast Approach</p>
        </div>
        <div>
          <Image src={WandImage} alt="Box" className="w-[80px] mx-auto" />
          <p className="p-[20px]">Promising Longevity and maintenance</p>
        </div>
        <div>
          <Image src={BoxImage} alt="Box" className="w-[80px] mx-auto" />
          <p className="p-[20px]">Swift Installation</p>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
