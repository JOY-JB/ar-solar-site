import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white py-[92px]">
      <div className="pt-[62px] pb-[105px] px-[134px] rounded-[20px] mx-[134px] bg-white/10 ">
        <h1 className="text-xl text-center mb-[109px]">
          MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE ELECTRICITY
        </h1>
        <h2 className="text-left text-[30px] font-bold">
          PROPERTY AND UTILITY BILL
        </h2>
        <form className="grid grid-cols-2 gap-x-[117px] ">
          <div className="flex flex-col mt-[55px] gap-y-[20px]">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              />
            </div>
            <div>
              <label htmlFor="bill">Electricity Bill</label>
              <input
                type="number"
                className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25"
              />
            </div>

            <button className="bg-[#484F8E]/50 w-full py-[27px] mt-[78px] rounded-[10px]">
              Get Quote
            </button>
          </div>
          <div>
            <div>
              <input
                placeholder="Home Address"
                type="text"
                className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25 placeholder-white/50 text-center"
              />
            </div>
            <div className="mt-[20px] w-full  rounded-[10px] bg-red-400 overflow-hidden size-[440px]">
              <Image
                src="https://picsum.photos/500/500"
                width={500}
                height={500}
                alt="map"
                className="w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
