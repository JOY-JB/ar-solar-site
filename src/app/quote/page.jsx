"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import CustomizeTabSection from "../../components/quote/customizeTabSection/CustomiseTabSection";

const QuotePage = () => {
  const [isRecommended, setIsRecommended] = useState(true);
  const [paymentType, setPaymentType] = useState("cash");

  return (
    <div className="h-fit bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white py-8 px-4 md:py-[92px]">
      <div className="grid grid-cols-3 md:mx-[134px] gap-x-[20px] relative h-fit">
        <div className="md:sticky top-[92px] left-0 md:h-[720px] col-span-3 md:col-span-1 bg-white/10 rounded-[20px] md:pt-[62px] md:pb-[105px] md:px-24 p-8 md:p-0 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Equipment</h2>
          <ul className="list-disc list-inside leading-7">
            <li>Full Installation of pv system.</li>
            <li>25 year solar system warranty.</li>
            <li>Price includes all fees & sales tax.</li>
          </ul>
          <div className="flex w-full gap-x-[20px] mt-[30px] justify-center items-center">
            <label
              htmlFor="cash"
              className="flex justify-center border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg"
              onClick={() => setPaymentType("cash")}
            >
              <input
                type="radio"
                id="cash"
                className="peer/cash accent-white w-4 bg-none border-white "
                name="items"
                value="cash"
                checked={paymentType === "cash"}
              />
              <span className="text-xl font-semibold">Cash</span>
            </label>
            <label
              htmlFor="financial"
              className="flex justify-center border gap-x-3 p-3 rounded-md cursor-pointer shadow-lg"
              onClick={() => setPaymentType("financing")}
            >
              <input
                type="radio"
                id="financial"
                className="peer/financial accent-white"
                name="items"
                value="financial"
                checked={paymentType === "financing"}
              />
              <span className="text-xl font-semibold">Financial</span>
            </label>
          </div>
          <div className="mt-[85px]">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-2xl md:text-3xl font-bold">$30,000.50</p>
              <p className="text-sm md:text-lg font-bold text-[#999999]">
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
        <div className="col-span-3 md:col-span-2">
          <div className=" bg-white/10 rounded-[20px] md:pt-[62px] md:pb-[105px] md:px-[134px] p-8">
            <p className="text-base md:text-xl text-center">
              MILLIONS OF PEOPLE SHIFTING TO SOLAR ENERGY, REPLACING THE
              ELECTRICITY
            </p>
            <div className="mt-[42px] ">
              <Tabs
                defaultValue="recommended"
                onValueChange={(e) =>
                  e === "recommended"
                    ? setIsRecommended(true)
                    : setIsRecommended(false)
                }
              >
                <TabsList className="flex gap-x-[34px]">
                  <TabsTrigger
                    value="recommended"
                    className="text-2xl md:text-[30px] font-bold text-[#BBC1FF]/35 data-[state=active]:text-white"
                  >
                    Recommended
                  </TabsTrigger>
                  <TabsTrigger
                    value="customize"
                    className="text-2xl md:text-[30px] font-bold text-[#BBC1FF]/35 data-[state=active]:text-white"
                  >
                    Customize
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="recommended">
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
                          <h2 className="text-2xl md:text-[30px] font-bold">
                            System Size
                          </h2>
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
                          <p className="text-[20px]">16</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[55px]">
                      <div>
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Solar Panel
                        </h3>
                        <div
                          type="text"
                          className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                        >
                          <p className="text-base">
                            Hanwha Q.PLUS L-G4.2 340 (x16)
                          </p>
                        </div>
                      </div>
                      <div className="mt-[17px]">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Inverter
                        </h3>
                        <div
                          type="text"
                          className="block rounded-[10px] bg-[#BBC1FF]/25 py-[12px] md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                        >
                          <p className="text-base">
                            Enphase IQ7PLUS-72-2- US(x16)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="customize">
                  <CustomizeTabSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          {isRecommended && (
            <>
              <div className="bg-white/10 rounded-[20px] md:pt-[62px] md:pb-[105px] md:px-[134px] p-8 mt-8 relative right-0">
                <Tabs
                  defaultValue="cash"
                  value={paymentType}
                  onValueChange={(e) => setPaymentType(e)}
                >
                  <TabsList className="flex gap-x-[34px] mt-[35px]">
                    <TabsTrigger
                      value="cash"
                      className="text-2xl md:text-[30px] font-bold text-[#BBC1FF]/35 data-[state=active]:text-white"
                    >
                      Cash
                    </TabsTrigger>
                    <TabsTrigger
                      value="financing"
                      className="text-2xl md:text-[30px] font-bold text-[#BBC1FF]/35 data-[state=active]:text-white"
                    >
                      Financing
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cash">
                    <div className="mt-[35px]">
                      <div className="flex justify-between pr-10">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Equipment
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>Full installation of pv system.</li>
                            <li>
                              25 year monitoring and service of solar system.
                            </li>
                            <li>Price includes all fees & sales tax.</li>
                          </ul>
                        </div>
                        <p className="text-[20px] font-bold">$1200</p>
                      </div>
                      <div className="flex justify-between pr-10 mt-[20px]">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Recurring Service
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>
                              10 Years of equipment deep-cleaning, available
                              every 24 months ($1,000 value).
                            </li>
                            <li>
                              24/7 consumption & production monitoring ($1,500
                              value).
                            </li>
                            <li>
                              10% on all future products/services (battery,
                              reroof, repair, etc).
                            </li>
                            <li>
                              Additional benefits will be covered during the
                              onboarding call.
                            </li>
                          </ul>
                        </div>
                        <p className="text-[20px] font-bold">$600 </p>
                      </div>
                      <div className="flex justify-between pr-10 mt-[20px]">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Installation Cost
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>
                              Initial site inspection and consultation to
                              evaluate your energy needs.
                            </li>
                            <li>
                              Full installation of solar panels, including
                              mounting hardware.
                            </li>
                            <li>
                              Electrical wiring, inverter installation, and grid
                              connection setup.
                            </li>
                            <li>
                              Administrative costs for permits and paperwork
                              required by local regulations.
                            </li>
                          </ul>
                        </div>
                        <p className="text-[20px] font-bold">$400</p>
                      </div>

                      <hr className="w-full border border-white mt-5" />
                      <div className="flex justify-between pr-10 mt-[16px]">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Total
                        </h3>

                        <p className="text-[20px] font-bold">$2200</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="financing">
                    <div className="mt-[35px]">
                      <div className="flex justify-between pr-10">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Equipment
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>Full installation of pv system.</li>
                            <li>
                              25 year monitoring and service of solar system.
                            </li>
                            <li>Price includes all fees & sales tax.</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-between pr-10 mt-[20px]">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Recurring Service
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>
                              10 Years of equipment deep-cleaning, available
                              every 24 months ($1,000 value).
                            </li>
                            <li>
                              24/7 consumption & production monitoring ($1,500
                              value).
                            </li>
                            <li>
                              10% on all future products/services (battery,
                              reroof, repair, etc).
                            </li>
                            <li>
                              Additional benefits will be covered during the
                              onboarding call.
                            </li>
                          </ul>
                        </div>
                        <p className="text-[20px] font-bold">(Included)</p>
                      </div>
                      {/* <div className="flex justify-between pr-10 mt-[20px]">
                        <div>
                          <h3 className="text-2xl md:text-[30px] font-bold">
                            Installation Cost
                          </h3>
                          <ul className="list-disc list-inside text-[#999999]">
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing.
                            </li>
                            <li>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing.
                            </li>
                          </ul>
                        </div>
                        <p className="text-[20px] font-bold">$400</p>
                      </div> */}

                      <hr className="w-full border border-white mt-5" />
                      <div className="flex justify-between pr-10 mt-[16px]">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Monthly Financing Cost
                        </h3>

                        <p className="text-[20px] font-bold">$400</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="bg-white/10 rounded-[20px] md:pt-[62px] md:pb-[105px] md:px-[134px] p-8 mt-8 relative right-0">
                <div className="mt-[35px]">
                  <div className="mt-12 md:mt-[20px]">
                    <h3 className="text-2xl md:text-[30px] font-bold text-center">
                      THE FACTS
                    </h3>
                    <p className="text-lg md:text-xl text-center mt-[20px]">
                      More solar will be installed in the United States in the
                      next two years than the last 40+ years combined
                    </p>
                    <div className="mt-[76px] grid md:grid-cols-3 gap-y-14 md:gap-y-0 md:gap-x-4">
                      <div className="flex flex-col items-center gap-y-2 md:gap-y-3">
                        <Image
                          src="https://picsum.photos/500/500"
                          width={500}
                          height={500}
                          alt="map"
                          className="size-[71px] rounded-full"
                        />
                        <p className="text-xl md:text-3xl">5</p>
                        <p className="text-center">Tons of CO2 Offset</p>
                      </div>
                      <div className="flex flex-col items-center gap-y-2 md:gap-y-3">
                        <Image
                          src="https://picsum.photos/500/500"
                          width={500}
                          height={500}
                          alt="map"
                          className="size-[71px] rounded-full"
                        />
                        <p className="text-xl md:text-3xl">$ 16,592</p>
                        <p className="text-center">
                          Estimated Value Added to Your Home
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-y-2 md:gap-y-3">
                        <Image
                          src="https://picsum.photos/500/500"
                          width={500}
                          height={500}
                          alt="map"
                          className="size-[71px] rounded-full"
                        />
                        <p className="text-xl md:text-3xl">161</p>
                        <p className="text-center">
                          Equivalent Number of Trees Planted
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
