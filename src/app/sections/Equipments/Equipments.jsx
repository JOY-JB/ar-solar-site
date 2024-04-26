import Image from "next/image";
import OptimizerImage from "../../../../public/assets/images/equipments/optimizer.png";
import PanelImage from "../../../../public/assets/images/equipments/panels.png";
import Process from "../Process/Process";
const Equipments = () => {
  return (
    <div className="py-[200px] px-4 bg-gradient-to-tl from-[#1B2025] from-20% to-[#08090B] text-white h-full ">
      <h1 className="text-2xl md:text-5xl text-center font-bold uppercase mb-20">
        EQUIPMENTS
      </h1>
      <div className="flex justify-center gap-10 md:gap-x-[170px] mt-[75px]">
        <div className="flex flex-col items-center">
          <div className="size-28 md:size-80 mb-[80px]">
            <Image src={PanelImage} alt="Panel Image" />
          </div>
          <p className=" md:text-[40px] font-bold">
            Hanwha Q.PLUS L-G4.2 340 (x16)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-28 md:size-80 mb-[80px]">
            <Image src={OptimizerImage} alt="Panel Image" />
          </div>
          <p className=" md:text-[40px] font-bold">
            Enphase IQ7PLUS-72-2- US(x16)
          </p>
        </div>
      </div>
      <Process />

      <div className="mt-[200px]">
        <h1 className="text-xl md:text-5xl text-center font-bold uppercase mb-10">
          WARRANTY
        </h1>
        <p className="md:text-2xl text-center">
          More solar will be installed in the United States in the next two
          years than the last 40+ years combinded
        </p>
      </div>
    </div>
  );
};

export default Equipments;
