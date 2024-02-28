import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white py-[92px]">
      <div className="grid grid-cols-3  mx-[134px] gap-x-[20px] ">
        <div className="col-span-1 bg-white/10 rounded-[20px] pt-[62px] pb-[105px] px-[100px]  ">
          <h2 className="text-[30px] font-bold">Equipment</h2>
          <ul className="list-disc list-inside">
            <li>Full Installation of pv system</li>
            <li>25 year solar system warranty on parts/labor</li>
            <li>Price includes all fees & sales tax</li>
          </ul>
          <div className="flex w-full gap-x-[20px] mt-[30px]">
            <label
              htmlFor="cash"
              className="flex peer-checked/cash:bg-transparent border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3 w-28 justify-center"
            >
              <input
                type="radio"
                id="cash"
                className=" peer/cash accent-white w-4 bg-none border-white "
                name="items"
                value="cash"
              />
              <span className="">Cash</span>
            </label>
            <label
              htmlFor="financial"
              className="flex justify-center peer-checked/financial:bg-transparent   border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg mb-3 w-28"
            >
              <input
                type="radio"
                id="financial"
                className=" peer/financial accent-white"
                name="items"
                value="financial"
              />
              <span>Financial</span>
            </label>
          </div>
          <div className="mt-[85px]">
            <div className="flex items-center">
              <p className="text-[40px] font-bold">$30,000.50</p>
              <p className="text-[20px] font-bold text-[#999999]">
                ($1.92/watt)
              </p>
            </div>
            <p className="text-base">
              * After Federal & State Incentives $30,000.50
            </p>
          </div>
          <div className="mt-[42px]">
            <div
              type="text"
              className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-full mt-[10px] pl-[10px] border border-[#BBC1FF]/25 "
            >
              <p className="text-base">Due Today</p>
            </div>
            <button className="bg-[#484F8E]/50 w-full py-[16px] mt-[22px] rounded-[10px]">
              Get Quote
            </button>
          </div>
        </div>
        <div className="col-span-2 bg-white/10 rounded-[20px] pt-[62px] pb-[105px] px-[134px]  ">
          asd
        </div>
      </div>
    </div>
  );
};

export default page;
