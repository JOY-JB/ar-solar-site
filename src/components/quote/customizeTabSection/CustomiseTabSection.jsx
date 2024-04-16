"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CustomizeTabSection = () => {
  const [numberOfPanel, setNumberOfPanel] = useState(16);

  const handleIncrement = () => {
    setNumberOfPanel((prev) => {
      if (prev < 100) {
        return prev + 1;
      }
      return prev;
    });
  };

  const handleDecrement = () => {
    setNumberOfPanel((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <div className="w-full">
      <div className="mt-[55px] grid md:grid-cols-2 w-full md:gap-x-[30px]">
        <div className="md:size-[400px] rounded-[10px] overflow-hidden">
          <Image
            src="/assets/images/roofImage.jpg"
            width={500}
            height={500}
            alt="map"
            className="w-full"
          />
        </div>
        <div className="space-y-4 md:space-y-0 leading-7 md:leading-[50px] mt-10 md:mt-0">
          <div className="">
            <h2 className="text-2xl md:text-[30px] font-bold">
              Electricity Bill
            </h2>
            <p className="text-[20px]">1000 Dollars</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-[30px] font-bold">System Size</h2>
            <p className="text-[20px]">5.44 kW</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-[30px] font-bold">
              Estimated Yearly Production
            </h2>
            <p className="text-[20px]">9,711 kWh</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-[30px] font-bold">
              Number of Panels
            </h2>
            <div className="bg-[#BBC1FF]/25 w-fit rounded-xl mt-4">
              <button className="p-4" onClick={handleDecrement}>
                <FaMinus />
              </button>
              <input
                type="number"
                min={0}
                value={numberOfPanel}
                readOnly
                className="w-20 bg-transparent outline-none border-0 text-center text-xl"
              />
              <button className="p-4" onClick={handleIncrement}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[55px]">
        <div>
          <h3 className="text-2xl md:text-[30px] font-bold">Solar Panel</h3>
          <Select>
            <SelectTrigger className="rounded-[10px] bg-[#BBC1FF]/25 py-[12px] md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 ">
              <SelectValue placeholder="Hanwha Q.PLUS L-G4.2 340 (x16)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                Hanwha Q.PLUS L-L65.2 180 (x8)
              </SelectItem>
              <SelectItem value="dark">
                Hanwha H.PLUS L-G32.2 320 (x32)
              </SelectItem>
              <SelectItem value="system">
                Hanwha F.PLUS F-G4.2 340 (x16)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-[17px]">
          <h3 className="text-2xl md:text-[30px] font-bold">Inverter</h3>
          <div
            type="text"
            className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
          >
            <p className="text-base">Enphase IQ7PLUS-72-2- US(x16)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeTabSection;
