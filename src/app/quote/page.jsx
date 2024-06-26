"use client";

import { defaultLatLng } from "@/Shared/DefaultData";
import UpgradeSection from "@/components/quote/UpgradeSection/UpgradeSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomizeTabSection from "../../components/quote/customizeTabSection/CustomiseTabSection";

const QuotePage = () => {
  const solarTypeList = ["Residential - 60 Cells", "Commercial - 72 Cells"];

  const [isRecommended, setIsRecommended] = useState(true);
  const [initialCount, setInitialCount] = useState(true);
  const [panelConfig, setPanelConfig] = useState(null);
  const [paymentType, setPaymentType] = useState("cash");
  const [quoteData, setQuoteData] = useState(null);
  const [myLatLng, setMyLatLng] = useState(null);
  const [unitPrice, setUnitPrice] = useState(0.12);
  const [totalKWH, setTotalKWH] = useState(0);
  const [panelCount, setPanelCount] = useState(0);
  const [systemSize, setSystemSize] = useState(0);
  const [yearlyProduction, setYearlyProduction] = useState(0);
  const [solarType, setSolarType] = useState(0);
  const [cost, setCost] = useState({
    equipment: 0,
    installationCost: 0,
  });
  const [upgradeCost, setUpgradeCost] = useState(0);

  const router = useRouter();

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const fetchQuoteData = useCallback(async () => {
    if (
      myLatLng &&
      myLatLng.lat &&
      myLatLng.lng &&
      quoteData &&
      quoteData.bill
    ) {
      const data = await fetch(
        `https://5dca-45-127-50-30.ngrok-free.app/getImage?lat=${myLatLng.lat}&lon=${myLatLng.lng}&bill=${quoteData.bill}`,
        {
          headers: {
            "ngrok-skip-browser-warning": true,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setPanelConfig(data));
    }
  }, [myLatLng]);

  useEffect(() => {
    const latLng = JSON.parse(localStorage.getItem("latLng"));
    const quoteData = JSON.parse(localStorage.getItem("quoteData"));

    if (!quoteData) {
      toast("Please Provide Your Information First!", {
        onClose: () => {
          router.push("/quote-form");
        },
      });

      return;
    }

    if (latLng) {
      setMyLatLng(latLng);
    } else {
      setMyLatLng(defaultLatLng);
    }

    setQuoteData(quoteData);
  }, []);

  useEffect(() => {
    fetchQuoteData();
  }, [fetchQuoteData]);

  useEffect(() => {
    const kWh = quoteData?.bill / unitPrice;
    const kW = kWh / (30 * 24);

    const EYP = kWh * 12;

    setYearlyProduction(EYP.toFixed(0));

    setSystemSize(kW.toFixed(2));
  }, [quoteData, unitPrice]);

  useEffect(() => {
    if (initialCount) {
      if (panelConfig) {
        const totalKWH = panelConfig?.all_pixel_coordinates.reduce(
          (acc, panel, index) => {
            if (yearlyProduction < acc) {
              return acc;
            }

            setPanelCount(index + 1);
            return acc + panel.yearlyEnergyDcKwh;
          },
          0
        );

        setTotalKWH(parseInt(totalKWH));

        setInitialCount(false);
      }
    } else {
      let totalKWH = 0;
      panelConfig?.all_pixel_coordinates.map((value, index) => {
        if (index + 1 >= panelCount) return 0;
        totalKWH += value.yearlyEnergyDcKwh;
      });

      setTotalKWH(parseInt(totalKWH));
    }
  }, [panelConfig, yearlyProduction, panelCount, initialCount]);

  useEffect(() => {
    if (panelConfig) {
      const totalKWH = panelConfig?.all_pixel_coordinates.reduce(
        (acc, panel, index) => {
          if (yearlyProduction < acc) {
            return acc;
          }

          setPanelCount(index + 1);
          return acc + (solarType == "0" ? 1 : 1.375) * panel.yearlyEnergyDcKwh;
        },
        0
      );

      setTotalKWH(parseInt(totalKWH));

      setInitialCount(false);
    }
  }, [solarType, panelConfig, yearlyProduction]);

  useEffect(() => {
    const equipmentCost = 2.8 * (panelCount * (solarType === "0" ? 400 : 550));
    const formattedEquipmentCost = equipmentCost.toFixed(0);
    const installationCost = (0.25 * equipmentCost).toFixed(0);

    setCost({
      equipment: formattedEquipmentCost,
      installationCost: installationCost,
    });
  }, [panelCount, solarType, cost.equipment]);

  return (
    <div className="h-fit bg-gradient-to-br from-[#1B2025] from-20% to-[#08090B] text-white py-8 px-4 md:py-[92px]">
      <div className="grid grid-cols-3 md:mx-[134px] gap-x-[20px] relative h-fit">
        {/* sidebar start */}
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
              <p className="text-2xl md:text-3xl font-bold">
                {paymentType === "cash"
                  ? numberWithCommas(
                      parseFloat(cost.equipment) +
                        parseFloat(cost.installationCost) +
                        upgradeCost
                    )
                  : numberWithCommas(
                      (parseFloat(cost.equipment) +
                        parseFloat(cost.installationCost) +
                        upgradeCost) /
                        12
                    )}
              </p>
              <p className="text-sm md:text-lg font-bold text-[#999999]">
                ($2.8/watt)
              </p>
            </div>
            {/* <p className="text-base">
              * After Federal & State Incentives $30,000.50
            </p> */}
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
        {/* sidebar end */}

        <div className="col-span-3 md:col-span-2">
          {/* first card start */}
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
                    <div className="mt-[55px] grid md:grid-cols-2 w-full gap-x-16">
                      <div className="md:size-[400px] rounded-[10px] overflow-hidden">
                        <Image
                          // src="/assets/images/roofImage.jpg"
                          src={panelConfig?.imageURL}
                          width={500}
                          height={500}
                          alt="map"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-5 leading-7 md:leading-[50px] mt-10 md:mt-0">
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">
                            Electricity Bill
                          </h2>
                          <p className="text-xl mt-1">
                            {quoteData?.bill || 0} Dollars
                          </p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">
                            System Size
                          </h2>
                          <p className="text-xl mt-1">{systemSize} kW</p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">
                            Estimated Yearly Production
                          </h2>
                          <p className="text-xl mt-1">
                            {solarType == "0" ? totalKWH : totalKWH * 1.375} kWh
                          </p>
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">
                            Number of Panels
                          </h2>
                          <p className="text-xl mt-1">{panelCount}</p>
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
                          className="block rounded-[10px] bg-[#BBC1FF]/25 py-2 md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                        >
                          <p className="text-sm">{solarTypeList[solarType]}</p>
                        </div>
                      </div>
                      <div className="mt-[17px]">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Inverter
                        </h3>
                        <div
                          type="text"
                          className="block rounded-[10px] bg-[#BBC1FF]/25 py-2 md:w-3/5  pl-[10px] border border-[#BBC1FF]/25 "
                        >
                          <p className="text-sm">
                            Enphase IQ7PLUS-72-2- US(x16)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="customize">
                  <CustomizeTabSection
                    quoteData={quoteData}
                    unitPrice={unitPrice}
                    setUnitPrice={setUnitPrice}
                    systemSize={systemSize}
                    totalKWH={totalKWH}
                    panelCount={panelCount}
                    setBill={(value) =>
                      setQuoteData((prev) => ({ ...prev, bill: value }))
                    }
                    setPanelCount={setPanelCount}
                    maxPanelCount={panelConfig?.all_pixel_coordinates.length}
                    imageURL={panelConfig?.imageURL}
                    solarTypeList={solarTypeList}
                    solarType={solarType}
                    setSolarType={setSolarType}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          {/* first card end */}

          {/* second card start */}
          <UpgradeSection setUpgradeCost={setUpgradeCost} />
          {/* second card end */}

          {/* third card start */}
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
                  <div className="">
                    <div className="">
                      <div className="flex justify-between md:pr-12 mb-3">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Equipment
                        </h3>
                        <p className="text-[20px] font-bold">
                          ${numberWithCommas(cost.equipment)}
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-[#999999]">
                        <li>Full installation of pv system.</li>
                        <li>25 year monitoring and service of solar system.</li>
                        <li>Price includes all fees & sales tax.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <div>
                      <div className="flex justify-between md:pr-12 mb-3">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Recurring Service
                        </h3>
                        <p className="text-[20px] font-bold">$0</p>
                      </div>
                      <ul className="list-disc list-inside text-[#999999]">
                        <li>
                          10 Years of equipment deep-cleaning, available every
                          24 months ($1,000 value).
                        </li>
                        <li>
                          24/7 consumption & production monitoring ($1,500
                          value).
                        </li>
                        <li>
                          10% on all future products/services (battery, reroof,
                          repair, etc).
                        </li>
                        <li>
                          Additional benefits will be covered during the
                          onboarding call.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <div>
                      <div className="flex justify-between md:pr-12 mb-3">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Installation Cost
                        </h3>
                        <p className="text-[20px] font-bold">
                          ${numberWithCommas(cost?.installationCost)}
                        </p>
                      </div>
                      <ul className="list-disc list-inside text-[#999999]">
                        <li>
                          Initial site inspection and consultation to evaluate
                          your energy needs.
                        </li>
                        <li>
                          Full installation of solar panels, including mounting
                          hardware.
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
                  </div>
                  <div className="mt-[20px]">
                    <div>
                      <div className="flex justify-between md:pr-12 mb-3">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Upgradation Cost
                        </h3>
                        <p className="text-[20px] font-bold">
                          ${numberWithCommas(upgradeCost)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="w-full border border-white mt-5" />
                  <div className="flex justify-between md:pr-10 mt-[16px]">
                    <h3 className="text-2xl md:text-[30px] font-bold">Total</h3>

                    <p className="text-[20px] font-bold">
                      $
                      {numberWithCommas(
                        parseFloat(cost.equipment) +
                          parseFloat(cost.installationCost) +
                          upgradeCost
                      )}
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="financing">
                <div className="mt-[35px]">
                  <div className="flex justify-between pr-10">
                    <div>
                      <h3 className="text-2xl md:text-[30px] font-bold mb-3">
                        Equipment
                      </h3>
                      <ul className="list-disc list-inside text-[#999999]">
                        <li>Full installation of pv system.</li>
                        <li>25 year monitoring and service of solar system.</li>
                        <li>Price includes all fees & sales tax.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <div className="">
                      <div className="flex justify-between md:pr-4 mb-3">
                        <h3 className="text-2xl md:text-[30px] font-bold">
                          Recurring Service
                        </h3>
                        <p className="text-[20px] font-bold">(Included)</p>
                      </div>
                      <ul className="list-disc list-inside text-[#999999]">
                        <li>
                          10 Years of equipment deep-cleaning, available every
                          24 months ($1,000 value).
                        </li>
                        <li>
                          24/7 consumption & production monitoring ($1,500
                          value).
                        </li>
                        <li>
                          10% on all future products/services (battery, reroof,
                          repair, etc).
                        </li>
                        <li>
                          Additional benefits will be covered during the
                          onboarding call.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <hr className="w-full border border-white mt-5" />
                  <div className="flex justify-between md:pr-10 mt-[16px]">
                    <h3 className="text-2xl md:text-[30px] font-bold">
                      Monthly Cost
                    </h3>

                    <p className="text-[20px] font-bold">
                      $
                      {numberWithCommas(
                        (parseFloat(cost.equipment) +
                          parseFloat(cost.installationCost) +
                          upgradeCost) /
                          12
                      )}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          {/* third card end */}

          {/* fourth card start */}
          <div className="bg-white/10 rounded-[20px] md:pt-[62px] md:pb-[105px] md:px-[134px] p-8 mt-8 relative right-0">
            <div className="mt-[35px]">
              <div className="mt-12 md:mt-[20px]">
                <h3 className="text-2xl md:text-[30px] font-bold text-center">
                  THE FACTS
                </h3>
                <p className="text-lg md:text-xl text-center mt-[20px]">
                  More solar will be installed in the United States in the next
                  two years than the last 40+ years combined
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
          {/* fourth card end */}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
