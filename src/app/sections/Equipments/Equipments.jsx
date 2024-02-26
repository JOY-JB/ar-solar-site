import React from "react";
import PanelImage from "../../../../public/assets/images/equipments/panels.png";
import OptimizerImage from "../../../../public/assets/images/equipments/optimizer.png";
import Image from "next/image";
const Equipments = () => {
  return (
    <div className="py-[200px]  bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white ">
      <h1 className="text-[50px] text-center font-bold">EQUIPMENTS</h1>
      <div className="flex justify-center gap-x-[170px] mt-[75px]">
        <div className="flex flex-col items-center">
          <div className="size-80 mb-[80px]">
            <Image src={PanelImage} alt="Panel Image" />
          </div>
          <p className="text-[40px] font-bold">
            Hanwha Q.PLUS L-G4.2 340 (x16)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-80 mb-[80px]">
            <Image src={OptimizerImage} alt="Panel Image" />
          </div>
          <p className="text-[40px] font-bold">Enphase IQ7PLUS-72-2- US(x16)</p>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
