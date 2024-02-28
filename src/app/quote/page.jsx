import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <p className="text-xl text-center">
            MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE
            ELECTRICITY
          </p>
          <div className="mt-[42px] ">
            <Tabs defaultValue="recommended" className="">
              <TabsList className="flex gap-x-[34px]">
                <TabsTrigger
                  value="recommended"
                  className="text-[30px] font-bold  data-[state=inactive]:text-[#BBC1FF]/25"
                >
                  Recommended
                </TabsTrigger>
                <TabsTrigger
                  value="customize"
                  className="text-[30px] font-bold data-[state=inactive]:text-[#BBC1FF]/25"
                >
                  Customize
                </TabsTrigger>
              </TabsList>
              <TabsContent value="recommended">
                <ScrollArea className="h-[450px] w-full ">
                  <div className="mt-[55px] grid grid-cols-2 w-full gap-x-[30px]">
                    <div className="size-[400px] rounded-[10px] overflow-hidden">
                      <Image
                        src="https://picsum.photos/500/500"
                        width={500}
                        height={500}
                        alt="map"
                        className="w-full"
                      />
                    </div>
                    <div className="leading-[50px]">
                      <div className="">
                        <h2 className="text-[30px] font-bold">
                          Electricity Bill
                        </h2>
                        <p></p>
                      </div>
                      <div>
                        <h2 className="text-[30px] font-bold">System Size</h2>
                        <p className="text-[20px]">5.44 kW</p>
                      </div>
                      <div>
                        <h2 className="text-[30px] font-bold">
                          Estimated Yearly Production
                        </h2>
                        <p className="text-[20px]">9,711 kWh</p>
                      </div>
                      <div>
                        <h2 className="text-[30px] font-bold">
                          Number of Panels
                        </h2>
                        <p className="text-[20px]">9,711 kWh</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[55px]">
                    <div>
                      <h3 className="text-[30px] font-bold">Solar Panel</h3>
                      <div
                        type="text"
                        className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                      >
                        <p className="text-base">
                          Hanwha Q.PLUS L-G4.2 340 (x16)
                        </p>
                      </div>
                    </div>
                    <div className="mt-[17px]">
                      <h3 className="text-[30px] font-bold">Inverter</h3>
                      <div
                        type="text"
                        className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                      >
                        <p className="text-base">
                          Enphase IQ7PLUS-72-2- US(x16)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[55px]">
                    <div className="flex justify-between pr-10">
                      <div>
                        <h3 className="text-[30px] font-bold">Equipment</h3>
                        <ul className="list-disc list-inside text-[#999999]">
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                        </ul>
                      </div>
                      <p className="text-[20px] font-bold">$400</p>
                    </div>
                    <div className="flex justify-between pr-10 mt-[20px]">
                      <div>
                        <h3 className="text-[30px] font-bold">
                          Recurring Service
                        </h3>
                        <ul className="list-disc list-inside text-[#999999]">
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                        </ul>
                      </div>
                      <p className="text-[20px] font-bold">$400</p>
                    </div>
                    <div className="flex justify-between pr-10 mt-[20px]">
                      <div>
                        <h3 className="text-[30px] font-bold">
                          Installation Cost
                        </h3>
                        <ul className="list-disc list-inside text-[#999999]">
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                          <li>
                            Lorem ipsum, dolor sit amet consectetur adipisicing.
                          </li>
                        </ul>
                      </div>
                      <p className="text-[20px] font-bold">$400</p>
                    </div>

                    <hr className="h- w-full border border-white mt-5" />
                    <div className="flex justify-between pr-10 mt-[16px]">
                      <h3 className="text-[30px] font-bold">Total</h3>

                      <p className="text-[20px] font-bold">$400</p>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="customize">Customize</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
