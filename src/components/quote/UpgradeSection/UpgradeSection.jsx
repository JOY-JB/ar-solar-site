"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const UpgradeCard = () => {
  const data = [
    {
      title: "EV Charger",
      description:
        "Installation of a 240V outlet for your electric vehicle charger.",
      price: 1000,
      image: "/assets/images/upgrade/1.png",
    },
    {
      title: "Smart Thermostat",
      description:
        "Installation of a smart thermostat to help you save energy.",
      price: 500,
      image: "/assets/images/upgrade/2.jpg",
    },
    {
      title: "Smart Lock",
      description: "Installation of a smart lock to help you secure your home.",
      price: 300,
      image: "/assets/images/upgrade/3.jpg",
    },
    {
      title: "Smart Lights",
      description: "Installation of smart lights to help you save energy.",
      price: 200,
      image: "/assets/images/upgrade/4.jpg",
    },
    {
      title: "Smart Blinds",
      description: "Installation of smart blinds to help you save energy.",
      price: 200,
      image: "/assets/images/upgrade/5.jpg",
    },
    {
      title: "Smart Plugs",
      description: "Installation of smart plugs to help you save energy.",
      price: 200,
      image: "/assets/images/upgrade/6.jpg",
    },
  ];

  const [checkedItems, setCheckedItems] = useState(
    new Array(data.length).fill(false)
  );

  const handleCheckChange = (index) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="bg-white/10 rounded-[20px] md:p-16 md:px-[134px] p-8 mt-8 relative right-0">
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <label
            key={index}
            className="group relative border border-white/10 p-2 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
          >
            <input
              type="checkbox"
              className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              checked={checkedItems[index]}
              onChange={() => handleCheckChange(index)}
            />
            <div className="flex items-center justify-between">
              <div className="max-w-[82%] flex items-center gap-2">
                <span className={checkedItems[index] ? "hidden" : "block"}>
                  <RiCheckboxBlankCircleLine size={25} />
                </span>
                <span className={checkedItems[index] ? "block" : "hidden"}>
                  <RiCheckboxCircleLine size={25} />
                </span>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h3
                      className="md:text-lg font-bold text-white truncate"
                      style={{ maxWidth: "70%" }}
                    >
                      {item.title}
                    </h3>
                    <h3 className="text-lg font-bold text-white">
                      ${item.price}
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 md:text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={0}
                className="w-12 h-16 object-cover rounded-md bg-white/30"
              />
            </div>
            <div className="absolute inset-0 peer-checked:bg-white/20 rounded-xl transition-all"></div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default UpgradeCard;
